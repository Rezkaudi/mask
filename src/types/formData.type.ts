export type TFormData = {
  name: string;
  email: string;
  phone: string;
  phonePermission: string;
  usageType: string;
  invoiceRegistration: string;
  provideRegistrationNumber: string;
  city: string;
  product_info: string;
  productsList: Product[]
  additional_notes: string;
};

export type Product = {
  product_details: string;
  product_condition: string;
  images?: (string | null)[]
}


