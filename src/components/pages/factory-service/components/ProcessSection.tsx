export const ProcessSection = () => {
  const processSteps = [
    {
      title: "STEP 1: お問い合わせ・ご相談",
      content:
        "まずはお電話またはメール、LINE等からご相談ください。機械設備・処分品等の写真をお送りいただけるとスムーズです。",
    },
    {
      title: "STEP 2: 現地調査・買取査定",
      content:
        "専門スタッフが現地にお伺いし、現地の確認と機械設備や在庫品の査定を行います。",
    },
    { title: "STEP 3: お見積もり", content: "お見積もりを作成します。" },
    {
      title: "STEP 4: ご契約・スケジュール調整",
      content:
        "ご納得いただけましたら、お客様のご都合に合わせて作業日程を決定します。",
    },
    {
      title: "STEP 5: 撤去・搬出作業",
      content: "安全を最優先に、計画的に撤去・搬出作業を実施します。",
    },
    {
      title: "STEP 6: 完了確認・お支払い",
      content: "お客様立会いのもと完了確認を行い、精算させていただきます。",
    },
  ];
  return (
    <section className="bg-white py-20">
      <div className="fs-container max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-factory-teal">作業の流れ</h2>
        </div>

        <div className="relative py-10">
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-factory-yellow md:-translate-x-1/2"></div>

          {processSteps.map((step, index) => (
            <div key={index} className="relative mb-12 flex items-center">
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0
                    ? "md:text-right md:pr-8"
                    : "md:ml-auto md:pl-8"
                }`}
              >
                <div className="bg-white border-2 rounded-lg p-8 shadow-md ml-12 md:ml-0 border-factory-yellow">
                  <h3 className="text-xl font-bold mb-3 text-factory-teal">
                    {step.title}
                  </h3>
                  <p>{step.content}</p>
                </div>
              </div>

              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 text-white rounded-full flex items-center justify-center font-bold z-10 bg-factory-sky">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
