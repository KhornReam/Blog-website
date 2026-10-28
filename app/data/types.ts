/**
 * Shared content types.
 * Every piece of blog/destination content follows one of these shapes,
 * which keeps data (app/data) separate from presentation (components/pages).
 */

/** An image with the accessibility metadata every picture needs. */
export interface ContentImage {
  /** Path under /public, e.g. "/images/destinations/kampot.png" */
  src: string
  /** Describes the picture for screen readers and search engines. */
  alt: string
  /** Optional visible caption shown under in-article photographs. */
  caption?: string
}

/** One headed section of an article body (also feeds the table of contents). */
export interface ArticleSection {
  /** URL-safe id used for in-page anchors, e.g. "first-light" */
  id: string
  heading: string
  paragraphs: string[]
  image?: ContentImage
}

export interface BlogPost {
  slug: string
  title: string
  /** Short summary used on cards and meta descriptions. */
  excerpt: string
  /** Category slug from categories.ts, e.g. "mountains" or "food". */
  category: string
  /** Optional group slugs (adventure or food groups) used by filtered pages. */
  tags: string[]
  /** ISO date, e.g. "2026-09-14" — sortable as a string. */
  publishedAt: string
  /** Estimated minutes to read the whole article. */
  readingTime: number
  cover: ContentImage
  author: string
  /** Exactly one post is featured on the blog listing page. */
  featured?: boolean
  sections: ArticleSection[]
}

export interface Destination {
  slug: string
  name: string
  /** Province or country, shown as the card subtitle. */
  location: string
  /** Filter region, e.g. "Northeast Cambodia". */
  region: string
  /** Filter category: Mountains, Rivers, Forests, Countryside or Coast. */
  category: string
  shortDescription: string
  description: string
  image: ContentImage
  /** Bulleted reasons to visit. */
  highlights: string[]
  bestTimeToVisit: string
  gettingThere: string
}

/** A filterable label used by blog, adventure and food pages. */
export interface ContentCategory {
  slug: string
  label: string
  description: string
}
