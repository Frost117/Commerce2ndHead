export default defineEventHandler(async (event) =>{
    const response = await $fetch('http://localhost:38817/umbraco/delivery/api/v1/content',{
        headers:{
            'ApiKey':'3vC9B7sesuzXflUgYP3Z1lbGdzeEgDV8'
        },
        query:{
            'fetch':'descendants:products'
        }
    })
    const content = await response
    return content
})