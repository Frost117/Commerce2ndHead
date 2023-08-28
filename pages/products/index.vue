<template>


Here are products


<div v-for="product in products.items"> {{ product.name }}</div>

</template>

<script setup lang="ts">

/*const products = useFetch('/api/products')*/


import { storeToRefs } from 'pinia';

const productsStore = useProductStore();

productsStore.setProducts()

const {products} = storeToRefs(productsStore)



</script>

<style >
</style>
