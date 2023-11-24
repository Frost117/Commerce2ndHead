<template>
    <main id="content-body" class="flex container mx-auto">
        <!--Left sidebar-->
        <div id="sidebarwrap" class="w-2/5">
            <div id="categories" class="pb-10">
                <h4 class="text-2xl text-slate-50 font-semibold mb-2">Categories</h4>
                <ul class="list-none">
                    <li><NuxtLink class="text-base text-slate-50 hover:underline" to="/products">All products</NuxtLink></li>
                    <li><NuxtLink class="text-base text-slate-50 hover:underline" to="/products">Hoodies</NuxtLink></li>
                    <li><NuxtLink class="text-base text-slate-50 hover:underline" to="/products">Accessories</NuxtLink></li>
                    <li><NuxtLink class="text-base text-slate-50 hover:underline" to="/products">Other swag</NuxtLink></li>
                </ul>
            </div>
            <div id="featured">
                <h4 class="text-2xl text-slate-50 font-semibold mb-2">Featured</h4>
            </div>
        </div>
        <!--Main content-->
        <div class="main-content w-full">
            <h1 class="text-2xl">Products</h1>
            <div class="featured">
                <div class="featured-products flex flex-wrap">
                    <div v-for="product in products" :key="product.Id">
                            <Product class="m-2"
                                :id=product.Id
                                :name=product.Name
                                :properties=product.Properties
                                :image=product.Properties.heroImage
                                :path=product.Route.Path
                            />
                    </div>
                </div>
            </div>
            <button @click="loadPreviousPage" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Previous
            </span>
            </button>
            <button @click="loadNextPage" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Next
            </span>
            </button>
        </div> 
    </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

const productsStore = useProductsStore();
const { products } = storeToRefs(productsStore)


function loadNextPage() {
    productsStore.nextPage();
}

function loadPreviousPage() {
    productsStore.previousPage();
}

</script>

<style scoped>
    #content-body{
        min-height: 100vh;
    }
</style>
