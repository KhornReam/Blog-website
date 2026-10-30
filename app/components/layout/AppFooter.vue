<script setup lang="ts">
import { ArrowUp, Compass } from '@lucide/vue'
import { navItems } from '~/data/navigation'
import { blogCategories } from '~/data/categories'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-forest-deep text-cream">
    <div class="mx-auto max-w-7xl px-4 pb-6 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      <NuxtLink to="/destinations" class="footer-feature group relative isolate flex min-h-64 items-end overflow-hidden rounded-3xl p-6 sm:min-h-72 sm:p-10 lg:min-h-80">
        <img
          src="/images/hero.png"
          alt="Misty green highlands in Cambodia at sunrise"
          class="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          width="1000"
          height="667"
          loading="lazy"
          decoding="async"
        />
        <span class="absolute inset-0 -z-10 bg-gradient-to-r from-forest-deep/90 via-forest-deep/45 to-transparent" aria-hidden="true" />
        <span class="max-w-xl">
          <span class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
            <Compass :size="15" aria-hidden="true" />
            Your next escape starts here
          </span>
          <span class="mt-3 block font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">Find a little more room to wander.</span>
          <span class="mt-4 inline-flex items-center gap-2 rounded-full bg-cream px-5 py-3 text-sm font-semibold text-forest transition group-hover:bg-white">
            Explore Cambodia
            <ArrowUp :size="16" class="rotate-45" aria-hidden="true" />
          </span>
        </span>
      </NuxtLink>

      <div class="mt-12 grid gap-10 border-b border-cream/15 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-14">
        <div>
          <NuxtLink to="/" class="font-display text-2xl tracking-tight">Wander With Ream</NuxtLink>
          <p class="mt-3 max-w-sm text-sm leading-7 text-cream/70">
            A personal travel journal exploring Cambodia through quiet landscapes, local food, and the people we meet along the way.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 class="text-xs font-semibold uppercase tracking-[0.16em] text-cream/50">Explore</h2>
          <ul class="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 text-sm sm:grid-cols-1">
            <li v-for="item in navItems" :key="item.to">
              <NuxtLink :to="item.to" class="text-cream/80 transition hover:text-white">{{ item.label }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <nav aria-label="Travel categories">
          <h2 class="text-xs font-semibold uppercase tracking-[0.16em] text-cream/50">Browse stories</h2>
          <ul class="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 text-sm sm:grid-cols-1">
            <li v-for="category in blogCategories" :key="category.slug">
              <NuxtLink
                :to="{ path: '/blog', query: { category: category.slug } }"
                class="text-cream/80 transition hover:text-white"
              >
                {{ category.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <div class="flex flex-col gap-3 pt-5 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ currentYear }} Wander With Ream.</p>
        <a href="#top" class="inline-flex min-h-11 items-center gap-2 text-cream/75 transition hover:text-white">
          Back to top
          <ArrowUp :size="15" aria-hidden="true" />
        </a>
      </div>
    </div>
  </footer>
</template>
