<script lang="ts">
import { storeToRefs } from 'pinia';

const productsStore = useProductsStore();



const route = useRoute()

const product = computed(() => {
  return productsStore.products.find(product => {
    return product.Route.Path === route.params.id
  })
})

const props = defineProps<{
    product: Object,
    id: string,
    name: string,
}>()

</script>

<template>
<main>
  <div>
    


  </div>
</main>
</template>

<style >
</style>
