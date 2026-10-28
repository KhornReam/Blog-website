import type { BlogPost } from '~/data/types'
import { posts, sortedPosts } from '~/data/posts'
import { blogCategories, findCategory } from '~/data/categories'

/** Options accepted by the blog list (mirrors the URL query string). */
export interface BlogQuery {
  search?: string
  category?: string
}

/**
 * Read/write the /blog page state through URL query parameters, so filtered
 * views can be shared as links (e.g. /blog?q=mountain&category=mountains).
 */
export function useBlog() {
  const route = useRoute()
  const router = useRouter()

  const searchQuery = computed(() => {
    const value = route.query.q
    return typeof value === 'string' ? value : ''
  })

  const activeCategory = computed(() => {
    const value = route.query.category
    return typeof value === 'string' && findCategory(blogCategories, value) ? value : ''
  })

  /** Text + category filtering, always returning the newest posts first. */
  const filteredPosts = computed(() => {
    const term = searchQuery.value.trim().toLowerCase()
    return sortedPosts.filter((post) => {
      const matchesCategory = !activeCategory.value || post.category === activeCategory.value
      if (!matchesCategory) return false
      if (!term) return true
      const haystack = [post.title, post.excerpt, ...post.sections.map((s) => s.heading)]
        .join(' ')
        .toLowerCase()
      return haystack.includes(term)
    })
  })

  const featuredPost = computed(
    () => sortedPosts.find((post) => post.featured) ?? sortedPosts[0],
  )

  function findPost(slug: string | undefined) {
    if (!slug) return undefined
    return posts.find((post) => post.slug === slug)
  }

  function postsByCategory(categorySlug: string, limit?: number) {
    const matches = sortedPosts.filter((post) => post.category === categorySlug)
    return limit ? matches.slice(0, limit) : matches
  }

  function postsByTag(tagSlug: string) {
    return sortedPosts.filter((post) => post.tags.includes(tagSlug))
  }

  /** Food articles are blog posts with the "food" category. */
  const foodPosts = computed(() => postsByCategory('food'))

  /** Related = same category, excluding the current article (max 3). */
  function relatedPosts(post: BlogPost) {
    const sameCategory = sortedPosts.filter(
      (candidate) => candidate.category === post.category && candidate.slug !== post.slug,
    )
    const sameTag = sortedPosts.filter(
      (candidate) =>
        candidate.slug !== post.slug &&
        !sameCategory.includes(candidate) &&
        candidate.tags.some((tag) => post.tags.includes(tag)),
    )
    return [...sameCategory, ...sameTag].slice(0, 3)
  }

  /** Previous/newest-neighbour links on an article page. */
  function neighbours(post: BlogPost) {
    const index = sortedPosts.findIndex((candidate) => candidate.slug === post.slug)
    return {
      newer: index > 0 ? sortedPosts[index - 1] : undefined,
      older: index < sortedPosts.length - 1 ? sortedPosts[index + 1] : undefined,
    }
  }

  function updateQuery(patch: Record<string, string>) {
    router.replace({ query: { ...route.query, ...patch } })
  }

  function setCategory(categorySlug: string) {
    updateQuery({ category: categorySlug })
  }

  function setSearch(term: string) {
    updateQuery({ q: term })
  }

  return {
    searchQuery,
    activeCategory,
    filteredPosts,
    featuredPost,
    findPost,
    postsByCategory,
    postsByTag,
    foodPosts,
    relatedPosts,
    neighbours,
    setCategory,
    setSearch,
    categories: blogCategories,
  }
}
