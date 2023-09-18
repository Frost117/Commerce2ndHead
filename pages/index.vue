<template>
    <div>
        <NuxtLayout>
            <header>
                <ul>
                    <li>
                        <NuxtLink to="/">Home | </NuxtLink>
                        <NuxtLink to="/products">Products</NuxtLink>
                    </li>
                </ul>
            </header>
            <h1>Home</h1>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">

const productsStore = useProductsStore();
productsStore.fetchProducts();

</script>