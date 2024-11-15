import type Product from "~/components/Product.vue"

export default function useProduct(){
  return{
    highlightedProducts
  }
}

async function highlightedProducts(path: string): Promise<typeof Product> {
  const { product } = await $fetch(`/api/page?path=${path}`, {
    parseResponse: JSON.parse
  })
    return product
}