<script setup lang="ts">
import { Search, X } from '@lucide/vue'
import type { ContentCategory } from '~/data/types'

/**
 * Reusable search + category-filter bar.
 * State is lifted into the page (usually straight into the URL query), so
 * this component stays purely presentational.
 */
const props = withDefaults(
  defineProps<{
    /** Omit the search prop to render category chips only. */
    search?: string
    options: ContentCategory[]
    active: string
    searchLabel?: string
    placeholder?: string
    allLabel?: string
  }>(),
  {
    searchLabel: 'Search',
    placeholder: 'Search…',
    allLabel: 'All',
  },
)

const emit = defineEmits<{
  'update:search': [value: string]
  'update:active': [value: string]
}>()

// Unique ids keep labels correctly associated when several bars appear.
const inputId = useId()
const groupId = useId()

// Local mirror of the prop so typing feels instant, while the URL (prop)
// stays the source of truth when something else clears the search.
const query = ref(props.search ?? '')
watch(
  () => props.search,
  (value) => {
    if (value !== undefined && value !== query.value) query.value = value
  },
)

function onInput(event: Event) {
  query.value = (event.target as HTMLInputElement).value
  emit('update:search', query.value)
}

function clear() {
  query.value = ''
  emit('update:search', '')
}
</script>

<template>
  <div class="flex flex-col gap-5">
    <form v-if="props.search !== undefined" class="max-w-md" role="search" @submit.prevent>
      <label :for="inputId" class="sr-only">{{ searchLabel }}</label>
      <div
        class="flex items-center gap-3 rounded-full border border-beige bg-white px-4 py-3 transition focus-within:border-forest"
      >
        <Search :size="18" class="shrink-0 text-sage" aria-hidden="true" />
        <input
          :id="inputId"
          v-model="query"
          type="search"
          :placeholder="placeholder"
          class="w-full bg-transparent text-sm placeholder:text-sage focus:outline-none"
          @input="onInput"
        />
        <button
          v-if="query"
          type="button"
          class="shrink-0 rounded-full p-1 text-sage transition hover:bg-beige hover:text-charcoal"
          :aria-label="`Clear ${searchLabel.toLowerCase()}`"
          @click="clear"
        >
          <X :size="16" />
        </button>
      </div>
    </form>

    <div :id="groupId" role="group" aria-label="Filter by category" class="flex flex-wrap gap-2">
      <button
        type="button"
        class="rounded-full border px-4 py-2 text-sm transition"
        :class="
          active === ''
            ? 'border-forest bg-forest text-cream'
            : 'border-beige bg-white text-charcoal hover:border-sage hover:text-forest'
        "
        :aria-pressed="active === ''"
        @click="emit('update:active', '')"
      >
        {{ allLabel }}
      </button>

      <button
        v-for="option in options"
        :key="option.slug"
        type="button"
        class="rounded-full border px-4 py-2 text-sm transition"
        :class="
          active === option.slug
            ? 'border-forest bg-forest text-cream'
            : 'border-beige bg-white text-charcoal hover:border-sage hover:text-forest'
        "
        :aria-pressed="active === option.slug"
        @click="emit('update:active', option.slug)"
      >
        {{ option.label }}
      </button>
    </div>
  </div>
</template>
