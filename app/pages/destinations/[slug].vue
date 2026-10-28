<script setup lang="ts">
import { ArrowLeft, MapPin, CalendarDays, Route, CheckCircle2 } from '@lucide/vue'

const route = useRoute()
const { findDestination, destinations } = useDestinations()

const slugParam = route.params.slug
const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam
const destination = findDestination(slug)

// Unknown slug -> proper 404 (renders app/error.vue).
if (!destination) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Destination not found',
    fatal: true,
  })
}

useSeoMeta({
  title: `${destination.name} · Destinations · Wander With Ream`,
  description: destination.shortDescription,
  ogTitle: `${destination.name} — Wander With Ream`,
  ogDescription: destination.shortDescription,
  ogImage: destination.image.src,
})

/** Other destinations in the same category, falling back to the full list. */
const relatedDestinations = computed(() => {
  const sameCategory = destinations.filter(
    (item) => item.category === destination!.category && item.slug !== destination!.slug,
  )
  const others = destinations.filter(
    (item) => item.slug !== destination!.slug && !sameCategory.includes(item),
  )
  return [...sameCategory, ...others].slice(0, 3)
})
</script>

<template>
  <article v-if="destination">
    <!-- Cover -->
    <header class="relative">
      <img
        :src="destination.image.src"
        :alt="destination.image.alt"
        class="h-72 w-full object-cover sm:h-96 lg:h-[28rem]"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/40 to-transparent" />

      <div class="absolute inset-x-0 bottom-0">
        <div class="mx-auto max-w-7xl px-4 pb-8 sm:px-6 sm:pb-10">
          <NuxtLink
            to="/destinations"
            class="mb-4 inline-flex items-center gap-2 text-sm text-cream/85 transition hover:text-cream"
          >
            <ArrowLeft :size="16" aria-hidden="true" />
            All destinations
          </NuxtLink>
          <p class="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-cream/80">
            <span>{{ destination.region }}</span>
            <span class="rounded-full border border-cream/40 px-3 py-1 normal-case tracking-normal">
              {{ destination.category }}
            </span>
          </p>
          <h1 class="mt-3 font-display text-4xl text-cream sm:text-5xl">{{ destination.name }}</h1>
          <p class="mt-2 flex items-center gap-2 text-cream/85">
            <MapPin :size="16" aria-hidden="true" />
            {{ destination.location }}
          </p>
        </div>
      </div>
    </header>

    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <div class="grid gap-10 lg:grid-cols-3">
        <!-- Main copy -->
        <div class="lg:col-span-2">
          <p class="font-display text-xl leading-relaxed text-charcoal sm:text-2xl">
            {{ destination.shortDescription }}
          </p>
          <p class="mt-6 leading-8 text-charcoal/90">{{ destination.description }}</p>

          <h2 class="mt-10 font-display text-2xl text-charcoal">Highlights</h2>
          <ul class="mt-4 space-y-3">
            <li
              v-for="highlight in destination.highlights"
              :key="highlight"
              class="flex items-start gap-3 text-charcoal/90"
            >
              <CheckCircle2 :size="18" class="mt-1 shrink-0 text-forest" aria-hidden="true" />
              {{ highlight }}
            </li>
          </ul>
        </div>

        <!-- Practical details -->
        <aside class="space-y-4">
          <div class="rounded-lg border border-beige bg-white p-6">
            <h2 class="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-sage">
              <CalendarDays :size="16" aria-hidden="true" />
              Best time to visit
            </h2>
            <p class="mt-3 text-sm leading-relaxed text-charcoal/90">
              {{ destination.bestTimeToVisit }}
            </p>
          </div>

          <div class="rounded-lg border border-beige bg-white p-6">
            <h2 class="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-sage">
              <Route :size="16" aria-hidden="true" />
              Getting there
            </h2>
            <p class="mt-3 text-sm leading-relaxed text-charcoal/90">
              {{ destination.gettingThere }}
            </p>
          </div>
        </aside>
      </div>

      <!-- Related destinations -->
      <section class="mt-16 border-t border-beige pt-12">
        <SectionHeading
          eyebrow="Keep exploring"
          title="More Places to Discover"
          link-to="/destinations"
          link-label="All destinations"
        />
        <DestinationGrid :destinations="relatedDestinations" />
      </section>
    </div>
  </article>
</template>
