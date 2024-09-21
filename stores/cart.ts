import { defineStore, skipHydrate } from 'pinia';
import { type Cart } from '~/lib/umbraco/types';
import { useStorage } from '@vueuse/core'; 
import { ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
    const cart = useStorage('cart', ref({} as Cart));

    const initCart = ref(false);

    async function addToCart(product: any, customerRef: any, orderId: string) {
        if(!initCart.value) {
            await setCart(orderId, customerRef);
        } 

        cart.value?.orderLines.push(product);

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
            const response = await fetch(`/api/order`, {
                method: "POST",
                body:{ 
                    id: orderId,
                    customerReference: customerRef
                }
            });

            const { order } = await response.json();

            cart.value = order;
            initCart.value = true;
        } catch (err) {
            console.log(err);
        }
    }

    function clearCart() {
        cart.value = {};
        initCart.value = false;
    }

    return {
        cart,
        initCart,
        clearCart,
        addToCart,
        setCart,
    };
});