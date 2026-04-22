import { TProduct, TNewProduct } from "@/types/product.type";

/** Old product (has subTitle / kinds / merit / tips) */
export const isTProduct = (p: TProduct | TNewProduct): p is TProduct => {
  // subTitle is the most reliable discriminant
  return typeof (p as TProduct)?.subTitle === "string";
};

/** New product (has types / information) */
export const isNewProduct = (p: TProduct | TNewProduct): p is TNewProduct => {
  return Array.isArray((p as TNewProduct)?.types);
};