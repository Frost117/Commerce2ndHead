import type { PiniaPluginContext, StateTree, SubscriptionCallbackMutation } from "pinia"


export default defineNuxtPlugin(({ $pinia }) => {
    $pinia.use(CartPiniaPlugin)
})

async function CartPiniaPlugin(context: PiniaPluginContext) {
    if(context.store.$id === "cart"){
        if (!import.meta.server){

            const defaultCartFromStorage = localStorage.getItem("cart")
            
            const cartFromStorage = JSON.parse(defaultCartFromStorage || "{}")

            context.store.$state.cart = cartFromStorage
        }

        let defaultEmptyCart = undefined 

        context.store.$subscribe((event: SubscriptionCallbackMutation<StateTree>) =>{
            if((event.events as any).key === "cart"){
                localStorage.setItem('cart', JSON.stringify((event.events as any).newValue || false))
            }
        })
    }

    return 
}