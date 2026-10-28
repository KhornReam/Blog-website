<script setup lang="ts">
import { ArrowLeft, ArrowRight, CalendarDays, Clock, User, Share2, Link2 } from '@lucide/vue'
import { useBlog } from '~/composables/useBlog'
import { blogCategories } from '~/data/categories'
import { formatDate } from '~/utils/formatDate'

const route = useRoute()
const { findPost, relatedPosts, neighbours } = useBlog()

const slugParam = route.params.slug
const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam
const post = findPost(slug)

// Unknown slug -> proper 404 page.
if (!post) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Story not found',
    fatal: true,
  })
}

const categoryLabel = computed(
  () => blogCategories.find((category) => category.slug === post!.category)?.label ?? post!.category,
)

const related = computed(() => relatedPosts(post!))
const { newer, older } = neighbours(post!)

useSeoMeta({
  title: `${post.title} · Wander With Ream`,
  description: post.excerpt,
  ogTitle: post.title,
  ogDescription: post.excerpt,
  ogImage: post.cover.src,
  ogType: 'article',
  articlePublishedTime: post.publishedAt,
  articleAuthor: [post.author],
})

// --- Sharing ---------------------------------------------------------------
const shareStatus = ref('')

async function share() {
  const url = window.location.href
  const shareData = { title: post!.title, text: post!.excerpt, url }

  // Prefer the native share sheet (phones, some browsers)…
  if (navigator.share) {
    try {
      await navigator.share(shareData)
      return
    } catch {
      return // user cancelled the sheet
    }
  }
  // …otherwise fall back to copying the link.
  await copyLink()
}

async function copyLink() {
  try {
    await navigator.clipboard.writeText(window.location.href)
    shareStatus.value = 'Link copied to clipboard.'
  } catch {
    shareStatus.value = 'Could not copy automatically — copy the address bar instead.'
  }
  window.setTimeout(() => (shareStatus.value = ''), 3000)
}
</script>

<template>
  <article v-if="post">
    <!-- Cover + title -->
    <header class="relative">
      <img
        :src="post.cover.src"
        :alt="post.cover.alt"
        class="h-72 w-full object-cover sm:h-96 lg:h-[30rem]"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/45 to-transparent" />

      <div class="absolute inset-x-0 bottom-0">
        <div class="mx-auto max-w-4xl px-4 pb-8 sm:px-6 sm:pb-10">
          <NuxtLink
            to="/blog"
            class="mb-5 inline-flex items-center gap-2 text-sm text-cream/85 transition hover:text-cream"
          >
            <ArrowLeft :size="16" aria-hidden="true" />
            Back to blog
          </NuxtLink>

          <CategoryBadge :label="categoryLabel" />

          <h1 class="mt-4 font-display text-3xl leading-tight text-cream sm:text-5xl">
            {{ post.title }}
          </h1>

          <p class="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-cream/85">
            <span class="inline-flex items-center gap-1.5">
              <User :size="15" aria-hidden="true" />
              {{ post.author }}
            </span>
            <time :datetime="post.publishedAt" class="inline-flex items-center gap-1.5">
              <CalendarDays :size="15" aria-hidden="true" />
              {{ formatDate(post.publishedAt) }}
            </time>
            <span class="inline-flex items-center gap-1.5">
              <Clock :size="15" aria-hidden="true" />
              {{ post.readingTime }} min read
            </span>
          </p>
        </div>
      </div>
    </header>

    <!-- Body: article + table of contents -->
    <div class="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:py-16">
      <div class="lg:col-span-2">
        <p class="font-display text-xl leading-relaxed text-charcoal sm:text-2xl">
          {{ post.excerpt }}
        </p>

        <div class="mt-10">
          <ArticleContent :sections="post.sections" />
        </div>

        <!-- Sharing -->
        <div class="mt-12 flex flex-wrap items-center gap-3 border-t border-beige pt-8">
          <span class="text-sm font-semibold uppercase tracking-wider text-sage">Share</span>
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-full bg-forest px-4 py-2 text-sm text-cream transition hover:bg-forest-deep"
            @click="share"
          >
            <Share2 :size="16" aria-hidden="true" />
            Share this story
          </button>
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-full border border-forest/30 px-4 py-2 text-sm text-forest transition hover:border-forest hover:bg-forest/5"
            @click="copyLink"
          >
            <Link2 :size="16" aria-hidden="true" />
            Copy link
          </button>
          <span class="text-sm text-forest" role="status" aria-live="polite">{{ shareStatus }}</span>
        </div>

        <!-- Previous / next -->
        <nav class="mt-10 grid gap-4 border-t border-beige pt-8 sm:grid-cols-2" aria-label="More stories">
          <div>
            <NuxtLink
              v-if="older"
              :to="`/blog/${older.slug}`"
              class="group block rounded-lg border border-beige bg-white p-5 transition hover:border-sage"
            >
              <span class="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-sage">
                <ArrowLeft :size="14" aria-hidden="true" />
                Previous story
              </span>
              <span class="mt-2 block font-display text-lg text-charcoal group-hover:text-forest">
                {{ older.title }}
              </span>
            </NuxtLink>
          </div>
          <div class="sm:text-right">
            <NuxtLink
              v-if="newer"
              :to="`/blog/${newer.slug}`"
              class="group block rounded-lg border border-beige bg-white p-5 transition hover:border-sage"
            >
              <span class="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-sage">
                Next story
                <ArrowRight :size="14" aria-hidden="true" />
              </span>
              <span class="mt-2 block font-display text-lg text-charcoal group-hover:text-forest">
                {{ newer.title }}
              </span>
            </NuxtLink>
          </div>
        </nav>
      </div>

      <!-- Table of contents -->
      <aside class="lg:col-span-1">
        <div class="lg:sticky lg:top-28">
          <TableOfContents :sections="post.sections" />

          <div class="mt-6 rounded-lg border border-beige bg-beige/50 p-6">
            <p class="font-display text-lg text-charcoal">Written by {{ post.author }}</p>
            <p class="mt-2 text-sm leading-relaxed text-sage">
              Sample article created for the Wander With Ream demo — general travel writing, not a
              personal trip report.
            </p>
            <NuxtLink
              to="/about"
              class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-forest hover:underline"
            >
              More about Ream
              <ArrowRight :size="15" aria-hidden="true" />
            </NuxtLink>
          </div>
        </div>
      </aside>
    </div>

    <!-- Related articles -->
    <section v-if="related.length > 0" class="border-t border-beige bg-white/60">
      <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeading
          eyebrow="Keep reading"
          title="Related Stories"
          link-to="/blog"
          link-label="All stories"
        />
        <BlogGrid :posts="related" />
      </div>
    </section>
  </article>
</template>
