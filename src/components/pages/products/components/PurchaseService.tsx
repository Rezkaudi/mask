"use client";
import { useState } from "react";
import { TQuestion } from "@/types/product.type";
import QuestionCard from "./QuestionCard";

interface IPurchaseServicesProps {
  servicesTitle: string;
  servicesDescription: string;
  questions: TQuestion[];
}

const PurchaseServices = ({
  servicesTitle,
  servicesDescription,
  questions,
}: IPurchaseServicesProps) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <>
      <main className="bg-gray-50 text-gray-900">
        <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#B81122] mb-8">
            {servicesTitle}
          </h2>
          <div
            className="mb-8 leading-7"
            dangerouslySetInnerHTML={{
              __html: servicesDescription.replace(/\n/g, "<br/>"),
            }}
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#B81122] mb-8">
            よくあるご質問
          </h2>
          <div className="space-y-4">
            {questions.map((question) => (
              <QuestionCard
                index={question.id}
                key={question.id}
                question={question}
                openAccordion={openAccordion}
                toggleAccordion={toggleAccordion}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default PurchaseServices;
