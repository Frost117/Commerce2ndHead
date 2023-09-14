import { defineStore } from 'pinia';
import { Product } from 'lib/umbraco/types';


export const useProductsStore = defineStore('products',{
    state: () => ({
        products:[],
        currentPage: 1
    }),

    actions:{
        async fetchProducts(){              

                const { data } = await useFetch(`https://commerceheadless.euwest01.umbraco.io/api/v1/products?page=${this.currentPage}`)

                const response = await data.value;
                const products = response.items;
                
                this.products = products;
            
        },

        nextPage(){
            this.currentPage++;
            this.fetchProducts();
        },
        previousPage(){
            this.currentPage--;
            this.fetchProducts();
        }
    }
});

export function setupProductsStore() {
    return useProductsStore();
  }