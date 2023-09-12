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

                const { data, error, pending } = await useFetch(`https://commerceheadless.euwest01.umbraco.io/api/v1/products?page=${this.currentPage}`)

                const response = await data.value
                console.log(response, error)
                this.products = await response.items;
            
        },

        nextPage(){
            this.currentPage++;
            this.fetchProducts();
        }
    }
});