<template>
    <div class="container mx-auto">
                
                            
        <h1>Welcome to the BlackOps Commerce Store!</h1>
        <h3>Your supplier for Umbraco Swag and other goods!</h3>

        <br />

        <div v-for="products in page.properties.productHighlight" :key="product.Id">
            
            <div v-for="product in products">     
                
                <HighlightProduct
                    :id=product.content.id
                    :name=product.content.properties.productName
                    :route=product.content.properties.productLink.route.path 
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