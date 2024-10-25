<template>
    <div>
        <div class="grid grid-flow-row-dense grid-cols-4 items-center">
            <NuxtImg
            :src="'https://commerceheadless.euwest01.umbraco.io/' + product.properties.heroImage[0].url"
            :width="product.properties.heroImage[0].crops[0].width"
            class="col-span-2"
            />

            <div class="col-span-2 grid grid-cols-subgrid grid-col-3">
                <h1 class="text-3xl col-span-1 mb-5">
                    {{ product.name }}
                </h1>

                <div class="col-span-2 mb-5"
                v-if="product.properties.longDescription && product.properties.longDescription.markup">
                    <div v-dompurify-html="product.properties.longDescription.markup" />
                    
                </div>

                <div 
                v-if="product.properties.price && product.properties.price.withTax">
                    <p class="text-2xl">{{ product.properties.price.withTax }} €</p>
                    
                    <button
                        type="button" 
                        @click="cartStore.addToCart(product, customerRef as string, orderId)"
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
                        mt-2 
                        mb-2
                        w-1/2">
                        Add to cart
                    </button>

                </div>
                
                <p v-else="(product as any).properties.price && (product as any).properties.price.withTax">
                    Out of stock
                </p>
                
            </div>
        </div>
        <div v-if="product.properties.images.length > 1">
        <UCarousel v-slot=" { item }" :items="product.properties.images" indicators>
            <NuxtImg :src="'https://commerceheadless.euwest01.umbraco.io/' + item.url" :height="item.height"/>
        </UCarousel>
        </div>
    </div>
</template>


<script setup lang="ts">


const { highlightedProducts } = useProduct();
const route = useRoute()
const product = await highlightedProducts( (route as any).params.productSlug )
const cartStore = await useCartStore()

const orderId = useGuid()();
const customerRef = useCookie('customerToken')

</script>

<style scoped>

</style>
