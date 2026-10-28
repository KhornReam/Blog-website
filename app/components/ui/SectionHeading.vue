<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    description?: string
    align?: 'left' | 'center'
    /** Renders a "View all" style link on the right of the heading. */
    linkTo?: string
    linkLabel?: string
  }>(),
  {
    align: 'left',
    eyebrow: undefined,
    description: undefined,
    linkTo: undefined,
    linkLabel: undefined,
  },
)
</script>

<template>
  <div
    class="mb-8 flex flex-col gap-4 sm:mb-12"
    :class="align === 'center' ? 'items-center text-center' : 'sm:flex-row sm:items-end sm:justify-between'"
  >
    <div :class="align === 'center' ? 'max-w-2xl' : 'max-w-2xl'">
      <p v-if="eyebrow" class="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
        {{ eyebrow }}
      </p>
      <h2 class="mt-3 font-display text-3xl leading-tight text-charcoal sm:text-4xl">
        {{ title }}
      </h2>
      <p v-if="description" class="mt-3 leading-relaxed text-sage">
        {{ description }}
      </p>
    </div>

    <NuxtLink
      v-if="linkTo && linkLabel"
      :to="linkTo"
      class="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-forest underline-offset-4 transition hover:underline"
    >
      {{ linkLabel }}
      <slot name="link-icon" />
    </NuxtLink>
  </div>
</template>
