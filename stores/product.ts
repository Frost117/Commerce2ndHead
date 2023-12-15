import { defineStore } from 'pinia';
import { type Product } from '@/lib/umbraco/types';


export const useProductStore = defineStore('product',{
    
    state: () => ({
        id: String,
        product:[] as Product[],
    }),

    actions:{
        async getProduct(){
            try{
                const { product } = await $fetch(`/api/product?id=${this.id}`)
                
                this.product = product
            }
            catch(err){
                console.log(err)
            }
        },        
    },
});