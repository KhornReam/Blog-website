<script setup lang="ts">
import { Search, X, ArrowUpRight } from '@lucide/vue'
import { destinations } from '~/data/destinations'
import { sortedPosts } from '~/data/posts'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: []; open: [] }>()
const route = useRoute()
const query = ref('')
const searchInput = ref<HTMLInputElement | null>(null)

const entries = [
  ...destinations.map((item) => ({
    title: item.name,
    subtitle: `${item.location} · Destination`,
    to: `/destinations/${item.slug}`,
    terms: `${item.name} ${item.location} ${item.region} ${item.shortDescription}`,
  })),
  ...sortedPosts.map((item) => ({
    title: item.title,
    subtitle: `${item.category} · ${item.readingTime} min read`,
    to: `/blog/${item.slug}`,
    terms: `${item.title} ${item.excerpt} ${item.category} ${item.tags.join(' ')}`,
  })),
]

const results = computed(() => {
  const term = query.value.trim().toLowerCase()
  const matches = term
    ? entries.filter((entry) => entry.terms.toLowerCase().includes(term))
    : entries.filter((entry) => entry.to.startsWith('/destinations/'))
  return matches.slice(0, 7)
})

watch(
  () => props.open,
  async (isOpen) => {
    if (import.meta.server) return
    document.body.style.overflow = isOpen ? 'hidden' : ''
    if (isOpen) {
      query.value = ''
      await nextTick()
      searchInput.value?.focus()
    }
  },
)

watch(() => route.fullPath, () => emit('close'))

function close() {
  emit('close')
}

function onKeydown(event: KeyboardEvent) {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault()
    emit('open')
    return
  }
  if (event.key === 'Escape' && props.open) close()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-forest-deep/55 px-4 pb-4 pt-[max(1rem,8vh)] backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-label="Search the site"
        @click.self="close"
      >
        <section class="w-full max-w-xl overflow-hidden rounded-2xl border border-beige bg-cream shadow-2xl">
          <form class="flex items-center gap-3 border-b border-beige px-5 py-4" @submit.prevent="results[0] && navigateTo(results[0].to)">
            <Search :size="20" class="shrink-0 text-sage" aria-hidden="true" />
            <input
              ref="searchInput"
              v-model="query"
              type="search"
              placeholder="Search places and stories…"
              aria-label="Search places and stories"
              class="min-w-0 flex-1 bg-transparent text-base text-charcoal outline-none placeholder:text-sage"
            />
            <button type="button" class="rounded-lg p-1.5 text-sage transition hover:bg-beige hover:text-forest" aria-label="Close search" @click="close">
              <X :size="18" />
            </button>
          </form>

          <div class="px-3 py-3">
            <p class="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-sage">
              {{ query.trim() ? 'Search results' : 'Explore destinations' }}
            </p>
            <ul v-if="results.length" class="space-y-1" aria-live="polite">
              <li v-for="result in results" :key="result.to">
                <NuxtLink
                  :to="result.to"
                  class="group flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-white"
                  @click="close"
                >
                  <span class="min-w-0">
                    <span class="block truncate text-sm font-semibold text-charcoal group-hover:text-forest">{{ result.title }}</span>
                    <span class="mt-0.5 block truncate text-xs text-sage">{{ result.subtitle }}</span>
                  </span>
                  <ArrowUpRight :size="17" class="ml-3 shrink-0 text-sage transition group-hover:text-forest" aria-hidden="true" />
                </NuxtLink>
              </li>
            </ul>
            <p v-else class="px-3 py-8 text-center text-sm text-sage">No matching places or stories. Try another search.</p>
          </div>

          <footer class="flex items-center justify-between border-t border-beige px-5 py-3 text-[11px] text-sage">
            <span>Search across the travel journal</span>
            <span><kbd class="rounded border border-beige bg-white px-1.5 py-0.5">Esc</kbd> to close</span>
          </footer>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>
