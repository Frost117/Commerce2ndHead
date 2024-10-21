import { storeToRefs } from 'pinia';

export function useFilters() {

    const productsStore = useProductsStore();
    const { products } = storeToRefs(productsStore)
    
    const selectedTags = ref([]);

    const uniqueTags = computed(() => {
        if (!products.value) {
            return [];
          }

      const tags = products.value.reduce((allTags: string[], product) => {
        if (product.properties && product.properties.tags) {
          return allTags.concat(product.properties.tags);
        }
        return allTags;
      }, []);
      return [...new Set(tags)];
    });
  
    const filteredProducts = computed(() => {
      if (!selectedTags.value.length || selectedTags.value.includes('')) {
        return products.value;
      }
      return products.value.filter(product => product.properties.tags?.some(tag => selectedTags.value.includes(tag)));
    });
    
    return {
        selectedTags,
        uniqueTags,
        filteredProducts,
      };
}