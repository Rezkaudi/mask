import Image from "next/image";

export const AreaSection = () => {
  return (
    <section className="bg-gray-100 py-20">
        <div className="fs-container max-w-6xl mx-auto px-5">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-8 text-factory-teal">
              対応エリア
            </h2>
            <p className="text-xl">
              関東全域（東京・神奈川・埼玉・千葉・茨城・栃木・群馬）
            </p>
          </div>

          {/* Image instead of Map */}
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[300px] md:h-[420px] lg:h-[500px] rounded-xl overflow-hidden shadow-md border border-factory-teal/20">
              <Image
                src={
                  "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/kanto.jpg"
                }
                alt="関東エリアのイメージ"
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 60vw, 800px"
                className="object-contain bg-white"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>
  );
};
