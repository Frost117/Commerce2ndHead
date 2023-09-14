<template>

<h1>Here are products.... maybe</h1>

<div v-for="product in products">
    {{ product.name }}
</div>

<button @click="loadPreviousPage">Load Previous Page</button>

<button @click="loadNextPage">Load Next Page</button>


</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

const productsStore = useProductsStore();
const { products } = storeToRefs(productsStore)

productsStore.fetchProducts();

async function loadNextPage() {
    productsStore.nextPage();
}

async function loadPreviousPage() {
    productsStore.previousPage();
}

</script>

<style scoped>

</style>
