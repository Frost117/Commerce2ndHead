<template>
  <div>
    <NuxtLink :to="{path: `product${route}`}">
        {{ name }}
    </NuxtLink>        
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    id: string,
    name: string,
    route:string
}>()

</script>

<style ${2|scoped,|} lang="scss">
</style>
