<template>
    <ClientOnly>
        <NuxtLink to="/cart">
        <div class="flex justify-center">
            <ShoppingBagIcon class="h-6 w-6 text-white" />
        

            <p v-if="amount && amount.length > 0">
                {{ amount.length }}
            </p>
        </div>
        </NuxtLink>
    </ClientOnly>

</template>

<script setup lang="ts">
import { ShoppingBagIcon } from '@heroicons/vue/24/outline';

const props = defineProps<{
    amount: Array<{}>
}>()

</script>

<style lang="css">
/* Add any necessary styles here */
</style>