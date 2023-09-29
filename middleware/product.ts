export default defineNuxtRouteMiddleware(async (to, from) => {

    const ProductsStore = useProductsStore()

    const productObject = computed(() => ProductsStore.getProductInfo)

    console.log("I am watching what is happening here", productObject.value);
})