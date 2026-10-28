<script setup lang="ts">
import { Camera, Mountain, UtensilsCrossed, BookOpen, ArrowRight } from '@lucide/vue'

/**
 * All copy lives in this script block so it is easy to edit later —
 * nothing here is scraped from a real biography; it is sample text.
 */
const introduction = [
  "Hi, I'm Ream — a travel enthusiast who loves discovering quiet corners of nature: mountains that hide behind morning mist, rivers that carve their way through the forest, and countryside roads that reward anyone willing to slow down.",
  'Wander With Ream is my personal travel journal, where I write about the places I explore, the local food I come across, and the small moments that make a journey memorable.',
]

const whyTravel = [
  'Travel slows everything down. On the road there is no rush between meetings — only the next village, the next meal, the next view.',
  'It also puts ordinary life in perspective: the more different a place is from home, the more clearly home comes into focus.',
]

const favoriteDestinations = [
  'Mountains and highlands',
  'Rivers and waterfalls',
  'Forests and national parks',
  'Quiet countryside roads',
  'Coastal towns and islands',
  'Morning markets everywhere',
]

const interests = [
  'Landscape and nature photography',
  'Documenting street food and markets',
  'Slow, overland travel over flights',
  'Keeping notes for future articles',
]

/** Placeholder URLs — replace with real profiles. */
const socialLinks = [
  { label: 'Instagram', url: 'https://www.instagram.com/' },
  { label: 'YouTube', url: 'https://www.youtube.com/' },
  { label: 'Facebook', url: 'https://www.facebook.com/' },
]

useSeoMeta({
  title: 'About Me · Wander With Ream',
  description:
    'Meet Ream, the travel enthusiast behind Wander With Ream — and the kinds of places, food and photography this journal is about.',
})
</script>

<template>
  <div>
    <!-- Intro -->
    <header class="border-b border-beige bg-white/60">
      <div class="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:py-20">
        <div class="lg:col-span-1">
          <!-- Profile photo placeholder (swap the src for your own picture) -->
          <img
            src="/images/profile.svg"
            alt="Illustrated placeholder portrait of Ream against a mountain landscape"
            class="aspect-square w-56 rounded-full border-4 border-beige object-cover lg:w-full"
          />
        </div>

        <div class="lg:col-span-2">
          <p class="text-xs font-semibold uppercase tracking-[0.25em] text-sage">About me</p>
          <h1 class="mt-4 font-display text-4xl text-charcoal sm:text-5xl">Hello, I'm Ream</h1>

          <div class="mt-6 space-y-4 leading-8 text-charcoal/90">
            <p v-for="(paragraph, index) in introduction" :key="index">{{ paragraph }}</p>
          </div>

          <p class="mt-6 text-sm text-sage">
            Sample bio written for this demo project — edit it in <code>app/pages/about.vue</code>.
          </p>
        </div>
      </div>
    </header>

    <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
      <div class="grid gap-10 lg:grid-cols-2">
        <!-- Why travel -->
        <section class="rounded-lg border border-beige bg-white p-8">
          <h2 class="flex items-center gap-3 font-display text-2xl text-charcoal">
            <BookOpen :size="22" class="text-forest" aria-hidden="true" />
            Why I enjoy traveling
          </h2>
          <div class="mt-4 space-y-4 leading-8 text-charcoal/90">
            <p v-for="(paragraph, index) in whyTravel" :key="index">{{ paragraph }}</p>
          </div>
        </section>

        <!-- Favorite places -->
        <section class="rounded-lg border border-beige bg-white p-8">
          <h2 class="flex items-center gap-3 font-display text-2xl text-charcoal">
            <Mountain :size="22" class="text-forest" aria-hidden="true" />
            Favorite types of destinations
          </h2>
          <ul class="mt-4 flex flex-wrap gap-2">
            <li
              v-for="favorite in favoriteDestinations"
              :key="favorite"
              class="rounded-full bg-forest/10 px-4 py-2 text-sm text-forest"
            >
              {{ favorite }}
            </li>
          </ul>

          <h2 class="mt-8 flex items-center gap-3 font-display text-2xl text-charcoal">
            <Camera :size="22" class="text-forest" aria-hidden="true" />
            Photography &amp; travel interests
          </h2>
          <ul class="mt-4 space-y-2 text-charcoal/90">
            <li v-for="interest in interests" :key="interest" class="flex items-start gap-2">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" aria-hidden="true" />
              {{ interest }}
            </li>
          </ul>
        </section>
      </div>

      <!-- Social + CTA -->
      <section class="mt-10 rounded-lg bg-forest-deep p-8 text-cream sm:p-10">
        <div class="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 class="flex items-center gap-3 font-display text-2xl">
              <UtensilsCrossed :size="22" class="text-sage" aria-hidden="true" />
              Follow the journey
            </h2>
            <p class="mt-2 max-w-lg text-sm leading-relaxed text-cream/75">
              Placeholder links for now — replace them with your own profiles in
              <code>app/pages/about.vue</code>.
            </p>
            <ul class="mt-4 flex flex-wrap gap-3">
              <li v-for="social in socialLinks" :key="social.label">
                <a
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex rounded-full border border-cream/30 px-4 py-2 text-sm transition hover:border-cream hover:bg-cream/10"
                >
                  {{ social.label }}
                </a>
              </li>
            </ul>
          </div>

          <NuxtLink
            to="/blog"
            class="inline-flex shrink-0 items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-forest transition hover:bg-beige"
          >
            Read the stories
            <ArrowRight :size="16" aria-hidden="true" />
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>
