<template>

<h1>Here are products.... maybe</h1>

   {{ products }}

</template>

<script setup lang="ts">
import { useProductsStore } from '@/stores/products';


    const productsStore = useProductsStore();
    const products = await productsStore.fetchProducts();

    console.log(products)

</script>

<style scoped>

</style>
