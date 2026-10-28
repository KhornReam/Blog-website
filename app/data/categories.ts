import type { ContentCategory } from './types'

/** Primary taxonomy used by /blog and shown as badges on every article. */
export const blogCategories: ContentCategory[] = [
  {
    slug: 'mountains',
    label: 'Mountains',
    description: 'Highland trails, misty mornings and summit views.',
  },
  {
    slug: 'rivers',
    label: 'Rivers',
    description: 'Flowing water, waterfalls and life along the banks.',
  },
  {
    slug: 'forests',
    label: 'Forests',
    description: 'Canopy walks, wildlife and quiet woodland paths.',
  },
  {
    slug: 'countryside',
    label: 'Countryside',
    description: 'Back roads, rice fields and slow village days.',
  },
  {
    slug: 'food',
    label: 'Food & Drink',
    description: 'Khmer dishes, markets and flavours found on the road.',
  },
  {
    slug: 'travel-tips',
    label: 'Travel Tips',
    description: 'Practical notes for planning your own journey.',
  },
]

/** Grouping used by the Adventures page filters. */
export const adventureGroups: ContentCategory[] = [
  {
    slug: 'mountains',
    label: 'Mountains',
    description: 'Climbs, ridgelines and mornings above the clouds.',
  },
  {
    slug: 'rivers-waterfalls',
    label: 'Rivers & Waterfalls',
    description: 'Following running water through valleys and gorges.',
  },
  {
    slug: 'forests-nature',
    label: 'Forests & Nature',
    description: 'Dense canopy, wildlife and protected wilderness.',
  },
  {
    slug: 'countryside-road-trips',
    label: 'Countryside Road Trips',
    description: 'Unhurried drives through fields and small towns.',
  },
  {
    slug: 'camping-outdoor',
    label: 'Camping & Outdoor',
    description: 'Nights under canvas and days in the open air.',
  },
]

/** Grouping used by the Food & Drink page filters. */
export const foodGroups: ContentCategory[] = [
  {
    slug: 'khmer-classics',
    label: 'Khmer Classics',
    description: 'Beloved dishes cooked the traditional way.',
  },
  {
    slug: 'street-food',
    label: 'Street Food',
    description: 'Grills, carts and quick bites served roadside.',
  },
  {
    slug: 'markets',
    label: 'Local Markets',
    description: 'Morning markets and the food stories they hold.',
  },
  {
    slug: 'snacks-drinks',
    label: 'Snacks & Drinks',
    description: 'Coffee, fruit and things to carry on the road.',
  },
]

/** Filter options for the Destinations page (one chip per category in use). */
export const destinationCategories: ContentCategory[] = [
  { slug: 'rivers', label: 'Rivers', description: 'Valleys shaped by water.' },
  { slug: 'forests', label: 'Forests', description: 'Wild, green and remote.' },
  { slug: 'countryside', label: 'Countryside', description: 'Fields, farms and back roads.' },
  { slug: 'coast', label: 'Coast', description: 'Sea air and quiet shores.' },
]

/** Find a category by slug in any of the lists above. */
export function findCategory(list: ContentCategory[], slug: string | null | undefined) {
  if (!slug) return undefined
  return list.find((category) => category.slug === slug)
}
