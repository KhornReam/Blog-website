<script setup lang="ts">
import { ArrowRight, UtensilsCrossed } from '@lucide/vue'
import { useBlog } from '~/composables/useBlog'

const { foodPosts } = useBlog()

const featuredFood = computed(() => foodPosts.value.slice(0, 4))
</script>

<template>
  <section class="bg-beige/70">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="Food & Local Flavors"
        title="What the Road Tastes Like"
        description="Khmer classics, morning markets and grill smoke by the river — food is half the reason to travel."
        link-to="/food"
        link-label="Explore food & drink"
      >
        <template #link-icon>
          <ArrowRight :size="16" aria-hidden="true" />
        </template>
      </SectionHeading>

      <BlogGrid :posts="featuredFood" :columns="4" />

      <p class="mt-8 flex items-center gap-2 text-sm text-sage">
        <UtensilsCrossed :size="16" aria-hidden="true" />
        Sample food writing for demonstration — no restaurant reviews or paid partnerships.
      </p>
    </div>
  </section>
</template>
