<template>
  <div class="cart">

    <h2>Cart</h2>

    <div v-if="!cartStore.emptyCart">
      <OrderLines 
      :orderLines="cartStore.cart.orderLines"
      />

      <button @click="cartStore.$reset">Clear Cart</button>    

    </div>

    <div v-else>
        no products in cart
    </div>
    
  </div>

</template>


<script setup lang="ts">

const cartStore = useCartStore();

</script>



<style scoped>
.cart {
    border: 1px solid #ccc;
    padding: 10px;
}
</style>