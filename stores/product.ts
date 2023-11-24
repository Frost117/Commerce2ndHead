import { acceptHMRUpdate, defineStore } from 'pinia';
import { Product } from 'lib/umbraco/types';
import { useProductsStore } from './products';

export const useProductStore = defineStore('product',{
    
    state: () => ({
        id: Number,
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