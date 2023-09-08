import { Store, defineStore } from "pinia";
import { Product } from "lib/umbraco/types";

interface ProductsState {
    products: Product[],
    currentPage: number;
}

export const useProductsStore = defineStore('products',{
    state: (): ProductsState => ({
        products:[],
        currentPage: 1
    }),

    getters:{
        //add any getters here if needed
    },

    actions:{
        async fetchProducts(this: Store<ProductsState>){
            const { data, error, pending } = await useFetch('https://commerceheadless.euwest01.umbraco.io/api/v1/products');
            const response = await data;
            console.log(error)

            this.products = data.items;


        }
    }
})