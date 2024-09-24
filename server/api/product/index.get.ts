import { Product } from "~/lib/umbraco/types";

export default defineEventHandler(async (event) => {

    const runtimeConfig = useRuntimeConfig()
    const params = getQuery(event)

    const response = await $fetch<Product>(`${runtimeConfig.baseUrl}/umbraco/delivery/api/v1/content/item/${params.id}`, {
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
