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
              {{description}}
            </p>
          </div>
        </NuxtLink>
        </div>
    </div>
  </main>
</template>

<script setup lang="ts">

import { type ProductHighlightImage, type Properties } from '@/lib/umbraco/types';

const props = defineProps<{
    id: string,
    image: ProductHighlightImage,
    name: ProductHighlightImage["name"],
    description: Properties["shortDescription"],
    route: string,
}>()




</script>

<style ${2|scoped,|} lang="scss">
</style>
