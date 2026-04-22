import { TFormData } from "@/types/formData.type";

export const validateContactForm = (formData: TFormData): string | null => {
  if (formData.city === "選択してください" || !formData.city) {
    return "都道府県を選択してください。";
  }

  const hasInvalidProductCondition = formData.productsList.some(
    (product) =>
      !product.product_details ||
      !product.product_condition ||
      product.product_condition === "選択してください"
  );

  if (hasInvalidProductCondition) {
    return "商品の詳細と状態を入力してください。";
  }

  return null;
};
