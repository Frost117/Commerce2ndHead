<template>
  <div class="cart">

    <div v-if="!cartStore.emptyCart" class="grid grid-cols-2 place-content-center">
    <div class="orderlines">
      <OrderLines 
      :orderLines="cartStore.cart.orderLines"
      />
      <button @click="cartStore.$reset"
      class=
        "text-white 
        transition-all duration-500 bg-gradient-to-tl 
        from-pink-500 via-yellow-500 to-red-500
        bg-size-200 bg-pos-0 hover:bg-pos-100
        font-medium 
        rounded-lg 
        text-sm 
        px-5 
        py-2.5 
        text-center 
        me-2 
        mb-2
        m-5
        w-1/3">
        Clear Cart
      </button> 
    </div>
      
    <div class="ml-7 mt-2 content-center h-2/5 ">
      <OrderSummary
      :totalPrice="cartStore.cart.totalPrice"
      :totalQuantity="cartStore.cart.totalQuantity"
      :subtotalPrice="cartStore.cart.subtotalPrice"
      />   
    </div>
      

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

</style>