<script setup lang="ts">
import { useBlog } from '~/composables/useBlog'
import { adventureGroups, findCategory } from '~/data/categories'

const route = useRoute()
const router = useRouter()
const { filteredPosts } = useBlog()

/** Adventure group currently chosen, kept in ?type= so links are shareable. */
const activeType = computed(() => {
  const value = route.query.type
  return typeof value === 'string' && findCategory(adventureGroups, value) ? value : ''
})

const activeGroup = computed(() => findCategory(adventureGroups, activeType.value))

/**
 * Adventures = every non-food story, optionally narrowed to one group.
 * Food articles live on their own page (/food).
 */
const adventurePosts = computed(() => {
  const travelPosts = filteredPosts.value.filter((post) => post.category !== 'food')
  if (!activeType.value) return travelPosts
  return travelPosts.filter((post) => post.tags.includes(activeType.value))
})

function setType(slug: string) {
  router.replace({ query: { ...route.query, type: slug || undefined } })
}

useSeoMeta({
  title: 'Adventures · Wander With Ream',
  description:
    'Mountains, rivers and waterfalls, forests, countryside road trips and camping — filter travel experiences by the kind of adventure you are planning.',
})
</script>

<template>
  <div>
    <header class="border-b border-beige bg-white/60">
      <div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <p class="text-xs font-semibold uppercase tracking-[0.25em] text-sage">Out there</p>
        <h1 class="mt-4 font-display text-4xl text-charcoal sm:text-5xl">Adventures</h1>
        <p class="mt-4 max-w-2xl leading-relaxed text-sage">
          Every trip sorts itself into one of five kinds of adventure. Pick a category to see the
          matching stories from the journal.
        </p>
      </div>
    </header>

    <section class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <FilterBar
        :active="activeType"
        :options="adventureGroups"
        all-label="All adventures"
        @update:active="setType"
      />

      <div class="mt-6 flex flex-wrap items-baseline justify-between gap-3">
        <p class="text-sm text-sage" role="status" aria-live="polite">
          {{ adventurePosts.length }}
          {{ adventurePosts.length === 1 ? 'story' : 'stories' }}
          {{ activeGroup ? `in ${activeGroup.label}` : 'across all adventures' }}
        </p>
        <p v-if="activeGroup" class="text-sm italic text-sage">{{ activeGroup.description }}</p>
      </div>

      <div class="mt-6">
        <BlogGrid
          :posts="adventurePosts"
          empty-title="No adventures in this category yet"
          empty-message="Try another adventure type — or check back when the next story is published."
        >
          <template #empty-action>
            <button
              type="button"
              class="rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-forest-deep"
              @click="setType('')"
            >
              Show all adventures
            </button>
          </template>
        </BlogGrid>
      </div>
    </section>
  </div>
</template>
