<template>
  
    <div v-for="(products, id ) in groupedOrderLines" :key="id" class="grid grid-cols-3" id="product">
      
      <HeroImage 
      :url="products[0].properties.heroImage[0].url"
      :width="products[0].properties.heroImage[0].crops[1].width"
      />

      <div class="grid grid-rows-4 w-10/12 ml-4">
        <p class="text-lg font-semibold row-span-1">{{ products[0].name }}</p>      
        <p class="row-span-2">{{ products[0].properties.shortDescription }}</p>
        <p class="content-end">Price: {{ products[0].properties.price.withTax }} €</p>
      </div>

      <p class="content-end">Quantity: {{ products.length }}</p>
      
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

<style scoped>

#product {
  border: 2px solid #ccc rounded;
  padding: 10px;
  margin: 10px;
}

</style>