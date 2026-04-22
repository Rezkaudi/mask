import Image from "next/image";

export interface ICategory {
  title: string;
  items?: string[];
}

interface ITypesProps {
  types: string[] | ICategory[];
}

const Types = ({ types }: ITypesProps) => {
  const isCategorized = types.length > 0 && typeof types[0] !== "string";

  const renderItem = (text: string, key: string | number) => (
    <div key={key} className="flex items-start gap-2">
      <Image
        src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/icons/red-correct.svg"
        width={20}
        height={20}
        alt="red-correct"
        className="mt-0.5"
      />
      <p className="text-[#111111] text-[14px]">{text}</p>
    </div>
  );

  return (
    <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <div className="container card group bg-white rounded-[16px] pt-[60px] px-[30px] pb-[40px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out relative border border-[#f1f5f9] overflow-hidden hover:-translate-y-[10px] hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)] bg-[var(--accent-bg)]">
        <h3 className="text-center text-[#111111] text-[24px] font-bold mb-2">
          買取対象の種類
        </h3>
        <span className="block w-[30%] mx-auto border-b-4 border-[#B81122] mb-8 transition-all duration-300 ease-in-out group-hover:w-full"></span>

        <div className="space-y-6">
          {isCategorized ? (
            (types as ICategory[]).map((category, catIndex) => (
              <div key={catIndex} className="mb-4">
                <h4 className="text-[#B81122] font-bold text-[18px] mb-3 border-b border-gray-200 pb-1">
                  {category.title}
                </h4>
                <div className="space-y-2 pl-2">
                  {category?.items?.map((item, itemIndex) =>
                    renderItem(item, itemIndex),
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="space-y-3">
              {(types as string[]).map((item, index) =>
                renderItem(item, index),
              )}
            </div>
          )}
        </div>

        <div className="pl-8 py-3 bg-[#B81122] mt-8 rounded-sm">
          <p className="px-5 border-l-4 border-white/50 text-white font-bold">
            上記に記載のない製品でもお気軽にご相談ください。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Types;
