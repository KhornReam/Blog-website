<script setup lang="ts">
import { ArrowRight, Camera, Compass, MapPin, UtensilsCrossed, X } from '@lucide/vue'

const journalThemes = [
  {
    icon: Compass,
    title: 'Places',
    description: 'Riverside towns, highland roads, forest trails, and the quieter corners between them.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Food',
    description: 'Market breakfasts, local flavors, and the conversations that happen around a table.',
  },
  {
    icon: Camera,
    title: 'Field notes',
    description: 'Photographs and stories that bring the feeling of a journey back home.',
  },
]

const travelMoments = [
  {
    image: '/images/Team/1.jpg',
    alt: 'Friends cooling off together in a forest river',
    label: 'River days',
    title: 'A little adventure, a lot of laughter.',
    description: 'The best way to end a warm day outdoors is usually with everyone in the water.',
  },
  {
    image: '/images/Team/2.jpg',
    alt: 'The travel crew sharing a relaxed moment by a swimming pool',
    label: 'Slow afternoons',
    title: 'Taking time to enjoy the moment.',
    description: 'Not every trip needs a plan. Sometimes the memory is simply being together.',
  },
  {
    image: '/images/Team/3.jpg',
    alt: 'Friends standing together at a scenic lookout',
    label: 'Good company',
    title: 'The people make the journey.',
    description: 'These are the friends who turn a new place into a story we keep telling.',
  },
  {
    image: '/images/Team/4.jpg',
    alt: 'Three friends posing together at a sunny lookout',
    label: 'A day out',
    title: 'One more stop for the view.',
    description: 'A change of scenery, a few photos, and time together along the way.',
  },
  {
    image: '/images/Team/5.jpg',
    alt: 'Travel friends taking a group selfie together',
    label: 'The whole crew',
    title: 'A memory with everyone in it.',
    description: 'The spontaneous group photos are often the ones we treasure most.',
  },
]

const selectedMoment = ref<(typeof travelMoments)[number] | null>(null)

useSeoMeta({
  title: 'About Ream · Wander With Ream',
  description:
    'Meet Ream, the person behind Wander With Ream, a travel journal about Cambodia, thoughtful journeys, local food, and the moments along the way.',
})
</script>

<template>
  <div>
    <header class="border-b border-beige bg-[#f3f0e8]">
      <div class="about-hero__layout mx-auto max-w-6xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:gap-16 lg:px-10 lg:py-20">
        <div class="max-w-2xl">
          <p class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            <MapPin :size="14" aria-hidden="true" />
            Cambodia · travel journal
          </p>
          <h1 class="mt-5 font-display text-4xl leading-tight tracking-tight text-forest sm:text-5xl lg:text-6xl">
            Hello, I’m Ream.
          </h1>
          <p class="mt-5 max-w-xl text-lg leading-8 text-charcoal/80">
            I’m drawn to places that invite you to slow down: misty highlands, forest rivers, village markets, and roads with room to wander.
          </p>
          <p class="mt-4 max-w-xl leading-7 text-charcoal/70">
            Wander With Ream is my travel journal about Cambodia and the people, landscapes, and food that make a journey memorable. Here I collect photographs, destination notes, and the small moments along the way.
          </p>
          <div class="mt-7 flex flex-wrap gap-3">
            <NuxtLink to="/blog" class="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream transition hover:bg-forest-deep">
              Read my stories
              <ArrowRight :size="16" aria-hidden="true" />
            </NuxtLink>
            <NuxtLink to="/destinations" class="inline-flex items-center rounded-full border border-forest/20 px-5 py-3 text-sm font-semibold text-forest transition hover:border-forest/40 hover:bg-white/60">
              Browse destinations
            </NuxtLink>
          </div>
        </div>

        <figure class="about-hero__figure relative mx-auto">
          <img
            src="/images/profile.png"
            alt="Portrait of Ream wearing a rust-colored shirt"
            class="about-hero__portrait w-full rounded-2xl object-cover object-center shadow-xl shadow-forest/10"
            width="683"
            height="1024"
            fetchpriority="high"
            decoding="async"
          />
          <figcaption class="absolute -bottom-4 left-4 rounded-xl border border-beige bg-cream px-4 py-3 shadow-lg">
            <span class="block font-display text-lg text-forest">Ream</span>
            <span class="text-xs text-sage">Traveler, storyteller, curious eater</span>
          </figcaption>
        </figure>
      </div>
    </header>

    <main class="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
      <section aria-labelledby="journal-heading">
        <div class="max-w-2xl">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-sage">What you’ll find here</p>
          <h2 id="journal-heading" class="mt-3 font-display text-3xl text-charcoal sm:text-4xl">Stories from the road</h2>
        </div>

        <div class="about-themes mt-7 gap-4">
          <article
            v-for="theme in journalThemes"
            :key="theme.title"
            class="rounded-2xl border border-beige bg-white p-6"
          >
            <div class="about-theme__icon rounded-full bg-forest/10 text-forest">
              <component :is="theme.icon" :size="19" aria-hidden="true" />
            </div>
            <h3 class="mt-5 font-display text-xl text-charcoal">{{ theme.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-charcoal/70">{{ theme.description }}</p>
          </article>
        </div>
      </section>

      <section class="about-travelers mt-16 sm:mt-20" aria-labelledby="travelers-heading">
        <div class="about-travelers__intro">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-sage">The crew I travel with</p>
          <h2 id="travelers-heading" class="mt-3 font-display text-3xl text-charcoal sm:text-4xl">Better stories, shared.</h2>
          <p class="mt-4 max-w-2xl leading-7 text-charcoal/70">
            A good trip is about more than the places on the map. It is the friends who say yes to one more stop, find the best local food, and make even the unplanned moments memorable. Here are a few snapshots from our time together.
          </p>
        </div>

        <div class="about-travelers__grid mt-8">
          <article
            v-for="(moment, index) in travelMoments"
            :key="moment.label"
            class="about-travelers__card group"
            :style="{ '--card-index': index }"
          >
            <button
              type="button"
              class="about-travelers__photo"
              :aria-label="`View full photo: ${moment.label}`"
              @click="selectedMoment = moment"
            >
              <img
                :src="moment.image"
                :alt="moment.alt"
                class="about-travelers__image"
                width="1200"
                height="900"
                loading="lazy"
                decoding="async"
              />
              <span class="about-travelers__shade" aria-hidden="true" />
            </button>
            <div class="about-travelers__copy">
              <span class="about-travelers__label">{{ moment.label }}</span>
              <h3 class="mt-3 font-display text-2xl leading-tight text-white sm:text-[1.7rem]">{{ moment.title }}</h3>
              <p class="mt-2 max-w-sm text-sm leading-6 text-white/80">{{ moment.description }}</p>
            </div>
          </article>
        </div>
      </section>

      <div
        v-if="selectedMoment"
        class="about-lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="selectedMoment.label"
        tabindex="-1"
        @click.self="selectedMoment = null"
        @keydown.esc="selectedMoment = null"
      >
        <button
          type="button"
          class="about-lightbox__close"
          aria-label="Close photo"
          @click="selectedMoment = null"
        >
          <X :size="22" aria-hidden="true" />
        </button>
        <figure class="about-lightbox__figure">
          <img :src="selectedMoment.image" :alt="selectedMoment.alt" class="about-lightbox__image" />
          <figcaption class="about-lightbox__caption">
            <span class="about-travelers__label">{{ selectedMoment.label }}</span>
            <p class="mt-3 font-display text-xl text-white">{{ selectedMoment.title }}</p>
            <p class="mt-1 text-sm leading-6 text-white/75">{{ selectedMoment.description }}</p>
          </figcaption>
        </figure>
      </div>

      <section class="about-cta mt-10 gap-5 rounded-2xl bg-forest-deep px-6 py-7 text-cream sm:px-8">
        <div class="about-cta__copy">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-cream/60">Keep wandering</p>
          <h2 class="mt-2 font-display text-2xl sm:text-3xl">Find a place that calls to you.</h2>
        </div>
        <NuxtLink to="/destinations" class="about-cta__link inline-flex shrink-0 items-center gap-2 rounded-full bg-cream px-5 py-3 text-sm font-semibold text-forest transition hover:bg-white">
          Explore destinations
          <ArrowRight :size="16" aria-hidden="true" />
        </NuxtLink>
      </section>
    </main>
  </div>
</template>

<style scoped>
.about-hero__layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
}

.about-hero__figure {
  width: min(100%, 360px);
}

.about-hero__portrait {
  display: block;
  aspect-ratio: 4 / 5;
}

.about-themes {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
}

.about-theme__icon {
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  flex: 0 0 2.5rem;
  align-items: center;
  justify-content: center;
}

.about-travelers__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;
}

.about-travelers__card {
  position: relative;
  min-height: 19rem;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  isolation: isolate;
  border-radius: 1.25rem;
  background: #234d3c;
  box-shadow: 0 12px 30px rgb(23 56 44 / 9%);
  animation: about-card-enter 700ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
  animation-delay: calc(var(--card-index, 0) * 120ms);
}

.about-travelers__image,
.about-travelers__shade {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.about-travelers__photo {
  position: absolute;
  inset: 0;
  isolation: isolate;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: zoom-in;
  text-align: left;
}

.about-travelers__image {
  z-index: -2;
  object-fit: cover;
  object-position: center 58%;
  transition: transform 700ms cubic-bezier(0.2, 0.7, 0.2, 1);
}

.about-travelers__card:hover .about-travelers__image {
  transform: scale(1.055);
}

.about-travelers__shade {
  z-index: -1;
  background: linear-gradient(180deg, rgb(13 27 20 / 3%) 24%, rgb(13 27 20 / 38%) 52%, rgb(13 27 20 / 88%) 100%);
}

.about-travelers__copy {
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
  left: 1.5rem;
}

.about-travelers__label {
  display: inline-flex;
  border: 1px solid rgb(255 255 255 / 35%);
  border-radius: 999px;
  padding: 0.4rem 0.75rem;
  background: rgb(255 255 255 / 15%);
  color: white;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  backdrop-filter: blur(10px);
}

.about-lightbox {
  position: fixed;
  z-index: 100;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  background: rgb(12 19 15 / 92%);
  backdrop-filter: blur(8px);
  animation: about-lightbox-enter 180ms ease-out both;
}

.about-lightbox__figure {
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  width: min(100%, 1100px);
  max-height: calc(100vh - 2.5rem);
  overflow: auto;
  border: 1px solid rgb(255 255 255 / 16%);
  border-radius: 1rem;
  background: #17231c;
  box-shadow: 0 24px 80px rgb(0 0 0 / 40%);
}

.about-lightbox__image {
  display: block;
  width: 100%;
  max-height: min(74vh, 820px);
  object-fit: contain;
  background: #101713;
}

.about-lightbox__caption {
  padding: 1.25rem 1.5rem 1.5rem;
}

.about-lightbox__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: grid;
  width: 2.75rem;
  height: 2.75rem;
  place-items: center;
  border: 1px solid rgb(255 255 255 / 30%);
  border-radius: 999px;
  background: rgb(255 255 255 / 12%);
  color: white;
  cursor: pointer;
  transition: background 180ms ease;
}

.about-lightbox__close:hover {
  background: rgb(255 255 255 / 24%);
}

@keyframes about-lightbox-enter {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes about-card-enter {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}

.about-cta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.about-cta__copy {
  max-width: 36rem;
}

@media (min-width: 640px) {
  .about-cta {
    flex-direction: row;
    align-items: center;
  }
}

@media (min-width: 768px) {
  .about-themes {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .about-travelers__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .about-travelers__card {
    min-height: 20rem;
  }
}

@media (min-width: 1024px) {
  .about-travelers__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (prefers-reduced-motion: reduce) {
  .about-travelers__card {
    animation: none;
  }

  .about-travelers__image {
    transition: none;
  }

  .about-lightbox {
    animation: none;
  }
}

@media (min-width: 1024px) {
  .about-hero__layout {
    grid-template-columns: minmax(0, 1fr) 360px;
  }

  .about-hero__figure {
    margin-left: auto;
  }
}
</style>
