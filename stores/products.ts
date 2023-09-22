import { defineStore } from 'pinia';
import { Product } from 'lib/umbraco/types';


export const useProductsStore = defineStore('products',{
    state: () => ({
        products:[] as Product[],
        currentPage: 1
    }),

    actions:{
        async fetchProducts(){
            try{
                const { data } = await useFetch(`https://commerceheadless.euwest01.umbraco.io/api/v1/products?page=${this.currentPage}`)
                const products = data.value
                console.log(products)
                // @ts-ignore
                this.products = products.items;
            }catch(err) {
                console.log(err)
            }
            
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