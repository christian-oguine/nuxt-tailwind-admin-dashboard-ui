// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/icon',
    '@vueuse/nuxt',
    'nuxt-headlessui',
    '@morev/vue-transitions/nuxt',
  ],

  headlessui: { prefix: 'H' },

  app: {
    head: {
      title: 'Nuxt 3 Admin Dashboard',
      link: [
        {rel: "icon", type: "image/x-icon", href: "/icon.svg"},
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        { rel: "preconnect", href: "https://rsms.me" },
      ],
    },
  },
})