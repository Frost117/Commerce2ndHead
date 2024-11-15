<template>            
    <div v-for="img in image" >
        <HeroImage
        :image="img"
        :url=img.url
        :width="img.crops[0].width"
        />   
    </div>
    
    <div class="properties w-[350px] h-1/2">
    
        <p class="text-2xl">
            <NuxtLink :to="productUrl">
                {{ name }} 
            </NuxtLink>
        </p>
        
        <p>{{ properties.shortDescription }}</p>
              
        
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

const productUrl = computed(() => `/product${props.path}`);
</script>

<style scoped>

</style>