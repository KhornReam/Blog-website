<script setup lang="ts">
/**
 * Search + category filters for the blog listing.
 * State lives in the URL (/blog?q=…&category=…) via useBlog(), so filtered
 * views can be shared as plain links.
 */
const { searchQuery, activeCategory, setSearch, setCategory, categories } = useBlog()
</script>

<template>
  <FilterBar
    :search="searchQuery"
    :active="activeCategory"
    :options="categories"
    search-label="Search stories"
    placeholder="Search by title or topic…"
    @update:search="setSearch"
    @update:active="setCategory"
  />
</template>
