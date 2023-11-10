<template>            
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">        
        <div v-for="img in image" >
            <HeroImage 
            :image="img"
            :Url=img.Url
            />
        </div>
        <div class="px-5 pb-5">
            
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {{ name }}
                </h5>
            
            
            
            <div class="flex items-center justify-between mb-2">
                <p class="text-white">{{ properties.shortDescription }}</p>
                <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            </div>
            
            <a href="#" 
            class=
            "text-white
             bg-blue-700
              hover:bg-blue-800 
              focus:ring-4 
              focus:outline-none
            focus:ring-blue-300
              font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
      


    
</template>

<script setup lang="ts">
import { Properties, Image } from '@/lib/umbraco/types';

const props = defineProps<{
    id: string,
    name: string,
    properties: Properties,
    image: Image[],
    path: string    
}>()


</script>

<style scoped>

</style>