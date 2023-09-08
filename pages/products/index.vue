<template>


<H1>Here are some fancy products</H1>

<div v-for="product in content.items" :key="product.id">
    {{ product.name }}
</div>

</template>

<script setup lang="ts">

import { useProductsStore } from '@/stores/products';

// Call the fetchProducts action to load the initial data
const productsStore = useProductsStore();

productsStore.fetchProducts();



const response = await useFetch('https://commerceheadless.euwest01.umbraco.io/api/v1/products')

const content = response.data
const error = response.error

</script>

<style >
</style>
