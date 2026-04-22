export const ProblemsSection = () => {

  const problems = [
    "工場を閉鎖したいが、何から手をつければいいか分からない",
    "機械設備の処分費用が心配",
    "複数の業者に依頼するのは手間がかかる",
    "廃業後の建物を原状回復して返却しなければならない",
  ];

  return (
    <section className="bg-white py-20">
        <div className="fs-container max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-factory-teal mb-4">
              工場整理の課題を解決します
            </h2>
            <p className="text-xl text-gray-600">
              こんなお悩みはありませんか？
            </p>
          </div>

          <div className="rounded-xl p-10 mb-8 bg-factory-sky50">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start mb-5 last:mb-0 animate-fade-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 bg-factory-sky">
                  !
                </div>
                <p className="text-lg">{problem}</p>
              </div>
            ))}
          </div>

          <div className="bg-factory-yellow text-factory-teal">
            <div className="p-8 rounded-lg text-center text-xl font-bold shadow-lg">
              ハディズなら、これらすべての課題をワンストップで解決いたします。
            </div>
          </div>
        </div>
      </section>
  );
};
