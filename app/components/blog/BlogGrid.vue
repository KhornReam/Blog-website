<script setup lang="ts">
import type { BlogPost } from '~/data/types'

const props = withDefaults(
  defineProps<{
    posts: BlogPost[]
    emptyTitle?: string
    emptyMessage?: string
    /** Number of cards per row on large screens. */
    columns?: 3 | 4
  }>(),
  {
    emptyTitle: 'No stories found',
    emptyMessage: 'Try a different search term or clear the category filter.',
    columns: 3,
  },
)
</script>

<template>
  <div
    v-if="posts.length > 0"
    class="grid gap-6 sm:grid-cols-2"
    :class="props.columns === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'"
  >
    <BlogCard
      v-for="(post, index) in posts"
      :key="post.slug"
      :post="post"
      :eager="index < 3"
    />
  </div>

  <EmptyState v-else :title="emptyTitle" :message="emptyMessage">
    <slot name="empty-action" />
  </EmptyState>
</template>
