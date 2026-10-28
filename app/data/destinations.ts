import type { Destination } from './types'

/**
 * Sample destination data.
 * These are demonstration entries for the site design — descriptions are
 * general travel information, not personal trip reports.
 */
export const destinations: Destination[] = [
  {
    slug: 'kampot',
    name: 'Kampot',
    location: 'Kampot Province, Cambodia',
    region: 'Southwest Cambodia',
    category: 'rivers',
    shortDescription:
      'A quiet riverside town framed by palm trees, pepper farms and slow evenings on the water.',
    description:
      'Kampot sits along the Praek Tuek Chhu river in southern Cambodia, where colonial shophouses, salt fields and pepper plantations share the same quiet streets. The town is a gentle base for exploring the coast, the nearby Bokor highlands and the villages that farm the famous Kampot pepper. Sample description written for demonstration.',
    image: {
      src: '/images/destinations/kampot.png',
      alt: 'Photograph of a multi-tiered turquoise waterfall with two people on a bamboo raft on the pool below',
    },
    highlights: [
      'Riverside sunsets from the town promenade',
      'Pepper plantations and salt fields outside town',
      'Day trips to Kep and Bokor National Park',
    ],
    bestTimeToVisit: 'November to February, when the dry season brings cooler evenings.',
    gettingThere: 'About three hours by road from Phnom Penh, or a shorter trip from Kep.',
  },
  {
    slug: 'mondulkiri',
    name: 'Mondulkiri',
    location: 'Mondulkiri Province, Cambodia',
    region: 'Northeast Cambodia',
    category: 'forests',
    shortDescription:
      'Rolling green hills, pine air and wide horizons in Cambodia’s most sparsely populated province.',
    description:
      'Mondulkiri is a highland province of forests, waterfalls and ranch-like grasslands bordering Vietnam. Its towns are small, its roads are long, and the landscape changes quickly with the seasons. Visitors come for nature walks, elephant sanctuaries and the cool climate of the Plateau. Sample description written for demonstration.',
    image: {
      src: '/images/destinations/mondulkiri.png',
      alt: 'Photograph of a winding road curving through bright green hills under a soft sky',
    },
    highlights: [
      'Bou Sra and other waterfalls deep in the forest',
      'Pine hill viewpoints and cool highland air',
      'Ethnic minority villages and local markets',
    ],
    bestTimeToVisit: 'October to March, after the rains and before the hottest months.',
    gettingThere: 'Long-distance buses from Phnom Penh take around eight to ten hours.',
  },
  {
    slug: 'ratanakiri',
    name: 'Ratanakiri',
    location: 'Ratanakiri Province, Cambodia',
    region: 'Northeast Cambodia',
    category: 'rivers',
    shortDescription:
      'Volcanic lakes, red earth roads and rivers that thread through remote northern forest.',
    description:
      'Ratanakiri in Cambodia’s far northeast is known for its red laterite roads, jungle treks, gem mining towns and the crater lake of Yeak Laom. The province shares a border with Laos and Vietnam, and its communities include several indigenous groups with distinct traditions. Sample description written for demonstration.',
    image: {
      src: '/images/destinations/ratanakiri.png',
      alt: 'Photograph of a multi-tiered turquoise waterfall with two people on a bamboo raft on the pool below',
    },
    highlights: [
      'Yeak Laom crater lake for a quiet swim',
      'Waterfalls set inside protected forest',
      'Village homestays and morning markets',
    ],
    bestTimeToVisit: 'November to February, when roads are drier and nights are cool.',
    gettingThere: 'Flights operate from Phnom Penh to Banlung, or take an overnight bus.',
  },
  {
    slug: 'kompong-speu',
    name: 'Kompong Speu',
    location: 'Kompong Speu Province, Cambodia',
    region: 'Southwest Cambodia',
    category: 'rivers',
    shortDescription:
      'Forest-backed water, stilted riverside huts and quiet country roads about an hour from the capital.',
    description:
      'Kompong Speu province lies immediately west of Phnom Penh, a mix of farmland, palm-lined roads and low forested hills. Its rivers and reservoirs are edged by simple wooden structures built out over the water, and the province is close enough to the city for an unhurried day trip. Sample description written for demonstration.',
    image: {
      src: '/images/destinations/kompong-speu.png',
      alt: 'Photograph of thatched-roof huts on stilts over calm water in front of dense green forest',
    },
    highlights: [
      'Stilted huts and still water beside the forest',
      'Palm-sugar farms along the country roads',
      'An easy half-day escape west of Phnom Penh',
    ],
    bestTimeToVisit: 'November to February, for dry days and cool evenings.',
    gettingThere: 'About an hour by road west of Phnom Penh.',
  },
  {
    slug: 'kompong-thom',
    name: 'Kompong Thom',
    location: 'Kompong Thom Province, Cambodia',
    region: 'Central Cambodia',
    category: 'countryside',
    shortDescription:
      'Ancient brick temples, open farmland and long central roads between Phnom Penh and the north.',
    description:
      'Kompong Thom is a central province straddling the main road north, with wide farmland, a slow riverside town and the ruins of Sambor Prei Kuk — an ancient site of brick temples with carved stone doorways set among the trees. Sample description written for demonstration.',
    image: {
      src: '/images/destinations/kompong-thom.png',
      alt: 'Photograph of an ancient brick temple doorway with a carved stone lintel and mossy pillars',
    },
    highlights: [
      'Sambor Prei Kuk ruins with carved stone doorways',
      'Riverside evenings in a quiet provincial town',
      'Farmland and village roads between major stops',
    ],
    bestTimeToVisit: 'November to February, when the fields are green and the roads are dry.',
    gettingThere: 'Around three and a half hours by road from Phnom Penh, with daily buses.',
  },
  {
    slug: 'kep',
    name: 'Kep',
    location: 'Kep Province, Cambodia',
    region: 'Coastal Cambodia',
    category: 'coast',
    shortDescription:
      'A small seaside town of crab markets, quiet beaches and hills that meet the Gulf of Thailand.',
    description:
      'Kep was built as a coastal retreat and still feels like one: low hills, sea breeze and a shoreline of shallow bays. The famous crab market lands its catch each morning, and the nearby islands and salt flats make easy half-day trips. Sample description written for demonstration.',
    image: {
      src: '/images/destinations/kep.png',
      alt: 'Photograph of a giant blue crab statue on a platform in the sea beside a "Welcome to Kep" sign',
    },
    highlights: [
      'Fresh crab at the morning market',
      'Sheltered beaches and island boat trips',
      'Pepper farms on the road to Kampot',
    ],
    bestTimeToVisit: 'December to April, for calm seas and dry weather.',
    gettingThere: 'Around two and a half hours by road from Phnom Penh.',
  },
]
