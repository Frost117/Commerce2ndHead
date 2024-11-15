<template>
    <div>
    <p class="text-center text-5xl">Order Summary</p>
    <p class="text-center">Subtotal Price: {{ props.subtotalPrice.value.withoutTax }} €</p>
    <p class="text-center">Total Tax: {{ props.subtotalPrice.value.tax }} €</p>
    <p class="text-center">Total Price: {{ props.totalPrice.value.withTax }} €</p>
    </div>  
</template>


<script setup lang="ts">
import type { SubtotalPrice, TotalPrice } from '~/lib/umbraco/types';


const props = defineProps<{
  subtotalPrice: SubtotalPrice,
  totalPrice: TotalPrice,
  totalQuantity: Number
}>()


</script>

<style scoped>
</style>