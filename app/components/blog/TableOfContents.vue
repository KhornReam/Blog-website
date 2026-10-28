<script setup lang="ts">
import { List } from '@lucide/vue'
import type { ArticleSection } from '~/data/types'

defineProps<{
  sections: ArticleSection[]
}>()
</script>

<template>
  <!-- Anchored list of in-page headings; only shown for articles with 2+ sections. -->
  <nav
    v-if="sections.length > 1"
    aria-label="Table of contents"
    class="rounded-lg border border-beige bg-white p-6"
  >
    <p class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sage">
      <List :size="14" aria-hidden="true" />
      Table of contents
    </p>
    <ol class="mt-4 space-y-2 text-sm">
      <li v-for="(section, index) in sections" :key="section.id">
        <a
          :href="`#${section.id}`"
          class="flex gap-3 text-charcoal underline-offset-4 transition hover:text-forest hover:underline"
        >
          <span class="text-sage">{{ String(index + 1).padStart(2, '0') }}</span>
          {{ section.heading }}
        </a>
      </li>
    </ol>
  </nav>
</template>
