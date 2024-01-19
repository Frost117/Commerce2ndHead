<template>            
    <div class="product">   
        
        <div v-for="img in image" >
            <HeroImage
            :image="img"
            :url=img.Url
            class="h-96"
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
            
            <UButton>
                Add to cart
            </UButton>
            
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