<template>
    <ClientOnly>
        <NuxtLink to="/cart">
            <ShoppingBagIcon class="h-6 w-6 text-white" />
        </NuxtLink>

        <div v-if="store.cart.orderLines && store.cart.orderLines.length > 0">
            <p> {{ store.cart.orderLines.length }}</p>
        </div>
    </ClientOnly>

</template>

<script setup lang="ts">
import { ShoppingBagIcon } from '@heroicons/vue/24/outline';

const store = await useCartStore();

async function retrieveCart() {
    await store.checkCart();
}

retrieveCart()

</script>

<style lang="css">
/* Add any necessary styles here */
</style>