import { defineStore, skipHydrate } from 'pinia';
import { type Cart } from '~/lib/umbraco/types';
import { useStorage } from '@vueuse/core'; 

export const useCartStore = defineStore('cart', () => {
    
    const cart = useStorage<Cart>('cart', {} as Cart);
    const emptyCart = ref(true);

    async function checkCart() {
        if(cart.value.cartNumber) {
            emptyCart.value = false;
        }
    }

    async function addToCart(product: any, customerRef: any, orderId: string) {
        if(emptyCart.value === true) {
            await setCart(orderId, customerRef);
        } 

        if(!cart.value.orderLines) {
            cart.value.orderLines = [];
        }

        cart.value.orderLines.push(product);

        try {
            const response = await $fetch(`/api/cart/`, {
                method: "POST",
                body: {
                    cartNumber: cart.value?.cartNumber,
                    cartId: cart.value?.id,
                    productReference: product.id
                }
            });              
        } catch (error) {
            console.log(error);
        }
    }

    async function setCart(orderId: string, customerRef: string) {
        try {
            const response = await $fetch(`/api/order`, {
                method: "POST",
                body:{ 
                    id: orderId,
                    customerReference: customerRef
                }
            });

            const { order } = await response;

            cart.value = order;
            emptyCart.value = false;
            
        } catch (err) {
            console.log(err);
        }
    }

    function $reset() {
        cart.value = {} as Cart;
        emptyCart.value = true;
    }

    return {
        cart,
        emptyCart,
        $reset,
        checkCart,
        addToCart,
        setCart,
    };
});