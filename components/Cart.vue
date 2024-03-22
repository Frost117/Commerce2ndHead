<template>
    <ClientOnly>
        <NuxtLink to="/cart">
            <ShoppingBagIcon class="h-6 w-6 text-white" />
        </NuxtLink>
        <div v-if="cartStore.cart.orderLines && cartStore.cart.orderLines.length > 0">
            <p> {{ cartStore.cart.orderLines.length }}</p>
        </div>
    </ClientOnly>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
import { ShoppingBagIcon } from '@heroicons/vue/24/outline';

const cartStore = await useCartStore();


</script>

<style lang="css">
/* Add any necessary styles here */
</style>