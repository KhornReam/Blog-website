<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
import { destinations } from '~/data/destinations'

const featuredDestinations = destinations.slice(0, 4)
</script>

<template>
  <section id="destinations" class="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:py-24">
    <SectionHeading
      eyebrow="Destinations"
      title="Places Worth the Journey"
      description="Riverside towns, highland forests and quiet coasts — a starting point for your own route through Cambodia and beyond."
      link-to="/destinations"
      link-label="View all destinations"
    >
      <template #link-icon>
        <ArrowRight :size="16" aria-hidden="true" />
      </template>
    </SectionHeading>

    <DestinationGrid :destinations="featuredDestinations" />
  </section>
</template>
