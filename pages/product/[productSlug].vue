<template>
    <main id="content-body" class="flex container mx-auto">

        <div v-for="image in (content as any).properties.images" :key="image.id"
        class="rounded-md bg-white mr-7 w-2/4"
        >
            <HeroImage
            :url="image.url"
            />
        </div>
        <div class="w-1/4">
            <h1 class="text-2xl">{{ (content as any).name }}</h1>
            <div v-if="(content as any).properties.longDescription && (content as any).properties.longDescription.markup">
                <div v-dompurify-html="(content as any).properties.longDescription.markup" />
            </div>
            <p 
            v-if="(content as any).properties.price && (content as any).properties.price.withTax">
                {{ (content as any).properties.price.withTax }} €
            </p>
            <p 
            v-else="(content as any).properties.price && (content as any).properties.price.withTax">
                Out of stock
            </p>
            <button 
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
        
    </main>
</template>

<script setup lang="ts">

const { highlightedProducts } = useProduct();
const route = useRoute()
const content = await highlightedProducts( (route as any).params.productSlug )

</script>

<style scoped>

</style>
