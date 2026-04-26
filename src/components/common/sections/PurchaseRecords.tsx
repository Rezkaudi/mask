import { TPurchaseItem } from "@/types/purchase-item.types";
import { PurchaseRecordsCard } from "./PurchaseRecordsCard";
import Link from "next/link";

interface IPurchaseRecordsProps {
  label: string;
  isCategory?: boolean;
  purchaseItems?: TPurchaseItem[];
  isLimit?: boolean;
}

export const PurchaseRecords = async ({
  label,
  isCategory,
  purchaseItems,
  isLimit = false,
}: IPurchaseRecordsProps) => {
  let purchaseItemsList = purchaseItems;
  if (isLimit) {
    const itemsToShow = 12;
    purchaseItemsList = purchaseItems?.filter((item) => item.categoryCover).slice(0, itemsToShow);
  }
  return (
    <section className="relative py-[50px] md:py-[80px] lg:py-[120px] px-5 md:px-[50px] lg:px-[80px]">
      <h2 className="text-[30px] md:text-[50px] lg:text-[60px] leading-[45px] md:leading-[60px] lg:leading-[90px] font-black text-center font-noto bg-gradient-to-r from-light-red to-dark-red bg-clip-text text-transparent">
        {label}
      </h2>
      <p className="mt-2 lg:mt-4 text-[20px] lg:text-[40px] leading-[30px] lg:leading-[60px] font-black text-center bg-gradient-to-r from-light-red to-dark-red bg-clip-text text-transparent">
        {isCategory ? "の買取実績" : ""}
      </p>
      <div className="mt-[40px] md:mt-[45px] lg:mt-[50px] flex flex-wrap justify-between md:justify-center gap-[17px] lg:gap-8">
        {purchaseItemsList?.map((item, index) => (
          <PurchaseRecordsCard
            key={index}
            title={item.title}
            image={item.imageSrc}
          />
        ))}
      </div>
      {isLimit && <div className="px-[8px] w-full">
        <Link
          href="/purchase-records"
          className="mt-[24px] md:mt-[35px] lg:mt-[40px] mx-auto py-[12px] w-[90%] md:w-[50%] lg:w-[27%] text-[24px] lg:text-[28px] leading-[36px] lg:leading-[42px] font-black text-white gradient-red rounded text-center block"
        >
          もっと見る
        </Link>
      </div>}
    </section>
  );
};
