<template>
    <main id="content-body" class="flex container mx-auto">

        <div v-for="image in (product as any).properties.images" :key="image.id"
        class="rounded-md bg-white mr-7 w-2/4"
        >
            <HeroImage
            :url="image.url"
            />
        </div>
        <div class="w-1/4">
            <h1 class="text-2xl">{{ (product as any).name }}</h1>
            <div v-if="(product as any).properties.longDescription && (product as any).properties.longDescription.markup">
                <div v-dompurify-html="(product as any).properties.longDescription.markup" />
                
            </div>
            <div 
            v-if="(product as any).properties.price && (product as any).properties.price.withTax">
                <p>{{ (product as any).properties.price.withTax }} €</p>
                <button
            type="button" 
            @click="cartStore.addToCart(product, customerRef, orderId)"
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
            <p 
            v-else="(product as any).properties.price && (product as any).properties.price.withTax">
                Out of stock
            </p>
            
        </div>
        
    </main>
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
