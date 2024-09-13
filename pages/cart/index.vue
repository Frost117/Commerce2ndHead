<template>
  <div class="cart">

    <h2>Cart</h2>

    <div v-if="cartStore.initCart === true">

      <div v-for="group in groupedItems" :key="group[0].id">
        <h3>{{ group[0].name }} - {{ group[0].price }}</h3>
        <ul>
          <li v-for="item in group" :key="item.id">
            {{ item.name }} - {{ item.price }}
          </li>
        </ul>
      </div>

      <button @click="clearCart">Clear Cart</button>      
    </div>

    <div v-else>
        no products in cart
    </div>

  </div>
</template>

<script setup lang="ts">
const cartStore = await useCartStore();

const groupedItems = computed(() => {
  const groups = cartStore.cart.orderLines.reduce((acc, item) => {
    (acc[item.id] = acc[item.id] || []).push(item);
    return acc;
  }, {});
  return Object.values(groups);
});
const clearCart = () => {
  cartStore.clearCart();
};

</script>

<style scoped>
.cart {
    border: 1px solid #ccc;
    padding: 10px;
}
</style>