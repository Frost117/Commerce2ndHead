<template>
      <header class="bg-black">
                <!-- Left -->
            <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <ul class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row">
                    <li class="mb-4 lg:mb-0 lg:pr-2"><NuxtLink to="/">Home</NuxtLink></li>
                    <li class="nmb-4 lg:mb-0 lg:pr-2"><NuxtLink to="/products">Collections</NuxtLink></li>
                </ul>

                <!-- Right -->
                <Cart />
            </nav>
            
            
        
      </header>
      <!--Output-->
      
      
        <slot />
      
  </template>


<script setup lang="ts">
import { useProductsStore } from '@/stores/products';

const productsStore = useProductsStore()

async function retrieveProducts() {
    await productsStore.fetchProducts();
}
await retrieveProducts()

</script>

<style lang="css">


    
</style>