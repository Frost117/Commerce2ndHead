import type { PiniaPluginContext, StateTree, SubscriptionCallbackMutation } from "pinia"


export default defineNuxtPlugin(({ $pinia }) => {
    $pinia.use(CartPiniaPlugin)
})

async function CartPiniaPlugin(context: PiniaPluginContext) {
    if(context.store.$id === "cart"){
        if (!process.server){
            const defaultCartFromStorage = localStorage.getItem('cart')
            context.store.$state.cart = defaultCartFromStorage
        }

        let defaultEmptyCart = undefined 

        context.store.$subscribe((event: SubscriptionCallbackMutation<StateTree>) =>{
            if((event.events as any).key === "cart"){
                localStorage.setItem('cart', (event.events as any).newValue || false)
            }
        })
    }

    return 
}