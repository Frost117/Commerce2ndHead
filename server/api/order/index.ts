export default defineEventHandler(async (event) => {

    const runtimeConfig = useRuntimeConfig()
    const params = getQuery(event)

    const response = await $fetch(`${runtimeConfig.baseUrl}/umbraco/commerce/storefront/api/v1/products?productReference=${params.productReference}`, {
        parseResponse: JSON.parse,
        headers:{
            'Api-Key': runtimeConfig.appSecret,
            'Store' : runtimeConfig.commerceStore
        }
    })

    const data = await response

    return {
        product: data
    }
});
