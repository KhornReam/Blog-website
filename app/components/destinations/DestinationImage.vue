<script setup lang="ts">
import type { Destination } from '~/data/types'

const props = withDefaults(
  defineProps<{
    image: Destination['image']
    eager?: boolean
    containerClass?: string
  }>(),
  { eager: false, containerClass: '' },
)

const loaded = ref(false)
const failed = ref(false)

function markLoaded() {
  loaded.value = true
}

function markFailed() {
  failed.value = true
}
</script>

<template>
  <div
    class="relative overflow-hidden bg-gradient-to-br from-sage/30 via-beige to-forest/20"
    :class="containerClass"
  >
    <img
      v-if="!failed"
      :src="image.src"
      :alt="image.alt"
      :loading="eager ? 'eager' : 'lazy'"
      :fetchpriority="eager ? 'high' : 'auto'"
      decoding="async"
      class="h-full w-full object-cover transition-opacity duration-300"
      :class="loaded ? 'opacity-100' : 'opacity-0'"
      @load="markLoaded"
      @error="markFailed"
    />
    <span
      v-if="failed"
      class="absolute inset-0 grid place-items-center p-6 text-center text-sm text-forest"
    >
      Image unavailable
    </span>
  </div>
</template>
