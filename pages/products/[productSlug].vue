<template>
    <div>
        {{ $route.params.productSlug }}
    </div>
</template>


<script setup lang="ts">

    const route = useRoute();
    const { productSlug } = route.params
    const product = 

</script>