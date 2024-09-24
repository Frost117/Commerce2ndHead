import { Cart } from "~/lib/umbraco/types";

export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig()
    
    // Parse the body of the request
    const body = await readBody(event)

    // Extract the order id from the body
    const orderId = body.cartId
    const productReference = body.productReference

    // Make a POST request to the endpoint with the order id
    const order = await $fetch<Cart>(`${runtimeConfig.baseUrl}umbraco/commerce/storefront/api/v1/order/${orderId}`, {
      method: "POST",
      headers:{
        'Api-Key': runtimeConfig.appSecret,
        'Store' : runtimeConfig.commerceStore
      },
      // Send the order id and customer ref in the body of the request
      body: {
        productReference: productReference,
        quantity: 1
      }
    })
    return {
      order
    }
});
