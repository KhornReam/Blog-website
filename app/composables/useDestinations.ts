import { destinations } from '~/data/destinations'
import { destinationCategories, findCategory } from '~/data/categories'

/**
 * Destinations state, also mirrored in the URL (?q= and ?region=) so a
 * filtered grid can be shared as a normal link.
 */
export function useDestinations() {
  const route = useRoute()
  const router = useRouter()

  const searchQuery = computed(() => {
    const value = route.query.q
    return typeof value === 'string' ? value : ''
  })

  const activeRegion = computed(() => {
    const value = route.query.region
    return typeof value === 'string' && findCategory(destinationCategories, value) ? value : ''
  })

  const filteredDestinations = computed(() => {
    const term = searchQuery.value.trim().toLowerCase()
    return destinations.filter((destination) => {
      const matchesRegion = !activeRegion.value || destination.category === activeRegion.value
      if (!matchesRegion) return false
      if (!term) return true
      return [destination.name, destination.location, destination.shortDescription]
        .join(' ')
        .toLowerCase()
        .includes(term)
    })
  })

  function findDestination(slug: string | undefined) {
    if (!slug) return undefined
    return destinations.find((destination) => destination.slug === slug)
  }

  function updateQuery(patch: Record<string, string>) {
    router.replace({ query: { ...route.query, ...patch } })
  }

  return {
    searchQuery,
    activeRegion,
    filteredDestinations,
    findDestination,
    destinations,
    regions: destinationCategories,
    setRegion: (slug: string) => updateQuery({ region: slug }),
    setSearch: (term: string) => updateQuery({ q: term }),
  }
}
