import { useState, useId } from "react";

export const FAQSection = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const faqIdBase = useId();

  const toggleFAQ = (index: number) =>
    setActiveFAQ((curr) => (curr === index ? null : index));

  const faqs = [
    {
      question: "Q: 稼働中の工場でも部分的な整理は可能ですか？",
      answer:
        "A: はい、可能です。営業に支障がないよう、エリアを区切って段階的に作業を進めることができます。",
    },
    {
      question: "Q: 土日の作業は可能ですか？",
      answer:
        "A: 基本的には平日営業となりますが、平日が難しい場合は休日作業にも対応いたしますのでご相談ください。",
    },
    {
      question: "Q: 見積もり後のキャンセルは可能ですか？",
      answer:
        "A: もちろん可能です。お見積りは無料ですので、じっくりご検討ください。",
    },
    {
      question: "Q: 機械の買取価格はどのように決まりますか？",
      answer:
        "A: 機種・年式・稼働状況・需要などを総合的に判断し、適正価格をご提示します。",
    },
  ];
  return (
    <section className="bg-gray-100 py-20">
      <div className="fs-container max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-factory-teal">
            よくあるご質問
          </h2>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const expanded = activeFAQ === index;
            const panelId = `${faqIdBase}-panel-${index}`;
            const btnId = `${faqIdBase}-button-${index}`;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  id={btnId}
                  className="w-full text-white p-6 text-left flex justify-between items-center transition-colors bg-factory-sky hover:bg-factory-teal"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <span
                    className={`text-2xl transition-transform ${
                      expanded ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`bg-gray-50 transition-all duration-300 overflow-hidden ${
                    expanded ? "max-h-96 p-6" : "max-h-0"
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
