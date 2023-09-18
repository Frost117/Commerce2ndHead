<template>

<h1>Here are products.... maybe</h1>

   {{ products }}
   {{ productTest }}
   {{ returnProducts }}

</template>

<script setup lang="ts">
import { useProductsStore } from '@/stores/products';

const myProduct = {
    name:"cool product",
    SKU: "v12"
}

try{
    const productsStore = useProductsStore();
    const products = await productsStore.fetchProducts();

    console.log(products)
}catch(er) {
    console.log("something went wrong. Error: " + er)
}


</script>

<style scoped>

</style>
