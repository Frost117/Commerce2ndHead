<template>
    <main>
        <h1>Here are products.... Finally</h1>

            <Products 
            v-for="product in products"
            :key="product.id"
            :Name="product.Name"
            @click="() => viewProduct(getProductById(product.id))"
            />


        <button @click="loadPreviousPage">Load Previous Page</button>

        <button @click="loadNextPage">Load Next Page</button>

    </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

const productsStore = useProductsStore();
const { products } = storeToRefs(productsStore)
const { getProductById } = storeToRefs(productsStore)

async function loadNextPage() {
    productsStore.nextPage();
}

async function loadPreviousPage() {
    productsStore.previousPage();
}


async function viewProduct(productUrl){
    
    await navigateTo({
        path: `products${productUrl.Route.Path}`,

        query: {
            name: productUrl.Name,
            shortDescription: productUrl.Properties.shortDescription
        }
    })
    
}




</script>

<style scoped>

</style>
