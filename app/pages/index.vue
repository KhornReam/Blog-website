<script setup lang="ts">
useSeoMeta({
  title: 'Wander With Ream — Somewhere Between Mountains, Rivers & Memories',
  description:
    'A personal travel journal about mountains, rivers, forests, countryside roads and local food in Cambodia and beyond.',
  ogTitle: 'Wander With Ream — Personal Travel Journal',
  ogDescription:
    'Exploring beautiful places, discovering local flavors, and collecting stories along the way.',
  ogImage: '/images/hero.png',
})
</script>

<template>
  <div>
    <HeroSection />
    <FeaturedDestinations />
    <LatestStories />
    <FoodHighlights />
    <PhilosophySection />
    <NewsletterSection />
  </div>
</template>
