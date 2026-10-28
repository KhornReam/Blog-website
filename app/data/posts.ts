import type { BlogPost } from './types'

/**
 * Sample blog articles.
 * All entries are demonstration content written for this project template —
 * they are not a personal travel history. Add a new object to this array and
 * the blog, home page and related-article links update automatically.
 */
export const posts: BlogPost[] = [
  {
    slug: 'a-quiet-morning-in-the-mountains',
    title: 'A Quiet Morning in the Mountains',
    excerpt:
      'Before the sun clears the ridgeline, the highlands belong to mist, birdsong and the smell of wet pine.',
    category: 'mountains',
    tags: ['mountains'],
    publishedAt: '2026-10-12',
    readingTime: 5,
    author: 'Ream',
    featured: true,
    cover: {
      src: '/images/posts/quiet-morning-mountains.svg',
      alt: 'Illustration of misty mountain ridges at dawn with a pale sun',
    },
    sections: [
      {
        id: 'before-sunrise',
        heading: 'Before the sunrise',
        paragraphs: [
          'The trail starts in darkness, and for the first twenty minutes the only thing visible is the path directly underfoot. Up here the air is thin and cold enough to see your breath, and every sound carries further than it should.',
          'Halfway up, the mist begins to move. It slides between the ridges in slow bands, and the valley below disappears and reappears as though the landscape is deciding whether to wake.',
        ],
      },
      {
        id: 'first-light',
        heading: 'First light on the ridge',
        paragraphs: [
          'When the sun finally clears the far ridge, the light does not arrive all at once. It catches the highest trees first, then pours down the slopes in order, and the mist turns the colour of warm milk.',
          'This is the part of a mountain morning that photographs never quite hold: the temperature rising by the minute, the birds starting in layers, and the sudden realisation that you have been standing still for a long time.',
        ],
        image: {
          src: '/images/details/mist-valley.svg',
          alt: 'Illustration of a valley half filled with drifting morning mist',
          caption: 'Mist holding in the valley just after sunrise.',
        },
      },
      {
        id: 'going-down',
        heading: 'Going down slowly',
        paragraphs: [
          'The walk back down is always quicker than the climb, partly because the path is easier and partly because the day has started without you. Villages appear below in pieces: rooftops, then smoke, then the sound of a motorbike on a dirt road.',
          'A mountain morning rewards an early alarm more reliably than almost anything else in travel. The summit is the excuse; the quiet is the point.',
        ],
      },
    ],
  },
  {
    slug: 'following-the-sound-of-flowing-water',
    title: 'Following the Sound of Flowing Water',
    excerpt:
      'A walk into the forest with no map, guided only by the noise of a river getting louder with every step.',
    category: 'rivers',
    tags: ['rivers-waterfalls'],
    publishedAt: '2026-10-04',
    readingTime: 4,
    author: 'Ream',
    cover: {
      src: '/images/posts/following-flowing-water.svg',
      alt: 'Illustration of a river winding through a green valley between forested hills',
    },
    sections: [
      {
        id: 'listening-for-water',
        heading: 'Listening for water',
        paragraphs: [
          'Rivers are easier to hear than to find. In thick forest the canopy hides everything, so the first sign of running water is usually a change in the air — cooler, damper, carrying a low sound that has no visible source.',
          'The trick is to stop walking every few minutes. Rivers do not reveal themselves to people who are moving too quickly to notice the ground softening underfoot.',
        ],
      },
      {
        id: 'the-bank',
        heading: 'Where the bank opens up',
        paragraphs: [
          'Eventually the trees step back and the water appears: shallow, clear and moving faster than it looked from upstream. Stones sit just below the surface, and the current pushes a pale line of foam around each of them.',
          'Sample note: this section demonstrates how an in-article photograph sits between paragraphs, with a caption and alt text for accessibility.',
        ],
        image: {
          src: '/images/details/waterfall.svg',
          alt: 'Illustration of a waterfall falling between dark rocks into a pool',
          caption: 'A small fall marks the point where the valley narrows.',
        },
      },
      {
        id: 'why-water',
        heading: 'Why water pulls us in',
        paragraphs: [
          'Almost every settlement along a valley grew up beside moving water, and it is still where markets, temples and kitchens cluster. Following a river is a simple way of following how a place was actually built.',
          'It is also one of the few travel habits that requires no equipment: a pair of shoes you do not mind wetting, and enough patience to keep stopping.',
        ],
      },
    ],
  },
  {
    slug: 'discovering-cambodia-beyond-the-city',
    title: 'Discovering Cambodia Beyond the City',
    excerpt:
      'Two provinces, one bus ticket and a reminder that the country outside Phnom Penh operates on a different clock.',
    category: 'countryside',
    tags: ['countryside-road-trips'],
    publishedAt: '2026-09-21',
    readingTime: 6,
    author: 'Ream',
    cover: {
      src: '/images/posts/beyond-the-city.svg',
      alt: 'Illustration of a rural road crossing open countryside with distant hills',
    },
    sections: [
      {
        id: 'leaving-the-ring-road',
        heading: 'Leaving the ring road',
        paragraphs: [
          'The city thins out in stages rather than ends. First come the warehouses and tyre shops, then the fuel stops with plastic chairs outside, and then, quite suddenly, rice fields running to the horizon in every direction.',
          'Long-distance buses in Cambodia are comfortable and cheap, and they offer something a domestic flight never will: a slow, continuous cross-section of the country.',
        ],
      },
      {
        id: 'provincial-time',
        heading: 'Provincial time',
        paragraphs: [
          'In smaller towns the day is organised around heat and markets. Mornings are for work, afternoons for shade, and the hours either side of sunset for eating outside.',
          'Travel loosens up here. Directions become landmarks, lunch becomes whatever the kitchen finished first, and the plan for tomorrow is decided at dinner.',
        ],
        image: {
          src: '/images/details/country-road.svg',
          alt: 'Illustration of an empty road curving between green fields',
          caption: 'The road out of town, with nothing urgent ahead.',
        },
      },
      {
        id: 'what-you-bring-back',
        heading: 'What you bring back',
        paragraphs: [
          'Nobody returns from a slow trip with a full camera roll and no thoughts. The value of going beyond the usual stops is mostly in the ordinary moments: a shared umbrella at a market, a bus conversation, a roadside coffee that costs almost nothing.',
          'Sample content notice: written as demonstration copy for this travel blog template.',
        ],
      },
    ],
  },
  {
    slug: 'a-weekend-road-trip-through-green-countryside',
    title: 'A Weekend Road Trip Through Green Countryside',
    excerpt:
      'Forty-eight hours, a small motorbike and a loop of back roads that never once hurried us along.',
    category: 'countryside',
    tags: ['countryside-road-trips'],
    publishedAt: '2026-09-07',
    readingTime: 5,
    author: 'Ream',
    cover: {
      src: '/images/posts/weekend-road-trip.svg',
      alt: 'Illustration of rolling green countryside with fields and a winding road',
    },
    sections: [
      {
        id: 'planning-lightly',
        heading: 'Planning lightly',
        paragraphs: [
          'A weekend trip only works if you resist filling it. One destination per day, a rough loop that brings you back, and a rule that no single stretch of road takes longer than two hours.',
          'That is enough structure to keep the trip moving without turning it into a schedule. Everything else — food, stops, detours — can be decided on the road.',
        ],
      },
      {
        id: 'roads-not-taken',
        heading: 'Taking the smaller road',
        paragraphs: [
          'Main roads are faster, but the smaller parallel routes are where a countryside trip earns its name. They pass pagodas, schoolyards and plots of land where the same family has farmed for generations.',
          'Sample image used to show the article layout: photograph, caption and readable body text around it.',
        ],
        image: {
          src: '/images/details/rice-fields.svg',
          alt: 'Illustration of layered rice fields in different shades of green',
          caption: 'Fields at different stages of growth make a patchwork of greens.',
        },
      },
      {
        id: 'ending-the-loop',
        heading: 'Ending the loop',
        paragraphs: [
          'The last hour is always the strangest: the road you have been on for two days becomes familiar, then suddenly you are back where you started with mud on your boots and a phone full of photographs.',
          'Weekend trips are the most repeatable kind of travel. They are cheap, close to home and easy to improve the second time around.',
        ],
      },
    ],
  },
  {
    slug: 'waterfalls-that-remember-ratanakiri',
    title: 'Waterfalls That Remember Ratanakiri',
    excerpt:
      'In the northeast, red roads lead to falls that drop into pools clear enough to count the stones.',
    category: 'rivers',
    tags: ['rivers-waterfalls'],
    publishedAt: '2026-08-24',
    readingTime: 5,
    author: 'Ream',
    cover: {
      src: '/images/posts/ratanakiri-waterfalls.svg',
      alt: 'Illustration of a tall waterfall in dense forest with a bright pool below',
    },
    sections: [
      {
        id: 'red-roads',
        heading: 'Red roads out of Banlung',
        paragraphs: [
          'The roads in Ratanakiri are the colour of rust, and after rain they become genuinely difficult — a fact worth knowing before you plan a waterfall day.',
          'The drive is slow by design. Countersinks, cattle and occasional roadworks keep the average speed low enough that the forest feels like the destination rather than the backdrop.',
        ],
      },
      {
        id: 'at-the-fall',
        heading: 'Standing at the fall',
        paragraphs: [
          'Waterfalls in this region arrive in stages: first the sound, then the spray on your arms, and finally the drop itself appearing through the trees all at once.',
          'Pools at the base are swimmable in the dry season, though the rocks are slippery and the current near the lip is stronger than it looks.',
        ],
        image: {
          src: '/images/details/waterfall.svg',
          alt: 'Illustration of water falling in a wide sheet into a green pool',
          caption: 'The lower pool, calm only a few metres from the drop.',
        },
      },
      {
        id: 'respect-the-place',
        heading: 'Respecting the place',
        paragraphs: [
          'These falls sit inside living landscapes, and local communities manage much of the land around them. Asking before photographing people, carrying out rubbish and paying the small entry fees are basic courtesies that keep places open.',
          'Sample note: this article is demonstration content for the Wander With Ream template.',
        ],
      },
    ],
  },
  {
    slug: 'camping-in-the-cardamom-mountains',
    title: 'Camping in the Cardamom Mountains',
    excerpt:
      'Two nights under canvas in one of Southeast Asia’s last great rainforests, with a river for an alarm clock.',
    category: 'forests',
    tags: ['camping-outdoor', 'forests-nature'],
    publishedAt: '2026-08-10',
    readingTime: 6,
    author: 'Ream',
    cover: {
      src: '/images/posts/cardamom-camping.svg',
      alt: 'Illustration of a small tent beside a river under layered forest mountains',
    },
    sections: [
      {
        id: 'why-the-cardamoms',
        heading: 'Why the Cardamoms',
        paragraphs: [
          'The Cardamom range holds some of the largest remaining rainforest in mainland Southeast Asia, and it is one of the few places in the region where a multi-day walk still feels genuinely remote.',
          'Because the terrain is serious, most visitors go with a local guide — which also means camps are set up by people who know exactly where the water is.',
        ],
      },
      {
        id: 'camp-routine',
        heading: 'The rhythm of camp',
        paragraphs: [
          'A forest camp day has a clear shape: walk while it is cool, stop when the heat peaks, swim, eat, and sleep almost immediately after dark.',
          'Everything you carry has to earn its weight. Two nights out is long enough to learn which items you packed for comfort and never touched.',
        ],
        image: {
          src: '/images/details/forest-camp.svg',
          alt: 'Illustration of a tent and campfire in a forest clearing at dusk',
          caption: 'Camp set early, before the light drops under the canopy.',
        },
      },
      {
        id: 'what-the-forest-teaches',
        heading: 'What the forest teaches',
        paragraphs: [
          'Rainforest is not quiet. It is layered: insects, birds, dripping leaves and the occasional crash of something moving through undergrowth you cannot see.',
          'Two nights is enough to reset your sense of scale. You come out smaller, slower and considerably more respectful of weather.',
        ],
      },
    ],
  },
  {
    slug: 'slow-trails-under-the-canopy',
    title: 'Slow Trails Under the Canopy',
    excerpt:
      'A day walk in Mondulkiri where the plan was distance but the forest kept insisting on pausing.',
    category: 'forests',
    tags: ['forests-nature'],
    publishedAt: '2026-07-26',
    readingTime: 4,
    author: 'Ream',
    cover: {
      src: '/images/posts/forest-canopy-trails.svg',
      alt: 'Illustration of a narrow trail through tall trees with light filtering down',
    },
    sections: [
      {
        id: 'the-canopy-contract',
        heading: 'The canopy contract',
        paragraphs: [
          'Walk into a dense forest with a distance goal and the forest will quietly overrule it. Roots, vines and sudden clearings slow the pace until the walk becomes something closer to a stroll with a purpose.',
          'The upside is that every pause turns up something: a line of ants carrying leaves, a lizard that freezes only at the last second, a flower that looks out of place at ground level.',
        ],
      },
      {
        id: 'edges-and-clearings',
        heading: 'Edges and clearings',
        paragraphs: [
          'Wildlife tends to gather where forest meets open land, so the most productive part of the walk is often the last stretch before a field or a village.',
          'Going slowly also means going quietly, and a quiet walker simply sees more than a fast one.',
        ],
        image: {
          src: '/images/details/forest-camp.svg',
          alt: 'Illustration of trees at the edge of a clearing in warm afternoon light',
          caption: 'Where the forest opens, the sightings improve.',
        },
      },
      {
        id: 'carry-out',
        heading: 'Carry in, carry out',
        paragraphs: [
          'There is no bin on a forest trail, which means everything you bring is your responsibility for the whole day. It is a small discipline that makes a visible difference.',
          'Sample demonstration article for the Wander With Ream blog template.',
        ],
      },
    ],
  },
  {
    slug: 'packing-light-for-tropical-trails',
    title: 'Packing Light for Tropical Trails',
    excerpt:
      'A short, honest list of what actually earns a place in the bag when heat and rain decide the rules.',
    category: 'travel-tips',
    tags: ['mountains', 'camping-outdoor'],
    publishedAt: '2026-07-12',
    readingTime: 5,
    author: 'Ream',
    cover: {
      src: '/images/posts/packing-light.svg',
      alt: 'Illustration of a backpack resting on a rock overlooking green hills',
    },
    sections: [
      {
        id: 'start-with-weather',
        heading: 'Start with the weather, not the shop',
        paragraphs: [
          'Packing lists fail because they are built from other people’s trips. In a tropical climate the only two variables that matter are rain and heat, so every item should answer one of them.',
          'If a piece of gear does not solve rain, heat, bites or food, it is probably decoration.',
        ],
      },
      {
        id: 'the-short-list',
        heading: 'The short list',
        paragraphs: [
          'One quick-dry shirt, one spare, long trousers for evenings, a light rain shell, a headlamp, a water bottle you trust, and a small first-aid kit with more plasters than you think you need.',
          'Shoes matter more than anything else on this list. Broken-in, dryable, with grip that still works on wet stone — that single choice decides how much you enjoy day three.',
        ],
        image: {
          src: '/images/details/country-road.svg',
          alt: 'Illustration of a path leading toward distant green hills',
          caption: 'Carry less, walk further, stop more often.',
        },
      },
      {
        id: 'the-leave-behind',
        heading: 'What to leave behind',
        paragraphs: [
          'Books you will not finish, a second pair of shoes, more than one power bank, and anything that only works when you have a table to put it on.',
          'Travel tips articles in this project are sample content — adapt the list to your own trips before you rely on it.',
        ],
      },
    ],
  },
  {
    slug: 'fish-amok-steamed-in-banana-leaves',
    title: 'Fish Amok, Steamed in Banana Leaves',
    excerpt:
      'Khmer curry, coconut, kroeung and a banana leaf parcel that arrives at the table still soft with steam.',
    category: 'food',
    tags: ['khmer-classics'],
    publishedAt: '2026-10-08',
    readingTime: 4,
    author: 'Ream',
    cover: {
      src: '/images/posts/fish-amok.svg',
      alt: 'Illustration of a banana leaf parcel with curry and herbs in a shallow bowl',
    },
    sections: [
      {
        id: 'what-amok-is',
        heading: 'What amok actually is',
        paragraphs: [
          'Amok is a curry mousse: fish or chicken folded through coconut milk and kroeung — the Cambodian lemongrass, galangal and turmeric paste that defines much of the cuisine — then steamed until it sets softly.',
          'The banana leaf cup is not decoration. It holds the shape, passes the heat gently and adds a faint green scent you notice only when the parcel is opened.',
        ],
      },
      {
        id: 'the-kroeung-question',
        heading: 'Everything starts with kroeung',
        paragraphs: [
          'Ask a Cambodian cook what makes a good amok and the answer is almost always the paste, not the fish. Freshly pounded kroeung smells floral and peppery; a tired batch tastes flat no matter how long it steams.',
          'Sample note: this article is demonstration content — it describes the dish generally rather than reviewing any particular restaurant.',
        ],
        image: {
          src: '/images/details/market-stall.svg',
          alt: 'Illustration of a market stall with bowls, herbs and produce on a wooden table',
          caption: 'Fresh herbs and pastes are bought the same morning they are used.',
        },
      },
      {
        id: 'eating-it',
        heading: 'How it is eaten',
        paragraphs: [
          'Amok arrives in its leaf cup, often with rice on the side, and is eaten by folding a little rice into a little curry with each spoonful.',
          'It is rich, so a small portion satisfies — which is why it works so well as the centrepiece of a shared meal.',
        ],
      },
    ],
  },
  {
    slug: 'nom-banh-chok-morning-noodles',
    title: 'Nom Banh Chok: A Morning Noodle Tradition',
    excerpt:
      'Fresh rice noodles, green curry and a fistful of herbs — breakfast that is finished before the heat begins.',
    category: 'food',
    tags: ['khmer-classics', 'markets'],
    publishedAt: '2026-09-28',
    readingTime: 4,
    author: 'Ream',
    cover: {
      src: '/images/posts/nom-banh-chok.svg',
      alt: 'Illustration of a bowl of rice noodles with green curry and fresh herbs',
    },
    sections: [
      {
        id: 'a-breakfast-dish',
        heading: 'A dish that belongs to the morning',
        paragraphs: [
          'Nom banh chok is a breakfast food by tradition: noodles made overnight, a mild fish-based green curry, and a plate of raw vegetables and herbs piled high enough to look like a small garden.',
          'It is sold in the morning and generally gone by mid-morning, which makes finding it a reliable lesson in getting up early.',
        ],
      },
      {
        id: 'building-the-bowl',
        heading: 'Building the bowl',
        paragraphs: [
          'The noodles go in first, the curry is ladled over, and then everything else is added by the eater: banana blossom, water spinach, mint, bean sprouts, a squeeze of lime and a little chilli if you want it.',
          'Each market versions differs slightly, and the fun of travelling is comparing them town by town.',
        ],
        image: {
          src: '/images/details/market-stall.svg',
          alt: 'Illustration of a morning market stall with baskets of noodles and greens',
          caption: 'Morning stalls sell nom banh chok until the curry runs out.',
        },
      },
      {
        id: 'where-to-find-it',
        heading: 'Where to look for it',
        paragraphs: [
          'Look for small stools, a covered pot and a basket of greens — the three reliable signals of a nom banh chok vendor. Markets are the safest bet; some sellers also move through residential streets early.',
          'Sample content notice: written as general background for this demo blog, not a review of a specific vendor.',
        ],
      },
    ],
  },
  {
    slug: 'grilled-fish-beside-the-river',
    title: 'Grilled Fish Beside the River',
    excerpt:
      'Charcoal smoke, lime and chilli, and a whole fish cooked over coals at a table a metre from the water.',
    category: 'food',
    tags: ['street-food'],
    publishedAt: '2026-09-14',
    readingTime: 4,
    author: 'Ream',
    cover: {
      src: '/images/posts/grilled-fish-river.svg',
      alt: 'Illustration of a whole fish grilling over a small charcoal brazier',
    },
    sections: [
      {
        id: 'fire-and-river-air',
        heading: 'Fire and river air',
        paragraphs: [
          'Riverside grills follow a simple formula: fresh fish, salt, charcoal and time. The cooking takes longer than you expect because the coals are kept low, and the skin crisps before the flesh dries out.',
          'Eating beside water adds something you cannot plate for: cool air, the sound of the current and smoke drifting off in one direction all evening.',
        ],
      },
      {
        id: 'the-condiment-plate',
        heading: 'The condiment plate',
        paragraphs: [
          'Almost every table arrives with the same small dishes — lime wedges, salt, pepper and chilli, sometimes with a little sugar — and every cook has a preferred mix for squeezing over the fish.',
          'Sample note: demonstration content describing the dish generally, not a restaurant review.',
        ],
        image: {
          src: '/images/details/market-stall.svg',
          alt: 'Illustration of small dishes of lime, chilli and dipping sauce on a table',
          caption: 'The same three condiments appear at almost every grill.',
        },
      },
      {
        id: 'after-the-meal',
        heading: 'After the meal',
        paragraphs: [
          'Riverside meals stretch. Nobody hurries the end of a grilled fish dinner, and the charcoal is usually still glowing when the plates are cleared.',
          'It is the kind of meal that makes a modest guesthouse night feel like the best part of a trip.',
        ],
      },
    ],
  },
  {
    slug: 'market-breakfast-in-the-early-light',
    title: 'Market Breakfast in the Early Light',
    excerpt:
      'A tour of a provincial market between six and eight, when the produce is freshest and the coffee is strongest.',
    category: 'food',
    tags: ['markets'],
    publishedAt: '2026-08-30',
    readingTime: 5,
    author: 'Ream',
    cover: {
      src: '/images/posts/market-breakfast.svg',
      alt: 'Illustration of a market aisle with stalls, baskets and hanging lights',
    },
    sections: [
      {
        id: 'six-am',
        heading: 'The six o’clock market',
        paragraphs: [
          'Markets are at their best two hours after sunrise. Produce has just arrived, cooked food is at its freshest, and the aisles still belong to locals rather than visitors.',
          'By nine the character changes: shops close up, the heat arrives and the loudest sounds become ceiling fans.',
        ],
      },
      {
        id: 'what-to-order',
        heading: 'What to order',
        paragraphs: [
          'Congee, fried dough sticks, fresh soy milk and grilled pork over rice are safe bets almost everywhere, and none of them cost much.',
          'The reliable method is to pick the stall with the longest queue of people who are clearly not queueing for fun.',
        ],
        image: {
          src: '/images/details/market-stall.svg',
          alt: 'Illustration of baskets of fruit and vegetables arranged at a market stall',
          caption: 'Everything stacked before the day gets hot.',
        },
      },
      {
        id: 'market-etiquette',
        heading: 'Small courtesies',
        paragraphs: [
          'Ask before photographing a stall, carry small notes, and point rather than touch produce. Markets are working businesses first and photo opportunities second.',
          'Sample content: written as general guidance for this demo project.',
        ],
      },
    ],
  },
  {
    slug: 'highland-snacks-for-the-road',
    title: 'Highland Snacks for the Road',
    excerpt:
      'Dried fruit, sticky rice parcels and grilled corn — what the northeast sells at the roadside and why it works.',
    category: 'food',
    tags: ['snacks-drinks', 'markets'],
    publishedAt: '2026-08-16',
    readingTime: 4,
    author: 'Ream',
    cover: {
      src: '/images/posts/highland-snacks.svg',
      alt: 'Illustration of dried fruit, rice parcels and corn arranged for sale',
    },
    sections: [
      {
        id: 'roadside-economics',
        heading: 'Roadside economics',
        paragraphs: [
          'Highland snacks are built for transport: dried, salted, wrapped in leaves or roasted in their skins, they survive hours in a bag without a cooler.',
          'They are also cheap in the way that only village food is cheap, and buying them puts money directly into the hands of the family that made them.',
        ],
      },
      {
        id: 'what-to-buy',
        heading: 'What to buy',
        paragraphs: [
          'Dried banana and mango, sticky rice with banana grilled in bamboo, grilled corn with salt and chilli, and hard candies flavoured with forest honey are the usual suspects.',
          'Sample note: demonstration copy — no specific vendor is being reviewed here.',
        ],
        image: {
          src: '/images/details/market-stall.svg',
          alt: 'Illustration of wrapped snacks and dried fruit on a market table',
          caption: 'Leaf-wrapped snacks keep for hours without refrigeration.',
        },
      },
      {
        id: 'carry-a-bag',
        heading: 'Bring your own bag',
        paragraphs: [
          'A light cloth bag is the single most useful travel accessory in a market region. It holds snacks, wet umbrellas and everything else that would otherwise arrive home in three plastic bags.',
          'Small habits like this make long bus days considerably more comfortable.',
        ],
      },
    ],
  },
  {
    slug: 'iced-coffee-and-shaded-afternoons',
    title: 'Iced Coffee and Shaded Afternoons',
    excerpt:
      'How the Cambodian coffee break became the best-planned part of every hot afternoon on the road.',
    category: 'food',
    tags: ['snacks-drinks'],
    publishedAt: '2026-07-30',
    readingTime: 3,
    author: 'Ream',
    cover: {
      src: '/images/posts/iced-coffee.svg',
      alt: 'Illustration of a tall glass of iced coffee on a table beside a window',
    },
    sections: [
      {
        id: 'the-two-to-four-rule',
        heading: 'The two-to-four rule',
        paragraphs: [
          'Between roughly two and four in the afternoon, walking anywhere is a poor decision. Shade, air movement and something cold in a glass are the only three things that help.',
          'Cafés in provincial towns understand this completely, which is why the quiet hours are when they are fullest of people doing absolutely nothing.',
        ],
      },
      {
        id: 'how-it-is-served',
        heading: 'How it is served',
        paragraphs: [
          'Local coffee comes dark and strong, poured over ice with condensed milk on the sweeter side, though most stalls will serve it black if you ask.',
          'The glass is the point: large, sweating, and cold enough to slow you down for half an hour.',
        ],
        image: {
          src: '/images/details/market-stall.svg',
          alt: 'Illustration of glasses and a coffee pot on a café table',
          caption: 'A shaded table and one cold glass are the whole plan.',
        },
      },
      {
        id: 'why-it-matters',
        heading: 'Why the break matters',
        paragraphs: [
          'Trips are not made only of destinations. The pause in the middle of a hot day is often where the best conversations happen, because nobody is trying to get anywhere.',
          'Sample content notice: general description written for this travel blog template.',
        ],
      },
    ],
  },
]

/** Posts sorted newest first — the order used across the whole site. */
export const sortedPosts: BlogPost[] = [...posts].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt),
)
