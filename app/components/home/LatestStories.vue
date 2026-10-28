<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
import { useBlog } from '~/composables/useBlog'

const { filteredPosts } = useBlog()

/** Newest four articles; the composable already sorts by publication date. */
const latestPosts = computed(() => filteredPosts.value.slice(0, 4))
</script>

<template>
  <section class="border-y border-beige bg-white/60">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="Travel Stories"
        title="Latest From the Journal"
        description="Field notes, slow roads and the small details that make a trip worth retelling."
        link-to="/blog"
        link-label="Read all stories"
      >
        <template #link-icon>
          <ArrowRight :size="16" aria-hidden="true" />
        </template>
      </SectionHeading>

      <BlogGrid :posts="latestPosts" :columns="4" />
    </div>
  </section>
</template>
