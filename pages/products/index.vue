<template>
    <main>
        <h1>Here are products.... Finally</h1>

        <div class="container mx-auto">

            <Product 
                v-for="product in products"
                :id=product.id
                :name=product.Name
                :properties=product.Properties
                :heroImage=product.Properties.heroImage
            />

        </div>
        <!--
        <button @click="loadPreviousPage">Load Previous Page</button>

        <button @click="loadNextPage">Load Next Page</button>
            -->
    </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

const productsStore = useProductsStore();
const { products } = storeToRefs(productsStore)

/*
export async function loadNextPage() {
    productsStore.nextPage();
}

export async function loadPreviousPage() {
    productsStore.previousPage();
}
*/

</script>

<style scoped>

</style>
