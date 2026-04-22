import { TFormData } from "@/types/formData.type";

export const sendContactEmail = async (formData: TFormData): Promise<void> => {
  const response = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("サーバーエラーが発生しました。もう一度お試しください。");
  }
};
