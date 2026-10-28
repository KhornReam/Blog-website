<script setup lang="ts">
import type { ArticleSection } from '~/data/types'

defineProps<{
  sections: ArticleSection[]
}>()
</script>

<template>
  <!-- Renders one <section> per heading, matching the table of contents ids. -->
  <div class="space-y-12">
    <section v-for="section in sections" :key="section.id" :id="section.id" class="scroll-mt-28">
      <h2 class="font-display text-2xl text-charcoal sm:text-3xl">{{ section.heading }}</h2>

      <div class="mt-5 space-y-5">
        <p
          v-for="(paragraph, index) in section.paragraphs"
          :key="index"
          class="leading-8 text-charcoal/90"
        >
          {{ paragraph }}
        </p>
      </div>

      <figure v-if="section.image" class="mt-8">
        <img
          :src="section.image.src"
          :alt="section.image.alt"
          loading="lazy"
          class="aspect-[16/10] w-full rounded-lg object-cover"
        />
        <figcaption v-if="section.image.caption" class="mt-3 text-sm text-sage">
          {{ section.image.caption }}
        </figcaption>
      </figure>
    </section>
  </div>
</template>
