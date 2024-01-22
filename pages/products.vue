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

            
                <div class="grid grid-cols-3">
                    <div 
                    v-for="product in filteredProducts" :key="product.Id">
                        <Product
                            :id=product.Id
                            :name=product.Name
                            :properties=product.Properties
                            :image=product.Properties.heroImage
                            :path=product.Route.Path
                        />
                    </div>
                </div>
            
            
            <Button direction="previous" @click="loadPreviousPage()"/>
            <Button direction="next" @click="loadNextPage()"/>
            
        </div> 
        
    </main>
</template>

<script setup lang="ts">

const productsStore = useProductsStore();


const {
  selectedTags,
  uniqueTags,
  filteredProducts,
} = useProducts();

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
