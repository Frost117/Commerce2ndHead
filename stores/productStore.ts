import { acceptHMRUpdate } from "pinia";
import { defineStore } from 'pinia';
import { Product } from 'lib/umbraco/types'




export const productStore = defineStore('productStore',{
    state: () => ({
        products:[] as Product[]
    }),

    actions:{
        async setProducts(){
            const res = await useFetch('/api/products');
            console.log(res)
        }
    }
})



if(import.meta.hot){
    import.meta.hot.accept(acceptHMRUpdate(productStore, import.meta.hot))
}