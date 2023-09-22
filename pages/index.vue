<template>
    <main>
        <h1>Welcome to the BlackOps Commerce Store!</h1>
        <h3>Your supplier for Umbraco Swag and other goods!</h3>

        <div class="featured">
            <h2>Check some of our featured products</h2>
            <div class="featured-products">
                <Products 
                v-for="product in products"
                :key="product.id"
                :name="product.name"
                />
            </div>
        </div>
        
    </main>
</template>

<style>
    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        background-image: linear-gradient(to right top, #a40cf5, #6e2dd2, #4031ab, #1d2b80, #0c2154);
    }
    main {
        min-height: 100vh;
        height: 100%;
        
    }

    main > h1, h3 {
        text-align: center;
        color: white;
        /* text-shadow: 2px 3px 0px #898999; */
        font-family: 'Roboto', sans-serif;
    }

</style>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

const productsStore = useProductsStore();
const { products } = storeToRefs(productsStore)

</script>