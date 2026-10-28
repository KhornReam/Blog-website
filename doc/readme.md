# PROJECT PROMPT: WANDER WITH REAM — MODERN PERSONAL TRAVEL BLOG

## 1. Project Overview

Act as a senior Nuxt.js developer, Vue.js expert, Tailwind CSS specialist, and professional UI/UX designer.

Build a complete, modern, responsive personal travel blog website named **Wander With Ream**.

I am a beginner learning Nuxt.js, Vue.js, and Tailwind CSS. I want a real project that I can understand, maintain, improve, and eventually add to my developer portfolio.

The website is my personal travel journal. I want to share my adventures, travel experiences, photography, food discoveries, mountain trips, rivers, waterfalls, forests, countryside journeys, and beautiful places in Cambodia and other countries.

Do not only generate a design or a project plan. Build the actual working website with complete code and explain how to run it.

## 2. Technology Stack

Use these technologies:

- Nuxt 3 or a compatible current stable Nuxt version.
- Vue 3 with the Composition API.
- TypeScript where appropriate, with beginner-friendly explanations.
- Tailwind CSS using the official integration compatible with the selected Nuxt version.
- Nuxt file-based routing.
- Vue components for reusable UI.
- Local TypeScript or JSON data for blog posts and destinations.
- Nuxt Image only if its setup is necessary and properly configured.
- Lucide icons or another lightweight, compatible icon library.

Use compatible package versions. Do not mix incompatible Nuxt, Vue, Tailwind CSS, or plugin configurations.

Start with a simple working version. Avoid unnecessary dependencies, complex state management, and backend infrastructure until they are actually needed.

## 3. Brand Identity

Website name: Wander With Ream

Tagline: Find your way. Feel the journey. Taste the world.

Brand personality:
- Peaceful
- Adventurous
- Natural
- Friendly
- Personal
- Modern
- Authentic

Visual direction:
Create a premium outdoor travel magazine aesthetic with large landscape photography, elegant typography, generous whitespace, clean cards, subtle animations, and beautiful layouts.

Suggested color palette:
- Forest green: #234D3C
- Deep forest: #17382C
- Warm cream: #F8F6F0
- Soft beige: #EAE5D9
- Charcoal: #252923
- Muted green: #82947C

Use natural colors consistently. Avoid excessive gradients, bright neon colors, overly rounded cards, unnecessary shadows, and generic dashboard styling.

Typography:
- Use a refined display font for large headings.
- Use a highly readable sans-serif font for body text.
- Maintain clear visual hierarchy and comfortable line spacing.

## 4. Main Navigation

Create a responsive navigation bar with:
- Logo: Wander With Ream
- Home
- Destinations
- Adventures
- Food & Drink
- Travel Stories
- About Me

Include:
- Desktop navigation
- Mobile hamburger menu
- Active navigation states
- A clear Explore button
- A search icon or search input

The mobile menu must open and close correctly and remain keyboard accessible.

## 5. Home Page

Create a visually impressive homepage.

### A. Hero Section

Use a large, immersive landscape photograph featuring green mountains, mist, a river, or a peaceful natural environment.

Display:
Small label: MY TRAVEL JOURNAL

Main heading:
"Somewhere Between Mountains, Rivers & Memories."

Description:
"Exploring beautiful places, discovering local flavors, and collecting stories along the way."

Buttons:
- Explore My Adventures
- Read My Stories

Add a subtle scroll indicator.

Make the hero responsive, with readable text and accessible contrast over the photograph.

### B. Featured Destinations

Display an attractive grid of destination cards.

Each card should include:
- Destination image
- Destination name
- Province or country
- Short description
- Category
- Link to destination details

Include sample Cambodian destinations such as Kampot, Mondulkiri, Ratanakiri, and the Cardamom Mountains. Treat sample travel descriptions as demonstration content and avoid inventing personal experiences.

### C. Latest Travel Stories

Display the latest blog articles using reusable article cards.

Each card includes:
- Cover image
- Category badge
- Article title
- Short excerpt
- Publication date
- Estimated reading time
- Read More link

Example article titles:
- A Quiet Morning in the Mountains
- Following the Sound of Flowing Water
- Discovering Cambodia Beyond the City
- A Weekend Road Trip Through Green Countryside

### D. Food & Local Flavors

Create a beautiful food section featuring Khmer food, local markets, street food, traditional restaurants, and dishes discovered during trips.

Example topics:
- Cambodian fish amok
- Nom banh chok
- Grilled fish beside the river
- Local market breakfasts
- Regional specialties and travel snacks

Each food card should link to an article or category page.

### E. Travel Philosophy

Create a short editorial section with this message:

"Travel is not only about reaching a destination. It is about the quiet roads, the people we meet, the food we share, and the memories we bring home."

### F. Newsletter Section

Create a simple newsletter UI with:
- Heading: Stories From the Road
- Email input
- Subscribe button

Validate the email field. If no email service or backend is configured, clearly label the feature as a demo and do not pretend subscriptions have been saved.

### G. Footer

Include:
- Brand logo and tagline
- Quick links
- Travel categories
- Social media links with configurable placeholder URLs
- Copyright notice
- Back-to-top link

## 6. Destinations Page

Route: /destinations

Features:
- Page title and introductory text
- Responsive destination grid
- Search destinations by name
- Filter by region or category
- Destination images
- Location information
- Links to destination detail pages

Use query parameters when useful so search and filters can be shared through a URL.

## 7. Adventures Page

Route: /adventures

Organize travel experiences into:
- Mountains
- Rivers and waterfalls
- Forests and nature
- Countryside road trips
- Camping and outdoor activities

Provide reusable category filters and visually attractive image cards.

## 8. Food & Drink Page

Route: /food

Features:
- Editorial food photography
- Khmer food and local specialties
- Street food discoveries
- Restaurant and market stories
- Search and category filters
- Links to individual food articles

Never invent restaurant reviews or claim I visited a location when the content is sample data.

## 9. Blog Listing Page

Route: /blog

Features:
- Featured article
- Latest posts
- Search by title or content
- Category filters
- Sort by newest
- Pagination or Load More
- Responsive article cards

Initially, load articles from a local data file instead of requiring a database.

## 10. Blog Article Detail Page

Route: /blog/[slug]

Create