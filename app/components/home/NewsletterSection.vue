<script setup lang="ts">
import { Send } from '@lucide/vue'
</script>

<template>
  <section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
    <div class="grid items-center gap-10 rounded-2xl border border-beige bg-white p-8 sm:p-12 lg:grid-cols-2">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-sage">Newsletter</p>
        <h2 class="mt-3 font-display text-3xl text-charcoal sm:text-4xl">Stories From the Road</h2>
        <p class="mt-4 leading-relaxed text-sage">
          A short note when a new story is published: mountain mornings, river roads and dishes
          worth the detour. No noise, no spam.
        </p>
        <p class="mt-6 inline-flex items-center gap-2 text-sm text-forest">
          <Send :size="16" aria-hidden="true" />
          Demo signup — see the form for details.
        </p>
      </div>

      <NewsletterForm />
    </div>
  </section>
</template>
