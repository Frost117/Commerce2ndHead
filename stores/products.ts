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
                const { products } = await $fetch(`/api/products?page=${this.currentPage}`)
                
                this.products = products
            }
            catch(err){
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