import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {

    state: () => ({
        cart:[]
    }),
    actions: {
        
        initCart() {
            this.cart = [];
        },

        async setCart(orderId, customerRef) {
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
        }
    },
});
