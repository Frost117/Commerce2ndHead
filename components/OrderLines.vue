<template>
  <div>
    <div v-for="(products, id ) in groupedOrderLines" :key="id">
      
      {{ products[0].name }}
      {{ products.length }}

      <div v-for="product in products" :key="product.id">
        {{ product.name }}
        {{ product.properties.price.withTax }}
        <HeroImage :url="product.properties.heroImage[0].url" />
      </div>
      
    </div>
    

  </div>
</template>

<script setup lang="ts">

import { type OrderLines } from '~/lib/umbraco/types';

const props = defineProps<{
  orderLines: OrderLines[]
}>()

const groupedOrderLines = computed(() => {
  return props.orderLines.reduce((acc, product) => {
    if (!acc[product.id]) {
      acc[product.id] = [];
    }
    acc[product.id].push(product);
    return acc;
  }, {} as Record<string, OrderLines[]>);
});

</script>