import { sendContactEmail } from '@/services/api/mail';
import { validateContactForm } from '@/utils/validators';
import { useState } from "react";
import { TFormData } from "@/types/formData.type";


const initialFormData: TFormData = {
  name: "",
  email: "",
  phone: "",
  phonePermission: "",
  usageType: "",
  invoiceRegistration: "",
  provideRegistrationNumber: "",
  city: "",
  product_info: "",
  productsList: [
    {
      product_details: "",
      product_condition: "",
      images: new Array(3).fill(null),
    },
  ],
  additional_notes: "",
};

export const useFormHandler = () => {
  const [formData, setFormData] = useState<TFormData>(initialFormData);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [click, setClick] = useState(false);

  // --- Input Handlers ---

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleProductInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    index?: number
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      productsList: prevData.productsList.map((product, i) =>
        i === index ? { ...product, [name]: value } : product
      ),
    }));
  };

  const handleImageChange = (images: (string | null)[], index: number) => {
    setFormData((prevData) => ({
      ...prevData,
      productsList: prevData.productsList.map((product, i) =>
        i === index ? { ...product, images } : product
      ),
    }));
  };

  // --- Dynamic Form Fields ---

  const addProduct = () => {
    setFormData((prevData) => ({
      ...prevData,
      productsList: [
        ...prevData.productsList,
        {
          product_details: "",
          product_condition: "",
          images: new Array(3).fill(null),
        },
      ],
    }));
  };

  const deleteProduct = (index: number) => {
    setFormData((prevData) => ({
      ...prevData,
      productsList: prevData.productsList.filter((_, i) => i !== index),
    }));
  };

  // --- Submission Logic ---

  const resetForm = () => {
    setFormData(initialFormData);
    setAgreePrivacy(false);
    setStatus('idle');
    setClick(false);
  };

  const submitForm = async () => {
    setErrorMessage(null);

    // 1. Validate
    const validationError = validateContactForm(formData);
    if (validationError) {
      setErrorMessage(validationError);
      return false; // Submission failed
    }

    // 2. Submit
    setStatus('submitting');
    try {
      await sendContactEmail(formData);
      setStatus('success');
      resetForm();
      return true; // Submission successful
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "サーバーエラーが発生しました。もう一度お試しください。";
      setErrorMessage(msg);
      setStatus('error');
      return false; // Submission failed
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setClick(true);
    await submitForm();
  };

  const isSubmitting = status === 'submitting';

  return {
    formData,
    status,
    errorMessage,
    agreePrivacy,
    setAgreePrivacy,
    handleInputChange,
    handleProductInputChange,
    handleImageChange,
    addProduct,
    deleteProduct,
    submitForm,
    handleSubmit,
    isSubmitting,
    click,
    setClick,
  };
};
