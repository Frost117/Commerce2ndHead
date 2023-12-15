<template>
    <main id="content-body" class="flex container mx-auto">
        <!--Main content-->
        {{ content }}
    </main>
</template>

<script setup lang="ts">
const { highlightedProducts } = useProduct();
const route = useRoute()
const content = await highlightedProducts( route.params.productSlug )

</script>

<style scoped>
    #content-body{
        min-height: 100vh;
    }
</style>
