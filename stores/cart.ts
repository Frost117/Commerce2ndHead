import { defineStore } from 'pinia';
import type { Cart } from '@/lib/umbraco/types'; // Import the 'Cart' type from the appropriate module using type-only import


export const useCartStore = defineStore('cart', {

    state: () => ({
        cart: {} as Cart,
    }),
    
      persist:{
        storage: persistedState.localStorage
      },

      actions: {
        async addToCart(product: any) {
          this.cart.orderLines.push(product);         
          
          try {
            const response = await $fetch(`/api/cart/`, {
              method: "POST",
              body: {
                cartNumber: this.cart.cartNumber,
                cartId: this.cart.id,
                productReference: product.id
              }
            });
       
          } catch (error) {
            console.log(error);
          }
        },
        /*
        async setCart(orderId: string, customerRef: string) {
            try {
              const response = await fetch(`/api/order`, {
                method: "POST",
                body:{ 
                  id: orderId,
                  customerReference: customerRef
                }
              })
    
              const { order } = await response.json()
      
              this.cart = order
            }
            catch (err) {
                console.log(err)
          }
        }*/
      }
});
/*
cartStore.$subscribe((mutation, state) => {
  if (!isCallbackTriggered && mutation.type === 'addToCart') {
    console.log('Added to cart:', state.cart);

    isCallbackTriggered = true;
  }
  
});
*/