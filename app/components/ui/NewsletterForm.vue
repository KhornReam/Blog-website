<script setup lang="ts">
import { Mail, CheckCircle2, AlertCircle } from '@lucide/vue'

const email = ref('')
const errorMessage = ref('')
const isSubscribed = ref(false)

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/**
 * Demo form: it only validates the address in the browser.
 * No email service is connected, so nothing is stored or sent — the success
 * message says exactly that.
 */
function subscribe() {
  errorMessage.value = ''
  const value = email.value.trim()

  if (!value) {
    errorMessage.value = 'Please enter your email address.'
    return
  }
  if (!emailPattern.test(value)) {
    errorMessage.value = 'That does not look like a valid email address.'
    return
  }

  isSubscribed.value = true
}
</script>

<template>
  <form novalidate class="w-full max-w-xl" @submit.prevent="subscribe">
    <label for="newsletter-email" class="mb-2 block text-sm font-medium text-charcoal">
      Email address
    </label>

    <div class="flex flex-col gap-3 sm:flex-row">
      <div class="relative flex-1">
        <Mail
          :size="18"
          class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sage"
          aria-hidden="true"
        />
        <input
          id="newsletter-email"
          v-model="email"
          type="email"
          name="email"
          autocomplete="email"
          placeholder="you@example.com"
          aria-describedby="newsletter-note newsletter-error"
          :aria-invalid="errorMessage ? 'true' : 'false'"
          :disabled="isSubscribed"
          class="w-full rounded-full border border-beige bg-white py-3 pl-11 pr-4 text-sm placeholder:text-sage focus:border-forest focus:outline-none disabled:bg-beige/60"
          @input="errorMessage = ''"
        />
      </div>
      <button
        type="submit"
        :disabled="isSubscribed"
        class="rounded-full bg-forest px-6 py-3 text-sm font-medium text-cream transition hover:bg-forest-deep disabled:cursor-not-allowed disabled:opacity-70"
      >
        Subscribe
      </button>
    </div>

    <!-- Validation error (announced via aria-describedby on the input). -->
    <p
      v-if="errorMessage"
      id="newsletter-error"
      class="mt-3 flex items-center gap-2 text-sm text-red-700"
    >
      <AlertCircle :size="16" aria-hidden="true" />
      {{ errorMessage }}
    </p>

    <!-- Success state, honest about being a demo. -->
    <p
      v-if="isSubscribed"
      class="mt-3 flex items-start gap-2 text-sm text-forest"
      role="status"
    >
      <CheckCircle2 :size="16" class="mt-0.5 shrink-0" aria-hidden="true" />
      Address validated. This is a demo form — no subscription was saved or sent anywhere.
    </p>

    <p id="newsletter-note" class="mt-3 text-xs text-sage">
      Demo feature: nothing is stored. Replace this form with a real email service to go live.
    </p>
  </form>
</template>
