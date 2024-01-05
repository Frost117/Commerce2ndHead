<template>
    <div class="container mx-auto">
                
                            
        <h1>Welcome to the BlackOps Commerce Store!</h1>
        <h3>Your supplier for Umbraco Swag and other goods!</h3>

        <br />

        <div v-for="products in page.properties.productHighlight">
            
            <div v-for="product in products" :key="product.Id">     
                
                <HighlightProduct
                    :id=product.content.id
                    :name=product.content.properties.productName
                    :route=product.content.properties.productLink.route.path
                    :image=product.content.properties.productHighlightImage
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