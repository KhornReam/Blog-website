# Wander With Ream — Personal Travel Blog

A modern, responsive travel blog built with **Nuxt 4**, **Vue 3 (Composition API)**, **TypeScript** and **Tailwind CSS v4**.

> Find your way. Feel the journey. Taste the world.

All blog posts, destinations and food articles are **sample/demo content** stored in local TypeScript files — no database, no backend, no API keys required.

---

## 1. What you need

| Tool | Version | Why |
| --- | --- | --- |
| Node.js | 18.x or newer (20+/24 recommended) | Runs Nuxt and npm |
| npm | Comes with Node.js | Installs packages |
| A code editor | VS Code recommended | Editing files |
| A browser | Chrome/Edge/Firefox | Viewing the site |

Check what you have:

```bash
node --version
npm --version
```

If Node is missing, download the LTS installer from <https://nodejs.org> and run it, then reopen your terminal.

> All commands in this guide are run **inside the project folder** (`frontend/` in this repository).
> If your terminal is somewhere else, `cd` into it first, for example: `cd frontend`

---

## 2. Run the project (already set up)

```bash
cd frontend          # from the repository root
npm install          # first time only — downloads dependencies
npm run dev          # starts the dev server
```

Then open <http://localhost:3000> in your browser.

Other commands:

```bash
npm run typecheck    # checks every .ts/.vue file for type errors
npm run build        # production build (output in .output/)
npm run preview      # serve the production build locally
npm run images       # regenerate the SVG illustrations in public/images
```

> A dev server you already have running on port 3000 keeps picking up file changes
> automatically — you rarely need to restart it.

### Starting a brand-new project like this one (for learning)

```bash
npx nuxi@latest init my-travel-blog   # 1. scaffold a Nuxt project
cd my-travel-blog                     # 2. enter the folder
npm install                           # 3. install base dependencies
npm install @tailwindcss/vite tailwindcss   # 4. Tailwind CSS v4 (Vite plugin)
npm install -D typescript@~5.9 vue-tsc      # 5. type-checking
npm install @lucide/vue                     # 6. icons
```

Then:
1. Copy the `nuxt.config.ts`, `app/`, `public/` and `scripts/` folders from this project.
2. Run `npm install` and `npm run dev`.

**Why `@tailwindcss/vite` and not `@nuxtjs/tailwindcss`?**
The official Nuxt Tailwind module currently pins Tailwind **3**. Tailwind **4** is installed
through its official Vite plugin instead — it is wired up in `nuxt.config.ts` (two lines) and
works with any Nuxt version that uses Vite.

---

## 3. How the project is organised

```text
frontend/
├── app/
│   ├── app.vue                 # root component (renders layout + page)
│   ├── error.vue               # custom 404/error page
│   ├── assets/css/main.css     # Tailwind import + brand colours/fonts
│   ├── layouts/default.vue     # page shell: header + <slot> + footer
│   ├── pages/                  # 📄 file-based routing (see table below)
│   │   ├── index.vue           #   /
│   │   ├── about.vue           #   /about
│   │   ├── adventures.vue      #   /adventures
│   │   ├── food.vue            #   /food
│   │   ├── destinations/
│   │   │   ├── index.vue       #   /destinations
│   │   │   └── [slug].vue      #   /destinations/anything
│   │   └── blog/
│   │       ├── index.vue       #   /blog
│   │       └── [slug].vue      #   /blog/anything
│   ├── components/
│   │   ├── layout/    AppHeader · AppFooter · MobileMenu
│   │   ├── home/      HeroSection · FeaturedDestinations · LatestStories
│   │   │              FoodHighlights · PhilosophySection · NewsletterSection
│   │   ├── blog/      BlogCard · BlogGrid · BlogFilters · ArticleContent · TableOfContents
│   │   ├── destinations/ DestinationCard · DestinationGrid
│   │   └── ui/        SectionHeading · CategoryBadge · FilterBar
│   │                  NewsletterForm · EmptyState
│   ├── composables/
│   │   ├── useBlog.ts           # search/filter/related logic for articles
│   │   └── useDestinations.ts   # search/filter logic for destinations
│   ├── data/                    # 📦 ALL CONTENT LIVES HERE
│   │   ├── types.ts             #   TypeScript interfaces (BlogPost, Destination…)
│   │   ├── posts.ts             #   14 sample articles (8 travel + 6 food)
│   │   ├── destinations.ts      #   6 sample destinations
│   │   ├── categories.ts        #   blog categories, adventure + food groups
│   │   └── navigation.ts        #   main menu items
│   └── utils/formatDate.ts      # shared date formatting
├── public/
│   ├── images/                  # local SVG illustrations (no external URLs)
│   ├── favicon.svg
│   └── robots.txt
├── scripts/generate-images.mjs  # regenerates every illustration
├── nuxt.config.ts               # Tailwind plugin, head/SEO, component config
└── package.json
```

### Routes

| URL | Page | Special features |
| --- | --- | --- |
| `/` | Home | Hero, featured destinations, latest stories, food, philosophy, newsletter |
| `/destinations` | Destinations | `?q=` search + `?region=` filter (shareable URLs) |
| `/destinations/[slug]` | Destination detail | 404 for unknown slugs, related destinations |
| `/adventures` | Adventures | `?type=` filter (mountains, rivers, forests, road trips, camping) |
| `/food` | Food & Drink | `?q=` search + `?group=` filter |
| `/blog` | Stories | Featured article, `?q=`/`?category=` filters, Load More |
| `/blog/[slug]` | Article | TOC, in-article photos, share/copy link, prev/next, related, 404 |
| `/about` | About Me | Editable sample bio, social placeholders |
| any unknown URL | 404 | Custom branded error page |

### How the pieces fit together

1. **Data → Composables → Pages → Components.**
   `app/data/posts.ts` holds content. `useBlog()` filters it (using the URL query as
   state). Pages read the composable and pass results into presentational components
   like `<BlogGrid>`. Components never hard-code content.
2. **Routing is file-based.** A file in `app/pages/x.vue` becomes `/x`. The brackets in
   `[slug].vue` mean "any value", and the component throws a 404 when nothing matches.
3. **Components are auto-imported.** `components/blog/BlogCard.vue` can be written as
   `<BlogCard>` anywhere — no import line needed. Composables in `composables/` and
   helpers in `utils/` work the same way.
4. **Styling** uses Tailwind utility classes. Brand colours (`bg-forest`, `text-cream`,
   `bg-beige`, `text-charcoal`, `text-sage`) and fonts (`font-display`, body sans) are
   defined once as CSS variables in `app/assets/css/main.css`.

---

## 4. Editing guide

### ✏️ Add a blog article

Open `app/data/posts.ts` and copy an existing object into the `posts` array:

```ts
{
  slug: 'my-new-story',              // becomes /blog/my-new-story
  title: 'My New Story',
  excerpt: 'One or two sentences shown on cards and in search results.',
  category: 'mountains',             // one of the slugs in categories.ts
  tags: ['mountains'],               // drives the Adventures / Food filters
  publishedAt: '2026-11-01',         // YYYY-MM-DD, newest sorts first
  readingTime: 5,                    // minutes
  author: 'Ream',
  cover: { src: '/images/posts/quiet-morning-mountains.svg', alt: 'Describe the cover' },
  sections: [
    {
      id: 'my-heading',              // anchor used by the table of contents
      heading: 'My Heading',
      paragraphs: ['First paragraph.', 'Second paragraph.'],
      image: { src: '/images/details/waterfall.svg', alt: 'Describe it', caption: 'Optional caption' },
    },
  ],
},
```

That one object automatically appears on the home page, `/blog`, category filters,
related-article blocks and prev/next navigation.

### 📍 Add a destination

Open `app/data/destinations.ts`, copy an object, change the values (`slug`,
`name`, `location`, `region`, `category`, descriptions, `highlights`,
`bestTimeToVisit`, `gettingThere`). The card grid and detail page pick it up instantly.

### 🎨 Change colours, fonts and text

* **Colours / fonts** → `app/assets/css/main.css` (`@theme` block). Change
  `--color-forest` and every `bg-forest`, `text-forest` follows.
* **Site name, default SEO, fonts, favicon** → `app/nuxt.config.ts`.
* **Navigation menu** → `app/data/navigation.ts`.
* **Hero text, philosophy quote, newsletter copy** → `app/components/home/*.vue`.
* **Footer links & social URLs** → `app/components/layout/AppFooter.vue`
  (the `socialLinks` array at the top).
* **About page text** → `app/pages/about.vue` (the arrays at the top of the script).

### 🖼 Replace the images

Every picture is a local SVG in `public/images/` — nothing is loaded from the internet.
To use real photos, drop them into `public/images/` (e.g. `public/images/posts/my.jpg`)
and point `src` at them (`/images/posts/my.jpg`). The SVGs can also be regenerated or
restyled in `scripts/generate-images.mjs` via `npm run images`.

---

## 5. Production build

```bash
npm run typecheck   # 1. verify types
npm run build       # 2. build (creates .output/)
npm run preview     # 3. serve the build at localhost:3000
```

The deployable output is the `.output/` folder (Node server by default). For static
hosting, use `npm run generate` instead, which emits `.output/public/`.

---

## 6. Common problems

| Symptom | Fix |
| --- | --- |
| `command not found: npm` | Install Node.js from nodejs.org, then reopen the terminal |
| `EADDRINUSE: port 3000 is in use` | The server is already running — open <http://localhost:3000>, or stop the other process |
| `Cannot find module …` | Run `npm install` again in the project folder |
| Styles missing / classes do nothing | Make sure `@import 'tailwindcss'` is the first line of `app/assets/css/main.css` and `@tailwindcss/vite` is listed in `nuxt.config.ts` |
| `nuxt typecheck` crashes with `ERR_PACKAGE_PATH_NOT_EXPORTED` | TypeScript 7 is installed; pin it back: `npm install -D typescript@~5.9` |
| Blank page in the browser | Check the terminal for the first red error — it names the file |
| Image 404s | The `src` must start with `/images/…` and match a file in `public/images/` |
| Server feels “stuck” | Stop it with `Ctrl+C` and run `npm run dev` again |

---

## 7. What was tested

Verified during development of this project:

* `npm run typecheck` — passes with no errors.
* `npm run build` — production build succeeds.
* Every route returns **200**: `/`, `/destinations`, `/destinations/kampot`,
  `/adventures`, `/food`, `/blog`, all 14 `/blog/[slug]` pages, `/about`.
* Unknown slugs (`/blog/does-not-exist`, `/destinations/nowhere`) return **404** and
  render the custom error page.
* Search and filters really filter: `?q=`, `?category=`, `?region=`, `?type=`,
  `?group=` produce different results and empty states.
* Every `/images/*.svg` referenced by any page returns **200**.
* Each page has exactly one `<h1>`; forms have labels; the newsletter shows an honest
  demo message (nothing is stored).

Not covered (no test runner or linter is configured in this project): automated unit
tests, browser screenshot review, and linting. SEO metadata uses relative `ogImage`
paths — an absolute URL (`https://your-domain.com/...`) is needed once the site is live.

## 8. Future improvements

1. Connect a real newsletter provider (e.g. Buttondown, MailerLite) to `NewsletterForm.vue`.
2. Add `@nuxtjs/sitemap` for an auto-generated sitemap (robots.txt already exists).
3. Add `@nuxt/image` with `provider: static` once real photos replace the SVG placeholders.
4. Write unit tests for `useBlog` / `useDestinations` with Vitest, and add ESLint/Prettier.
5. Move content to Nuxt Content (Markdown files) when articles outgrow a TypeScript array.
6. Add a dark mode, reading-progress bar on articles, and tags as their own pages.
7. Deploy to Netlify/Vercel and set an absolute site URL for full Open Graph previews.
