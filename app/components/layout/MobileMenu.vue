<script setup lang="ts">
import { X, Search, Compass } from '@lucide/vue'
import { navItems } from '~/data/navigation'

const props = defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const route = useRoute()
const searchQuery = ref('')

watch(
  () => props.open,
  (isOpen) => {
    if (import.meta.server) return
    document.body.style.overflow = isOpen ? 'hidden' : ''
    if (isOpen) nextTick(() => menuPanel.value?.focus())
  },
)

// Close whenever navigation happens, and on Escape.
watch(() => route.fullPath, () => emit('close'))

const menuPanel = ref<HTMLElement | null>(null)

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && props.open) emit('close')
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})

function submitSearch() {
  const term = searchQuery.value.trim()
  emit('close')
  navigateTo({ path: '/blog', query: term ? { q: term } : {} })
}
</script>

<template>
  <!-- Rendered only on the client, as a full-screen overlay above the page. -->
  <div
    v-if="open"
    class="fixed inset-0 z-50 flex flex-col bg-forest-deep text-cream lg:hidden"
    role="dialog"
    aria-modal="true"
    aria-label="Site navigation"
  >
    <div class="flex items-center justify-between px-6 py-5">
      <span class="font-display text-xl">Wander With Ream</span>
      <button
        ref="menuPanel"
        type="button"
        class="rounded-full p-2 transition hover:bg-cream/10"
        aria-label="Close menu"
        @click="emit('close')"
      >
        <X :size="24" />
      </button>
    </div>

    <nav class="flex-1 overflow-y-auto px-6 pb-10" aria-label="Mobile">
      <form class="mb-8 flex items-center gap-2 rounded-full bg-cream/10 px-4 py-3" @submit.prevent="submitSearch">
        <Search :size="18" class="shrink-0 text-cream/70" aria-hidden="true" />
        <label for="mobile-search" class="sr-only">Search stories</label>
        <input
          id="mobile-search"
          v-model="searchQuery"
          type="search"
          placeholder="Search stories…"
          class="w-full bg-transparent text-sm text-cream placeholder:text-cream/50 focus:outline-none"
        />
      </form>

      <ul class="space-y-1">
        <li v-for="item in navItems" :key="item.to">
          <NuxtLink
            :to="item.to"
            class="block border-b border-cream/10 py-4 font-display text-2xl text-cream/90 transition hover:text-cream"
            active-class="text-white"
            @click="emit('close')"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>

      <NuxtLink
        to="/destinations"
        class="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-cream px-6 py-4 font-medium text-forest transition hover:bg-beige"
        @click="emit('close')"
      >
        <Compass :size="18" />
        Explore destinations
      </NuxtLink>
    </nav>
  </div>
</template>
