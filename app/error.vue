<script setup lang="ts">
/** Custom error page — shown for 404s (e.g. unknown slugs) and other failures. */
const props = defineProps<{
  error: {
    statusCode: number
    statusMessage?: string
  }
}>()

const isNotFound = computed(() => props.error.statusCode === 404)

useSeoMeta({
  title: `${props.error.statusCode} · Wander With Ream`,
  description: 'The page you were looking for could not be found.',
})

function goHome() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
    <NuxtLink
      to="/"
      class="mb-10 font-display text-2xl tracking-tight text-forest"
      @click="goHome"
    >
      Wander With Ream
    </NuxtLink>

    <p class="font-display text-7xl text-forest sm:text-8xl">{{ error.statusCode }}</p>

    <h1 class="mt-6 font-display text-2xl text-charcoal sm:text-3xl">
      {{ isNotFound ? 'This trail ends here.' : 'Something went wrong on the trail.' }}
    </h1>
    <p class="mt-3 max-w-md text-sage">
      {{
        isNotFound
          ? 'The page you are looking for does not exist or may have been moved.'
          : error.statusMessage || 'An unexpected error occurred. Please try again.'
      }}
    </p>

    <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
      <button
        type="button"
        class="rounded-full bg-forest px-6 py-3 text-sm font-medium text-cream transition hover:bg-forest-deep"
        @click="goHome"
      >
        Back to home
      </button>
      <NuxtLink
        to="/blog"
        class="rounded-full border border-forest/30 px-6 py-3 text-sm font-medium text-forest transition hover:border-forest hover:bg-forest/5"
        @click="clearError()"
      >
        Browse stories
      </NuxtLink>
    </div>
  </div>
</template>
