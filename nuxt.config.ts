// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  preset: 'node-server',
  devtools: { enabled: true },
  components:[
    {
      path: '~/components',
      extensions: ['vue']
    }
  ],
  modules:[
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/input.css'
  },
  imports:{
    dirs:['stores']
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
  }
})
