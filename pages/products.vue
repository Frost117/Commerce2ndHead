<template>
    <main id="content-body" class="flex container mx-auto">

        <div id="sidebarwrap" class="w-1/6 hidden lg:block">
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

            
                <div class="grid grid-cols-3 gap-4 sm:grid-cols-1">
                    <div v-for="product in filteredProducts" :key="product.id" class="grid grid-rows-1">
                        <Product
                            :id=product.id
                            :name=product.name
                            :properties=product.properties
                            :image=product.properties.heroImage
                            :path=product.route.path
                        />
                        <div class="row-span-1 grid grid-rows-2 items-center" v-if="product.properties.price && product.properties.price.withTax">

                            <span class="row-span-1">{{product.properties.price.withTax}} €</span>
                            
                            <button 
                            @click="handleAddToCart(product, customerRef)"
                            type="button"
                            class="
                            justify-self-center
                            row-span-1
                            text-white 
                            transition-all duration-500 bg-gradient-to-tl 
                            from-purple-600 via-green-500 to-blue-500
                            bg-size-200 bg-pos-0 hover:bg-pos-100
                            font-medium 
                            rounded-lg 
                            text-sm 
                            px-5 
                            py-2.5 
                            text-center                              
                            mb-2                            
                            w-1/2
                            ">
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

const customerRef = useCookie('customerToken')
const productsStore = useProductsStore();
const cartStore = useCartStore();

const loadingProductId = ref<string | null>(null);

const handleAddToCart = async (product: any, customerRef: any) => {
  loadingProductId.value = product.id;
  try {
    await cartStore.addToCart(product, customerRef);
  } catch (error) {
    console.error('Failed to add product to cart:', error);
  } finally {
    loadingProductId.value = null;
  }
};

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
