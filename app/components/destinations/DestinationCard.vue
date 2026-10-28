<script setup lang="ts">
import { MapPin, ArrowRight } from '@lucide/vue'
import type { Destination } from '~/data/types'

defineProps<{
  destination: Destination
  eager?: boolean
}>()
</script>

<template>
  <article
    class="group flex h-full flex-col overflow-hidden rounded-lg border border-beige bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
  >
    <NuxtLink
      :to="`/destinations/${destination.slug}`"
      class="relative block aspect-[4/3] overflow-hidden"
      :aria-label="destination.name"
      tabindex="-1"
    >
      <img
        :src="destination.image.src"
        :alt="destination.image.alt"
        :loading="eager ? 'eager' : 'lazy'"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <span
        class="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest"
      >
        {{ destination.category }}
      </span>
    </NuxtLink>

    <div class="flex flex-1 flex-col p-5">
      <p class="inline-flex items-center gap-1 text-xs text-sage">
        <MapPin :size="14" aria-hidden="true" />
        {{ destination.location }}
      </p>

      <h3 class="mt-2 font-display text-2xl text-charcoal">
        <NuxtLink
          :to="`/destinations/${destination.slug}`"
          class="underline-offset-4 transition hover:text-forest hover:underline"
        >
          {{ destination.name }}
        </NuxtLink>
      </h3>

      <p class="mt-2 flex-1 text-sm leading-relaxed text-sage">
        {{ destination.shortDescription }}
      </p>

      <NuxtLink
        :to="`/destinations/${destination.slug}`"
        class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest"
      >
        View destination
        <ArrowRight :size="16" class="transition group-hover:translate-x-1" aria-hidden="true" />
      </NuxtLink>
    </div>
  </article>
</template>
