<script setup lang="ts">
import { Compass, ArrowUp } from '@lucide/vue'
import { navItems } from '~/data/navigation'
import { blogCategories } from '~/data/categories'

const currentYear = new Date().getFullYear()

/**
 * Social links use placeholder URLs — replace them with your own profiles
 * (they are kept in one array so there is only one place to edit).
 */
const socialLinks = [
  { label: 'Instagram', url: 'https://www.instagram.com/' },
  { label: 'YouTube', url: 'https://www.youtube.com/' },
  { label: 'Facebook', url: 'https://www.facebook.com/' },
]
</script>

<template>
  <footer class="bg-forest-deep text-cream">
    <div class="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Brand -->
        <div class="lg:col-span-2">
          <p class="font-display text-2xl">Wander With Ream</p>
          <p class="mt-2 max-w-sm text-sm leading-relaxed text-cream/70">
            Find your way. Feel the journey. Taste the world.
          </p>
          <NuxtLink
            to="/destinations"
            class="mt-5 inline-flex items-center gap-2 rounded-full border border-cream/30 px-4 py-2 text-sm transition hover:border-cream hover:bg-cream/10"
          >
            <Compass :size="16" />
            Explore destinations
          </NuxtLink>
        </div>

        <!-- Quick links -->
        <nav aria-label="Footer">
          <h2 class="text-sm font-semibold uppercase tracking-wider text-cream/60">Quick links</h2>
          <ul class="mt-4 space-y-2 text-sm">
            <li v-for="item in navItems" :key="item.to">
              <NuxtLink :to="item.to" class="text-cream/85 transition hover:text-cream">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Categories + socials -->
        <div class="space-y-8">
          <nav aria-label="Travel categories">
            <h2 class="text-sm font-semibold uppercase tracking-wider text-cream/60">
              Travel categories
            </h2>
            <ul class="mt-4 space-y-2 text-sm">
              <li v-for="category in blogCategories" :key="category.slug">
                <NuxtLink
                  :to="{ path: '/blog', query: { category: category.slug } }"
                  class="text-cream/85 transition hover:text-cream"
                >
                  {{ category.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>

          <nav aria-label="Social media">
            <h2 class="text-sm font-semibold uppercase tracking-wider text-cream/60">Follow along</h2>
            <ul class="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <li v-for="social in socialLinks" :key="social.label">
                <a
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-cream/85 underline-offset-4 transition hover:text-cream hover:underline"
                >
                  {{ social.label }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div
        class="mt-12 flex flex-col items-start justify-between gap-4 border-t border-cream/15 pt-6 text-sm text-cream/60 sm:flex-row sm:items-center"
      >
        <p>© {{ currentYear }} Wander With Ream. All rights reserved.</p>
        <p class="text-cream/50">Sample content created for demonstration purposes.</p>
        <a
          href="#top"
          class="inline-flex items-center gap-2 text-cream/80 transition hover:text-cream"
        >
          <ArrowUp :size="16" />
          Back to top
        </a>
      </div>
    </div>
  </footer>
</template>
