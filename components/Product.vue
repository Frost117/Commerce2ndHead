<template>            
    <div class="product">   
        
        <div v-for="img in image" >
            <HeroImage
            :image="img"
            :url=img.Url
            class="h-full"
            />
            
        </div>
        <div class="h-full bg-slate-400">
            
            <h5 >
                <NuxtLink :to="`/product${path}`">{{ name }}</NuxtLink>
            </h5>
            
            <p>{{ properties.shortDescription }}</p>
            <div v-if="properties.price && properties.price.WithTax">
                <span>{{properties.price.WithTax}} €</span>
            </div>
            <div v-else="properties.price">
                <span>Out of Stock</span>
            </div>
            
            <button
            type="button" 
            class="
            text-white 
            bg-gradient-to-br 
            from-purple-600 
            to-blue-500 
            hover:bg-gradient-to-bl 
            focus:ring-4 
            focus:outline-none 
            focus:ring-blue-300 
            dark:focus:ring-blue-800 
            font-medium 
            rounded-lg 
            text-sm 
            px-5 
            py-2.5 
            text-center 
            me-2 
            mb-2
            m-5
            w-1/2">
            Add to cart
            </button>
            
        </div>
    </div>
      


    
</template>

<script setup lang="ts">
import { type Image, type Properties } from '@/lib/umbraco/types';

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