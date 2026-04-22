import { getProducts } from "@/services/products";

export const useHaveDetails = (itemTitle: string, itemCategory?: string | undefined) => {
  const productsData = getProducts();
  return productsData.some((product) => product.title === itemTitle && product.category === itemCategory);
};