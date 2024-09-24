import { Products } from "~/lib/umbraco/types";

export default defineEventHandler(async (event) => {

    const runtimeConfig = useRuntimeConfig()
    const params = getQuery(event)

    const response = await $fetch<Products>(`${runtimeConfig.baseUrl}/api/v1/products?page=${params.page}`, {
        parseResponse: JSON.parse
    })

    const data = await response

    return {
        products: data
    }
});
