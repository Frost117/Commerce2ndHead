import { acceptHMRUpdate } from 'pinia';
import { defineStore } from 'pinia';
import { Product } from 'lib/umbraco/types';


interface ProductState{
    products: Product[];
    loading: boolean;
}


export const useProductStore = defineStore('products',{
    state: (): ProductState => ({
        products:[],
        loading: false
    }),

    actions:{
        async setProducts(){
            this.loading = true
            const data = await $fetch('/api/products')

            this.products = data

            console.log(this.products)
        }
    }
})



if(import.meta.hot){
    import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
}