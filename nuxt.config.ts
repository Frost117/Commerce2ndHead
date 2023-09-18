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
    '@pinia/nuxt'
  ],
  imports:{
    dirs:['stores']
  },
  pinia:{
    autoImports: [
      // automatically imports `defineStore`
      ['defineStore', 'acceptHMRUPdate'],// import { defineStore } from 'pinia'
    ],
  }
})
