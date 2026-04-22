'use client'
import { useState } from "react";
import { TQuestion } from "@/types/product.type";
import QuestionCard from "../components/QuestionCard";

interface IQuestionsProps {
  questions: TQuestion[];
}

const Questions = ({ questions }: IQuestionsProps) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
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
  );
};

export default Questions;
