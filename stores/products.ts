import { acceptHMRUpdate, defineStore } from 'pinia';
import { Product } from 'lib/umbraco/types';



export const useProductsStore = defineStore('products',{
    
    state: () => ({
        products:[] as Product[],
        currentPage: 1
    }),

    actions:{
        async fetchProducts(){
            try{
                const resp = await $fetch(`https://commerceheadless.euwest01.umbraco.io/api/v1/products?page=${this.currentPage}`,{
                    parseResponse: JSON.parse
                })
                // @ts-ignore
                this.products = resp
                
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
    },
});

export function setupProductsStore() {
    return useProductsStore();
  }

  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useProductsStore, import.meta.hot));
  }