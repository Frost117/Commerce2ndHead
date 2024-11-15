import { Cart } from "~/lib/umbraco/types";

export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig()
    
    // Parse the body of the request
    const body = await readBody(event)

    // Make a POST request to the endpoint with the order id
    const order = await $fetch<Cart>(`${runtimeConfig.baseUrl}umbraco/commerce/storefront/api/v1/order/${body.cartId}`, {
      method: "POST",
      headers:{
        'Api-Key': runtimeConfig.appSecret,
        'Store' : runtimeConfig.commerceStore
      },
      // Send the order id and customer ref in the body of the request
      body: {
        productReference: body.productReference,
        quantity: 1,
      }
    })
    
    return {
      order
    }
});
