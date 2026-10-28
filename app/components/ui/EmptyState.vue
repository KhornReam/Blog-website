<script setup lang="ts">
defineProps<{
  title: string
  message: string
}>()
</script>

<template>
  <!-- Shown whenever a search or filter returns nothing. -->
  <div class="rounded-lg border border-dashed border-sage/50 bg-white/50 px-6 py-14 text-center">
    <p class="font-display text-2xl text-charcoal">{{ title }}</p>
    <p class="mx-auto mt-2 max-w-md text-sm leading-relaxed text-sage">{{ message }}</p>
    <div class="mt-6">
      <slot />
    </div>
  </div>
</template>
