<script setup lang="ts">
import { ArrowDown, ArrowRight, BookOpen, Compass, MoveUpRight } from '@lucide/vue'
</script>

<template>
  <section class="home-hero relative isolate flex min-h-[760px] items-center overflow-hidden bg-forest-deep lg:min-h-[min(850px,calc(100svh-5rem))]">
    <img
      src="/images/hero.png"
      alt="Misty green mountains and rainforest beneath a soft morning sky"
      class="home-hero__image absolute inset-0 -z-20 h-full w-full object-cover"
      fetchpriority="high"
      decoding="async"
    />
    <div class="absolute inset-0 -z-10 bg-gradient-to-r from-[#102d23]/95 via-[#17382c]/75 to-[#17382c]/25" />
    <div class="absolute inset-0 -z-10 bg-gradient-to-t from-[#102d23]/80 via-transparent to-[#102d23]/20" />
    <div class="home-hero__glow pointer-events-none absolute -right-40 top-12 -z-10 h-[34rem] w-[34rem] rounded-full bg-sage/20 blur-3xl" />

    <div class="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div class="grid items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] lg:gap-10">
        <div class="max-w-3xl">
          <p class="home-hero__enter inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-cream/80">
            <span class="h-px w-8 bg-cream/60" aria-hidden="true" />
            A travel journal from Cambodia
          </p>

          <h1 class="home-hero__enter home-hero__enter--one mt-7 max-w-4xl font-display text-4xl leading-[1.04] tracking-tight text-cream sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            Somewhere between <span class="text-[#d8c7a4]">mountains, rivers</span> &amp; memories.
          </h1>

          <p class="home-hero__enter home-hero__enter--two mt-7 max-w-xl text-base leading-7 text-cream/85 sm:text-lg sm:leading-8">
            Notes from the slow road: beautiful places, local flavors, and the people who make a journey stay with you.
          </p>

          <div class="home-hero__enter home-hero__enter--three mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <NuxtLink
              to="/adventures"
              class="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-forest shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              <Compass :size="18" aria-hidden="true" />
              Explore my adventures
              <ArrowRight :size="16" aria-hidden="true" />
            </NuxtLink>
            <NuxtLink
              to="/blog"
              class="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cream/35 bg-cream/5 px-6 py-3 text-sm font-semibold text-cream backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-cream/70 hover:bg-cream/10"
            >
              <BookOpen :size="18" aria-hidden="true" />
              Read the stories
            </NuxtLink>
          </div>

          <div class="home-hero__enter home-hero__enter--four mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-[0.16em] text-cream/65">
            <span>Riverside towns</span>
            <span class="h-1 w-1 rounded-full bg-[#d8c7a4]" aria-hidden="true" />
            <span>Highland trails</span>
            <span class="h-1 w-1 rounded-full bg-[#d8c7a4]" aria-hidden="true" />
            <span>Local tables</span>
          </div>
        </div>

        <aside class="home-hero__enter home-hero__enter--card relative mx-auto hidden w-full max-w-[420px] lg:block" aria-label="Featured travel note">
          <div class="absolute -inset-4 rounded-[2rem] border border-white/15" aria-hidden="true" />
          <div class="relative overflow-hidden rounded-[1.6rem] border border-white/20 bg-white/10 p-3 shadow-2xl shadow-black/25 backdrop-blur-md">
            <div class="relative aspect-[4/5] overflow-hidden rounded-[1.15rem]">
              <img
                src="/images/destinations/mondulkiri.png"
                alt="A winding road through the green hills of Mondulkiri"
                class="h-full w-full object-cover transition duration-700 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#102d23]/90 via-transparent to-transparent" />
              <div class="absolute inset-x-0 bottom-0 p-6 text-cream">
                <p class="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/70">Field note · Northeast Cambodia</p>
                <h2 class="mt-2 font-display text-3xl">Take the slower road.</h2>
                <NuxtLink to="/destinations/mondulkiri" class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cream transition hover:text-[#e7d7b5]">
                  Visit Mondulkiri
                  <MoveUpRight :size="16" aria-hidden="true" />
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="absolute -left-10 top-12 hidden rounded-full border border-white/20 bg-forest/75 px-4 py-2 text-xs font-medium text-cream shadow-lg backdrop-blur md:block">
            Cambodia, at an unhurried pace
          </div>
        </aside>
      </div>

      <div class="home-hero__enter home-hero__enter--four mt-14 flex items-center justify-between border-t border-cream/20 pt-5 text-cream/65 sm:mt-16">
        <span class="text-xs uppercase tracking-[0.22em]">Wander with Ream</span>
        <a href="#destinations" class="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] transition hover:text-cream">
          Scroll to explore
          <ArrowDown :size="15" class="home-hero__arrow" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</template>
