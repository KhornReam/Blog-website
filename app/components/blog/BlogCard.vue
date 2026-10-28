<script setup lang="ts">
import { CalendarDays, Clock, ArrowRight } from '@lucide/vue'
import type { BlogPost } from '~/data/types'
import { blogCategories } from '~/data/categories'
import { formatDate } from '~/utils/formatDate'

const props = withDefaults(
  defineProps<{
    post: BlogPost
    /** Above-the-fold cards load eagerly; the rest lazy-load. */
    eager?: boolean
  }>(),
  { eager: false },
)

const categoryLabel = computed(
  () => blogCategories.find((category) => category.slug === props.post.category)?.label ?? props.post.category,
)
</script>

<template>
  <article
    class="group flex h-full flex-col overflow-hidden rounded-lg border border-beige bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
  >
    <NuxtLink
      :to="`/blog/${post.slug}`"
      class="block aspect-[16/10] overflow-hidden"
      :aria-label="post.title"
      tabindex="-1"
    >
      <img
        :src="post.cover.src"
        :alt="post.cover.alt"
        :loading="eager ? 'eager' : 'lazy'"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
    </NuxtLink>

    <div class="flex flex-1 flex-col p-5">
      <div class="flex flex-wrap items-center gap-3">
        <CategoryBadge :label="categoryLabel" />
        <span class="inline-flex items-center gap-1 text-xs text-sage">
          <CalendarDays :size="14" aria-hidden="true" />
          {{ formatDate(post.publishedAt) }}
        </span>
      </div>

      <h3 class="mt-4 font-display text-xl leading-snug text-charcoal">
        <NuxtLink
          :to="`/blog/${post.slug}`"
          class="underline-offset-4 transition hover:text-forest hover:underline"
        >
          {{ post.title }}
        </NuxtLink>
      </h3>

      <p class="mt-2 flex-1 text-sm leading-relaxed text-sage">{{ post.excerpt }}</p>

      <div class="mt-5 flex items-center justify-between border-t border-beige pt-4">
        <span class="inline-flex items-center gap-1 text-xs text-sage">
          <Clock :size="14" aria-hidden="true" />
          {{ post.readingTime }} min read
        </span>
        <span class="inline-flex items-center gap-1 text-xs font-semibold text-forest">
          Read More
          <ArrowRight :size="14" class="transition group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </div>
  </article>
</template>
