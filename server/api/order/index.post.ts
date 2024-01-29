export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig()
    
    // Parse the body of the request
    const body = await readBody(event)
  
    // Extract the order id from the body
    const orderId = body.id

    // Get the customer token from the cookie
    const customRef = getCookie(event, 'customerToken')

    // Make a POST request to the endpoint with the order id
    const order = await $fetch(`${runtimeConfig.baseUrl}umbraco/commerce/storefront/api/v1/orders`, {
      method: "POST",
      headers:{
        'Api-Key': runtimeConfig.appSecret,
        'Store' : runtimeConfig.commerceStore
      },
      // Send the order id and customer ref in the body of the request
      body: { 
        id: orderId,
        customerReference: customRef
     } 
    })

    return {
      order
    }
});
