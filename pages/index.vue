<template>
    <main>
        <h1>Welcome to the BlackOps Commerce Store!</h1>
        <h3>Your supplier for Umbraco Swag and other goods!</h3>

        <div class="featured">
            
            <div class="featured-products">

            </div>
        </div>
        
    </main>
</template>

<style>
    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    main {
        min-height: 100vh;
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