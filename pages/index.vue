<template>
    <div>
        <div v-for="products in page.properties.productHighlight">
            
            <div v-for="product in products" :key="product.content.id">     
                
                <HighlightProduct
                    :id=product.content.id
                    :name=product.content.properties.productName
                    :route=product.content.properties.productLink.route.path
                    :image=product.content.properties.productHighlightImage
                    :description=product.content.properties.productDescription
                    :url=product.content.properties.productLink.route.path
                />
            </div>
            
        </div>
        
        
    </div>
</template>

<style>

</style>

<script setup lang="ts">
const { highlightedProducts } = useProduct();
const page = await highlightedProducts('home')

</script>