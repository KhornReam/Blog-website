<script setup lang="ts">
import { useBlog } from '~/composables/useBlog'
import { foodGroups, findCategory } from '~/data/categories'

const route = useRoute()
const router = useRouter()
const { foodPosts } = useBlog()

const searchQuery = computed(() => {
  const value = route.query.q
  return typeof value === 'string' ? value : ''
})

const activeGroup = computed(() => {
  const value = route.query.group
  return typeof value === 'string' && findCategory(foodGroups, value) ? value : ''
})

const visiblePosts = computed(() => {
  const term = searchQuery.value.trim().toLowerCase()
  return foodPosts.value.filter((post) => {
    const matchesGroup = !activeGroup.value || post.tags.includes(activeGroup.value)
    if (!matchesGroup) return false
    if (!term) return true
    return `${post.title} ${post.excerpt}`.toLowerCase().includes(term)
  })
})

function updateQuery(patch: Record<string, string | undefined>) {
  router.replace({ query: { ...route.query, ...patch } })
}

useSeoMeta({
  title: 'Food & Drink · Wander With Ream',
  description:
    'Khmer classics, street food, local markets and travel snacks — sample food writing from the road.',
})
</script>

<template>
  <div>
    <header class="border-b border-beige bg-white/60">
      <div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <p class="text-xs font-semibold uppercase tracking-[0.25em] text-sage">At the table</p>
        <h1 class="mt-4 font-display text-4xl text-charcoal sm:text-5xl">Food &amp; Drink</h1>
        <p class="mt-4 max-w-2xl leading-relaxed text-sage">
          Fish amok, morning noodles, grill smoke and market coffee. These are sample articles about
          dishes and food culture — not reviews of restaurants I have visited.
        </p>
      </div>
    </header>

    <section class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <FilterBar
        :search="searchQuery"
        :active="activeGroup"
        :options="foodGroups"
        search-label="Search food articles"
        placeholder="Search dishes or stories…"
        all-label="All food"
        @update:search="updateQuery({ q: $event || undefined })"
        @update:active="updateQuery({ group: $event || undefined })"
      />

      <p class="mt-6 text-sm text-sage" role="status" aria-live="polite">
        {{ visiblePosts.length }}
        {{ visiblePosts.length === 1 ? 'article' : 'articles' }} found
      </p>

      <div class="mt-6">
        <BlogGrid
          :posts="visiblePosts"
          empty-title="No food stories found"
          empty-message="Try another dish name, or switch off the category filter."
        >
          <template #empty-action>
            <button
              type="button"
              class="rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-forest-deep"
              @click="updateQuery({ q: undefined, group: undefined })"
            >
              Clear search & filters
            </button>
          </template>
        </BlogGrid>
      </div>
    </section>
  </div>
</template>
