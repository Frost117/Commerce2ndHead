// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  preset: 'node-server',

  components:[
    {
      path: '~/components',
      extensions: ['vue']
    }
  ],

  modules:[
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/ui',
    'nuxt-typed-router'
  ],

  tailwindcss: {
    cssPath: '~/assets/css/input.css'
  },

  imports:{
    dirs:['stores']
  },

  runtimeConfig:{
    baseUrl:"https://commerceheadless.euwest01.umbraco.io/",
    appSecret: "3vC9B7sesuzXflUgYP3Z1lbGdzeEgDV8",
    commerceStore: "bdf1ea22-4ea0-4381-950d-01894f71b54b"
  },

  pinia:{
    autoImports: [
      // automatically imports `defineStore`
      ['defineStore', 'acceptHMRUPdate'],// import { defineStore } from 'pinia'
    ],
  },

  //Define the html <head> element on every page https://nuxt.com/docs/api/configuration/nuxt-config#head
  app: {
    head: {
      title: "BlackOps Commerce"
    }
  },

  routeRules: {
    '/api/v1/**': {
        proxy: { to: "http://127.0.0.1:3000/api/v1/**", },
    }
  },

  compatibilityDate: '2024-09-24',
})