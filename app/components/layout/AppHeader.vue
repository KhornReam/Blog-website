<script setup lang="ts">
import { Menu, Search, Compass, Leaf, X } from '@lucide/vue'
import { navItems } from '~/data/navigation'

const route = useRoute()
const menuOpen = ref(false)
const searchOpen = ref(false)

function isActive(to: string) {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-beige bg-cream/90 backdrop-blur">
    <div class="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:h-20 lg:gap-8">
      <NuxtLink to="/" class="flex items-center gap-2 lg:gap-3" aria-label="Wander With Ream — home">
        <span class="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-cream">
          <Leaf :size="18" aria-hidden="true" />
        </span>
        <span class="min-w-0 truncate font-display text-base leading-none tracking-tight text-forest sm:text-xl">Wander With Ream</span>
      </NuxtLink>

      <nav class="hidden flex-1 items-center justify-center gap-6 lg:flex" aria-label="Main">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="border-b-2 py-1 text-sm transition"
          :class="isActive(item.to) ? 'border-forest font-semibold text-forest' : 'border-transparent text-charcoal hover:border-sage hover:text-forest'"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <button
        type="button"
        class="ml-auto inline-flex shrink-0 items-center gap-2 rounded-full border border-beige bg-white/60 px-2.5 py-2 text-sm text-sage transition hover:border-sage hover:bg-white sm:px-3 lg:ml-0"
        aria-label="Search places and stories"
        @click="searchOpen = true"
      >
        <Search :size="16" aria-hidden="true" />
        <span class="hidden sm:inline">Search…</span>
        <kbd class="hidden rounded border border-beige bg-cream px-1.5 py-0.5 text-[10px] text-sage lg:inline">⌘K</kbd>
      </button>

      <NuxtLink
        to="/destinations"
        class="hidden items-center gap-2 rounded-full bg-forest px-4 py-2 text-sm font-medium text-cream transition hover:bg-forest-deep sm:inline-flex"
      >
        <Compass :size="16" aria-hidden="true" />
        <span class="hidden md:inline">Explore</span>
      </NuxtLink>

      <button
        type="button"
        class="shrink-0 rounded-full p-2 text-forest transition hover:bg-beige lg:hidden"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        @click="menuOpen = !menuOpen"
      >
        <X v-if="menuOpen" :size="24" aria-hidden="true" />
        <Menu v-else :size="24" aria-hidden="true" />
      </button>
    </div>

  </header>
  <MobileMenu id="mobile-menu" :open="menuOpen" @close="menuOpen = false" />
  <SiteSearch :open="searchOpen" @open="searchOpen = true" @close="searchOpen = false" />
</template>
