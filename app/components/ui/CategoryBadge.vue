<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span
    class="inline-flex items-center rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest"
  >
    {{ label }}
  </span>
</template>
