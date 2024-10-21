<template>            
    <div v-for="img in image" >
        <HeroImage
        :image="img"
        :url=img.url
        />   
    </div>
    <div class="properties w-[350px]">

        
        <p class="text-2xl">
            <NuxtLink :to="`/product${path}`">{{ name }}</NuxtLink>
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

const emit = defineEmits(['add-to-cart']);

const handleAddToCart = () => {
    emit('add-to-cart', {id: props.id})
}

</script>

<style scoped>

</style>