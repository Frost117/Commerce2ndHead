import { defineStore } from 'pinia';
import { Product } from 'lib/umbraco/types';

export const useProductsStore = defineStore('products',{
    state: () => ({
        products:[] as Product[],
        currentPage: 1,
        loading: false,
        error:null
    }),

    getters:{
        
    },

    actions:{
        async fetchProducts(){              
            const headers = {
                "Access-Control-Allow-Origin": "*", 
                'Access-Control-Allow-Headers': '*'
            }
            try{
                const { data, error, pending } = await useFetch(`https://commerceheadless.euwest01.umbraco.io/api/v1/products?page=${this.currentPage}`, {headers})
                const response: any = await data.value
                // this.products = await response.items;
                
                console.log(response.items)
            }catch(er) {
                console.log(er)
            }       
        },

        nextPage(){
            this.currentPage++;
            this.fetchProducts();
        },

        testing() {
            return "just a string"
        }
    }
});