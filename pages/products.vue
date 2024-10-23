<template>
    <main id="content-body" class="flex container mx-auto">

        <div id="sidebarwrap" class="w-1/6">
            <div id="categories" class="pb-10">
                
                <h4 class="text-2xl text-slate-50 font-semibold mb-2">Categories</h4>
                <ul class="list-none">
                    <li>
                        <input type="checkbox" id="all" value="" v-model="selectedTags" class="mr-2">
                        <label for="all">All products</label>
                    </li>
                    <li v-for="tag in uniqueTags" :key="tag">
                        <input type="checkbox" :id="tag" :value="tag" v-model="selectedTags" class="mr-2">
                        <label :for="tag">{{ tag }}</label>
                    </li>
                </ul>
            </div>
        </div>

        <!--Main content-->
        <div class="main-content w-full">

            <h1 class="text-2xl text-slate-50 font-semibold mb-2">Products</h1>

            
                <div class="grid grid-cols-3 gap-4">
                    <div v-for="product in filteredProducts" :key="product.id">
                        <Product
                            :id=product.id
                            :name=product.name
                            :properties=product.properties
                            :image=product.properties.heroImage
                            :path=product.route.path
                        />
                        <div v-if="product.properties.price && product.properties.price.withTax">
                        <span>{{product.properties.price.withTax}} €</span>
                        <button 
                        @click="cartStore.addToCart(product)"
                        type="button"
                        class="
                        text-white 
                        bg-gradient-to-br 
                        from-purple-600 
                        to-blue-500 
                        hover:bg-gradient-to-bl 
                        focus:ring-4 
                        focus:outline-none 
                        focus:ring-blue-300 
                        dark:focus:ring-blue-800 
                        font-medium 
                        rounded-lg 
                        text-sm 
                        px-5 
                        py-2.5 
                        text-center 
                        me-2 
                        mb-2
                        m-5
                        w-1/2">
                        Add to cart
                        </button>
                    </div>
                    <div v-else="product.properties.price">
                        <span>Out of Stock</span>
                    </div>
                    </div>
                </div>
            
            
            <Button direction="previous" @click="loadPreviousPage()" />
            <Button direction="next" @click="loadNextPage()" />
            
        </div> 
        
    </main>
</template>

<script setup lang="ts">

const productsStore = useProductsStore();
const cartStore = useCartStore();

const {
  selectedTags,
  uniqueTags,
  filteredProducts,
} = useFilters();


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
