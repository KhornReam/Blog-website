<script setup lang="ts">
import { ArrowRight, BookOpen, Compass, ArrowDown } from '@lucide/vue'
</script>

<template>
  <section class="relative flex min-h-[85vh] items-center overflow-hidden lg:min-h-[92vh]">
    <!-- Background landscape -->
    <img
      src="/images/hero.svg"
      alt="Illustrated landscape of misty green mountains with a river winding through the valley"
      class="absolute inset-0 h-full w-full object-cover"
      fetchpriority="high"
    />
    <!-- Overlays keep the white text readable over any part of the picture. -->
    <div class="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest-deep/65 to-forest-deep/25" />
    <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-forest-deep/70 to-transparent" />

    <div class="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-cream/80">
        My Travel Journal
      </p>

      <h1 class="mt-6 max-w-3xl font-display text-4xl leading-[1.1] text-cream sm:text-6xl lg:text-7xl">
        Somewhere Between Mountains, Rivers &amp; Memories.
      </h1>

      <p class="mt-6 max-w-xl text-base leading-relaxed text-cream/90 sm:text-lg">
        Exploring beautiful places, discovering local flavors, and collecting stories along the way.
      </p>

      <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <NuxtLink
          to="/adventures"
          class="inline-flex items-center justify-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-semibold text-forest transition hover:bg-beige"
        >
          <Compass :size="18" aria-hidden="true" />
          Explore My Adventures
        </NuxtLink>
        <NuxtLink
          to="/blog"
          class="inline-flex items-center justify-center gap-2 rounded-full border border-cream/50 px-6 py-3.5 text-sm font-semibold text-cream transition hover:border-cream hover:bg-cream/10"
        >
          <BookOpen :size="18" aria-hidden="true" />
          Read My Stories
        </NuxtLink>
      </div>

      <!-- Gentle scroll cue -->
      <div class="mt-14 hidden items-center gap-3 text-cream/70 sm:flex">
        <ArrowDown :size="16" class="animate-bounce" aria-hidden="true" />
        <span class="text-xs uppercase tracking-[0.25em]">Scroll to explore</span>
      </div>
    </div>
  </section>
</template>
