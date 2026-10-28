<script setup lang="ts">
const { searchQuery, activeRegion, filteredDestinations, setRegion, setSearch, regions } =
  useDestinations()

useSeoMeta({
  title: 'Destinations · Wander With Ream',
  description:
    'Search and filter destinations: riverside towns, highland forests, mountains and quiet coasts, with maps of when to go and how to get there.',
})

function clearFilters() {
  setSearch('')
  setRegion('')
}
</script>

<template>
  <div>
    <!-- Page header -->
    <header class="border-b border-beige bg-white/60">
      <div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <p class="text-xs font-semibold uppercase tracking-[0.25em] text-sage">Where to go</p>
        <h1 class="mt-4 font-display text-4xl text-charcoal sm:text-5xl">Destinations</h1>
        <p class="mt-4 max-w-2xl leading-relaxed text-sage">
          A growing list of places worth the trip — search by name or province, and filter by
          landscape. Descriptions are general travel notes written for this demo, not trip reports.
        </p>
      </div>
    </header>

    <section class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <FilterBar
        :search="searchQuery"
        :active="activeRegion"
        :options="regions"
        search-label="Search destinations"
        placeholder="Search by name or province…"
        all-label="All regions"
        @update:search="setSearch"
        @update:active="setRegion"
      />

      <p class="mt-6 text-sm text-sage" role="status" aria-live="polite">
        {{ filteredDestinations.length }}
        {{ filteredDestinations.length === 1 ? 'destination' : 'destinations' }} found
      </p>

      <div class="mt-6">
        <DestinationGrid :destinations="filteredDestinations">
          <template #empty-action>
            <button
              type="button"
              class="rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-forest-deep"
              @click="clearFilters"
            >
              Clear search & filters
            </button>
          </template>
        </DestinationGrid>
      </div>
    </section>
  </div>
</template>
