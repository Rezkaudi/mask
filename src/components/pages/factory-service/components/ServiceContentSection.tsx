import Image from "next/image";

export const ServiceContentSection = () => {
  const equipment = [
    {
      id: 1,
      title: "工作機械（NC旋盤、マシニングセンター）",
      image:
        "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Equipments/%E5%B7%A5%E4%BD%9C%E6%A9%9F%E6%A2%B0%EF%BC%88NC%E6%97%8B%E7%9B%A4%E3%80%81%E3%83%9E%E3%82%B7%E3%83%8B%E3%83%B3%E3%82%B0%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E3%80%81%E3%83%95%E3%83%A9%E3%82%A4%E3%82%B9%E7%9B%A4%EF%BC%89.png",
    },
    {
      id: 2,
      title: "プレス機械・板金機械",
      image:
        "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Equipments/%E3%83%97%E3%83%AC%E3%82%B9%E6%A9%9F%E6%A2%B0%E3%83%BB%E6%9D%BF%E9%87%91%E6%A9%9F%E6%A2%B0.png",
    },
    {
      id: 3,
      title: "産業用ロボット・自動化設備",
      image:
        "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Equipments/%E7%94%A3%E6%A5%AD%E7%94%A8%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E3%83%BB%E8%87%AA%E5%8B%95%E5%8C%96%E8%A8%AD%E5%82%99.png",
    },
    {
      id: 4,
      title: "検査・測定機器",
      image:
        "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Equipments/%E6%A4%9C%E6%9F%BB%E3%83%BB%E6%B8%AC%E5%AE%9A%E6%A9%9F%E5%99%A8.png",
    },
    {
      id: 5,
      title: "コンプレッサー・発電機",
      image:
        "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Equipments/%E3%82%B3%E3%83%B3%E3%83%97%E3%83%AC%E3%83%83%E3%82%B5%E3%83%BC%E3%83%BB%E7%99%BA%E9%9B%BB%E6%A9%9F.png",
    },
    {
      id: 6,
      title: "フォークリフト・クレーン",
      image:
        "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Equipments/%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AF%E3%83%AA%E3%83%95%E3%83%88%E3%83%BB%E3%82%AF%E3%83%AC%E3%83%BC%E3%83%B3.png",
    },
  ];
  return (
    <section className="bg-white py-20">
      <div className="fs-container max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-factory-teal">サービス内容</h2>
        </div>

        <div className="mb-15">
          <div className="text-white p-6 rounded-t-lg bg-factory-sky">
            <h3 className="text-2xl font-bold">機械設備買取・撤去</h3>
          </div>
          <div className="bg-gray-50 border-2 border-t-0 p-8 rounded-b-lg border-factory-sky">
            <h4 className="text-xl font-bold mb-5 text-factory-teal">
              高価買取対象設備
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {equipment.map((item) => (
                <div
                  key={item.id}
                  className="p-[20px_24px_60px_24px] lg:p-[25px_58px_65px_58px] min-h-[240px] lg:min-h-[258px] border-[2px] rounded-[4px] bg-white relative flex justify-center items-center border-factory-teal"
                >
                  <Image
                    alt={item.title}
                    src={item.image}
                    width={200}
                    height={200}
                  />
                  <p className="max-h-[100px] px-[10px] lg:px-[6px] py-[7px] lg:py-[12px] absolute bottom-0 left-0 w-full text-white font-semibold text-[12px] lg:text-[15px] leading-[27px] lg:leading-[30px] overflow-hidden text-ellipsis line-clamp-2 text-center flex justify-center items-center bg-factory-teal">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            <h4 className="text-xl font-bold mb-5 text-factory-teal">
              撤去作業の特徴
            </h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span>専門技術者による安全な撤去作業</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span>大型機械の搬出にも対応</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span>配管・配線の適切な処理</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span>床面アンカーの撤去・補修</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
