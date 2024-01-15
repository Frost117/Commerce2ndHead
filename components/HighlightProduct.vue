<template>
  <main>
    <div>
    
        <div v-for="img in image"
        class="relative mt-5 mr-5 mb-5 rounded-md w-96" >
        
          <NuxtLink :to="{path: `product${route}`}">
            <HeroImage 
            :url=img.url
            />
          
          <div class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
            <h3 class="text-xl text-white font-bold">
                {{ name }}
            </h3>
            <p class="mt-2 text-sm text-gray-200">
              +Some description text. Some dummy text here. Welcome to Sling Academy.
            </p>
          </div>
        </NuxtLink>
        </div>
    </div>
  </main>
</template>

<script setup lang="ts">

const props = defineProps({
    image: {
        type: Array,
    },
    route:{
        type: String
    },
    id:{
      type: String},
    name:{
      type: String,
    } 

})


</script>

<style ${2|scoped,|} lang="scss">
</style>
