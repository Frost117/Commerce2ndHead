<template>
    <div id="content-body" class="flex container mx-auto">
        <!--Left sidebar-->
        <div id="sidebarwrap" class="w-2/5">
            <div id="categories" class="pb-10">
                <h4 class="text-2xl text-slate-50 font-semibold mb-2">Categories</h4>
                <ul class="list-none">
                    <li><NuxtLink class="text-base text-slate-50 hover:underline" to="/products">All products</NuxtLink></li>
                    <li><NuxtLink class="text-base text-slate-50 hover:underline">Hoodies</NuxtLink></li>
                    <li><NuxtLink class="text-base text-slate-50 hover:underline">Accessories</NuxtLink></li>
                    <li><NuxtLink class="text-base text-slate-50 hover:underline">Other swag</NuxtLink></li>
                </ul>
            </div>
            <div id="featured">
                <h4 class="text-2xl text-slate-50 font-semibold mb-2">Featured</h4>
            </div>
        </div>
        <!--Main content-->
        <div class="main-content w-full">
            <div class="featured">
                <div class="featured-products">
                    <Products 
                    v-for="product in products"
                    :key="product.id"
                    :Name="product.Name"
                    :Properties="product.tags"
                    @click="() => viewProduct(product.Route.Path)"
                    />
                </div>
            </div>
        </div>
<!--         
        <h1 class="text-2xl">Products</h1>

            <Products 
            v-for="product in products"
            :key="product.id"
            :Name="product.Name"
            @click="() => viewProduct(product.Route.Path)"
            />


        <button @click="loadPreviousPage">Load Previous Page</button>

        <button @click="loadNextPage">Load Next Page</button> -->

    </div>
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

async function viewProduct(productUrl){    
    await navigateTo(`products${productUrl}`)
}

console.log(products)
</script>

<style scoped>
    #content-body{
        min-height: 100vh;
    }
</style>
