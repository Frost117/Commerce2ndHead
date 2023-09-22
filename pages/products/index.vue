<template>

<h1>Here are products.... Finally</h1>

    <Products 
    v-for="product in products"
    :key="product.id"
    :Name="product.Name"
    />


<button @click="loadPreviousPage">Load Previous Page</button>

<button @click="loadNextPage">Load Next Page</button>


</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

const productsStore = useProductsStore();
const { products } = storeToRefs(productsStore)

async function loadNextPage() {
    productsStore.nextPage();
}

async function loadPreviousPage() {
    productsStore.previousPage();
}


</script>

<style scoped>

</style>
