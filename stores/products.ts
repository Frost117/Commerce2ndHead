import { defineStore } from 'pinia';
import { Product } from 'lib/umbraco/types';


export const useProductsStore = defineStore('products',{
    state: () => ({
        products:[] as Product[],
        currentPage: 1
    }),

    actions:{
        async fetchProducts(){              

                const { data: productData } = await useFetch(`https://commerceheadless.euwest01.umbraco.io/api/v1/products?page=${this.currentPage}`)
                
                const products = productData.value
                console.log(products)
                this.products = products.items;
            
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