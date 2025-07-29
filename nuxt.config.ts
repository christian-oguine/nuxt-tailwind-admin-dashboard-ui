// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@vueuse/nuxt',
    'nuxt-headlessui',
    '@morev/vue-transitions/nuxt',
  ],

  tailwindcss: { exposeConfig: true },
  headlessui: { prefix: 'H' },

  app: {
    head: {
      title: 'Nuxt 3 + Tailwind CSS + Headless UI',
      link: [
        {rel: "icon", type: "image/x-icon", href: "/icon.svg"},
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        { rel: "preconnect", href: "https://rsms.me" },
      ],
    },
  },
})