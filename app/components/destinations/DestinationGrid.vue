<script setup lang="ts">
import type { Destination } from '~/data/types'

withDefaults(
  defineProps<{
    destinations: Destination[]
    emptyTitle?: string
    emptyMessage?: string
  }>(),
  {
    emptyTitle: 'No destinations found',
    emptyMessage: 'Try another search term or switch off the region filter.',
  },
)
</script>

<template>
  <div v-if="destinations.length > 0" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <DestinationCard
      v-for="(destination, index) in destinations"
      :key="destination.slug"
      :destination="destination"
      :eager="index < 3"
    />
  </div>

  <EmptyState v-else :title="emptyTitle" :message="emptyMessage">
    <slot name="empty-action" />
  </EmptyState>
</template>
