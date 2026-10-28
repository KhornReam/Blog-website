<script setup lang="ts">
import { ArrowRight, CalendarDays, Clock } from '@lucide/vue'
import { useBlog } from '~/composables/useBlog'
import { formatDate } from '~/utils/formatDate'

const { searchQuery, activeCategory, filteredPosts, featuredPost, setSearch, setCategory } =
  useBlog()

/** Cards are revealed in pages of 6; the counter resets whenever filters change. */
const visibleCount = ref(6)
watch([searchQuery, activeCategory], () => {
  visibleCount.value = 6
})

const visiblePosts = computed(() => filteredPosts.value.slice(0, visibleCount.value))
const hasMore = computed(() => filteredPosts.value.length > visibleCount.value)

const isFiltering = computed(() => Boolean(searchQuery.value || activeCategory.value))

useSeoMeta({
  title: 'Travel Stories · Wander With Ream',
  description:
    'Browse every article: mountain mornings, river roads, countryside weekends and Khmer food stories from the journal.',
})
</script>

<template>
  <div>
    <header class="border-b border-beige bg-white/60">
      <div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <p class="text-xs font-semibold uppercase tracking-[0.25em] text-sage">The journal</p>
        <h1 class="mt-4 font-display text-4xl text-charcoal sm:text-5xl">Travel Stories</h1>
        <p class="mt-4 max-w-2xl leading-relaxed text-sage">
          Longer pieces from the road, written as sample content for this project. Search by title
          or topic, or filter by category.
        </p>
      </div>
    </header>

    <section class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <!-- Featured article (hidden while searching or filtering) -->
      <article
        v-if="featuredPost && !isFiltering"
        class="mb-12 overflow-hidden rounded-lg border border-beige bg-white lg:grid lg:grid-cols-2"
      >
        <NuxtLink
          :to="`/blog/${featuredPost.slug}`"
          class="block aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-full"
          tabindex="-1"
          aria-hidden="true"
        >
          <img
            :src="featuredPost.cover.src"
            :alt="featuredPost.cover.alt"
            class="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        </NuxtLink>

        <div class="flex flex-col justify-center p-8 sm:p-10">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-sage">Featured story</p>
          <h2 class="mt-4 font-display text-3xl leading-tight text-charcoal sm:text-4xl">
            <NuxtLink
              :to="`/blog/${featuredPost.slug}`"
              class="underline-offset-4 transition hover:text-forest hover:underline"
            >
              {{ featuredPost.title }}
            </NuxtLink>
          </h2>
          <p class="mt-4 leading-relaxed text-sage">{{ featuredPost.excerpt }}</p>
          <p class="mt-5 flex flex-wrap items-center gap-4 text-sm text-sage">
            <span class="inline-flex items-center gap-1.5">
              <CalendarDays :size="15" aria-hidden="true" />
              {{ formatDate(featuredPost.publishedAt) }}
            </span>
            <span class="inline-flex items-center gap-1.5">
              <Clock :size="15" aria-hidden="true" />
              {{ featuredPost.readingTime }} min read
            </span>
          </p>
          <NuxtLink
            :to="`/blog/${featuredPost.slug}`"
            class="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-forest-deep"
          >
            Read the story
            <ArrowRight :size="16" aria-hidden="true" />
          </NuxtLink>
        </div>
      </article>

      <!-- Search + categories -->
      <BlogFilters />

      <div class="mt-8 flex flex-wrap items-center justify-between gap-3">
        <p class="text-sm text-sage" role="status" aria-live="polite">
          {{ filteredPosts.length }}
          {{ filteredPosts.length === 1 ? 'story' : 'stories' }} found
        </p>
        <p class="text-sm text-sage">Sorted by newest first</p>
      </div>

      <!-- Article grid -->
      <div class="mt-6">
        <BlogGrid :posts="visiblePosts">
          <template #empty-action>
            <button
              type="button"
              class="rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-forest-deep"
              @click="setSearch(''); setCategory('')"
            >
              Clear search & filters
            </button>
          </template>
        </BlogGrid>
      </div>

      <!-- Load more -->
      <div v-if="hasMore" class="mt-10 text-center">
        <button
          type="button"
          class="rounded-full border border-forest px-6 py-3 text-sm font-medium text-forest transition hover:bg-forest hover:text-cream"
          @click="visibleCount += 6"
        >
          Load more stories
          <span class="text-sage">
            ({{ filteredPosts.length - visibleCount }} remaining)
          </span>
        </button>
      </div>
    </section>
  </div>
</template>
