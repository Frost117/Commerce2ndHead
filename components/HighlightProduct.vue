<template>
  <div>
    
    
      
        

        <div v-for="img in image" >
          {{ name }}
          <NuxtLink :to="{path: `product${route}`}">
            <HeroImage 
            :image="img"
            :Url=img.url
            />
          </NuxtLink>        
        </div>
        

  </div>
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
