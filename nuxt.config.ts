// Tailwind CSS v4 is integrated through its official Vite plugin.
// The older @nuxtjs/tailwindcss module pins Tailwind 3, so we wire it up manually.
import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Global stylesheet (Tailwind import + brand theme tokens live here).
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  // With pathPrefix off, `components/blog/BlogCard.vue` is used as <BlogCard>
  // instead of <blog-BlogCard>, which reads more naturally for a beginner.
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Wander With Ream — Personal Travel Journal',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Wander With Ream is a personal travel journal about mountains, rivers, forests, countryside roads and local food in Cambodia and beyond.',
        },
        { name: 'theme-color', content: '#234D3C' },
        { property: 'og:site_name', content: 'Wander With Ream' },
        {
          property: 'og:type',
          content: 'website',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap',
        },
      ],
    },
  },
})
