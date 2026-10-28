<script setup lang="ts">
import { Menu, Search, Compass, Leaf } from '@lucide/vue'
import { navItems } from '~/data/navigation'

const route = useRoute()

const menuOpen = ref(false)
const headerSearch = ref('')

/** Desktop links highlight when the current path is inside their section. */
function isActive(to: string) {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}

function submitSearch() {
  const term = headerSearch.value.trim()
  navigateTo({ path: '/blog', query: term ? { q: term } : {} })
}
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-beige bg-cream/90 backdrop-blur">
    <div class="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:h-20 lg:gap-8">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 lg:gap-3" aria-label="Wander With Ream — home">
        <span class="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-cream">
          <Leaf :size="18" />
        </span>
        <span class="font-display text-lg leading-none tracking-tight text-forest sm:text-xl">
          Wander With Ream
        </span>
      </NuxtLink>

      <!-- Desktop navigation -->
      <nav class="hidden flex-1 items-center justify-center gap-6 lg:flex" aria-label="Main">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="border-b-2 py-1 text-sm transition"
          :class="
            isActive(item.to)
              ? 'border-forest font-semibold text-forest'
              : 'border-transparent text-charcoal hover:border-sage hover:text-forest'
          "
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- Desktop search -->
      <form class="hidden items-center md:flex" role="search" @submit.prevent="submitSearch">
        <label for="header-search" class="sr-only">Search stories</label>
        <div class="flex items-center gap-2 rounded-full border border-beige bg-white/60 px-3 py-2 focus-within:border-forest">
          <Search :size="16" class="text-sage" aria-hidden="true" />
          <input
            id="header-search"
            v-model="headerSearch"
            type="search"
            placeholder="Search…"
            class="w-28 bg-transparent text-sm placeholder:text-sage focus:outline-none lg:w-36"
          />
        </div>
      </form>

      <!-- Explore call to action -->
      <NuxtLink
        to="/destinations"
        class="ml-auto hidden items-center gap-2 rounded-full bg-forest px-4 py-2 text-sm font-medium text-cream transition hover:bg-forest-deep sm:inline-flex"
      >
        <Compass :size="16" />
        Explore
      </NuxtLink>

      <!-- Hamburger (mobile) -->
      <button
        type="button"
        class="ml-auto rounded-full p-2 text-forest transition hover:bg-beige sm:ml-0 lg:hidden"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        @click="menuOpen = !menuOpen"
      >
        <Menu :size="24" />
      </button>
    </div>

    <MobileMenu id="mobile-menu" :open="menuOpen" @close="menuOpen = false" />
  </header>
</template>
