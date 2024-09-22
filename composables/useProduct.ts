export default function useProduct(){
  return{
    highlightedProducts
  }
}

async function highlightedProducts(path: string): Promise<Response> {
  const { product } = await $fetch(`/api/page?path=${path}`, {
    parseResponse: JSON.parse
  })  
    return product
}