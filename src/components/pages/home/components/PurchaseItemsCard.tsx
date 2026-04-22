import { useHaveDetails } from "@/hooks/useHaveDetails";
import { getCategoryTitleById } from "@/services/category";
import Image from "next/image";
import Link from "next/link";

interface IPurchaseItemsCardProps {
  title: string;
  categoryId?: string;
  categoryName?: string;
  image: string;
}

const PurchaseItemsCard = ({
  title,
  categoryId,
  categoryName,
  image,
}: IPurchaseItemsCardProps) => {
  const resolvedCategoryName =
    categoryName ?? (categoryId ? getCategoryTitleById(categoryId) : undefined);
  const haveDetails = useHaveDetails(title, resolvedCategoryName);

  // Common content to avoid duplication
  const content = (
    <>
      {haveDetails && (
        <span className="absolute right-2 bottom-[60px] bg-green-600 p-1 text-[8px] text-white rounded-sm">
          詳細あり
        </span>
      )}
      <div className="w-full flex justify-center items-center">
        <Image
          src={image}
          alt={title}
          width={190}
          height={190}
          className="w-auto h-[140px] lg:w-auto lg:h-[190px]"
        />
      </div>
      <p className="max-h-[100px] px-[10px] lg:px-[6px] py-[7px] lg:py-[12px] absolute bottom-0 left-0 w-full bg-[#B81122] flex justify-between items-center text-white font-semibold text-[10px] lg:text-[18px] leading-[27px] lg:leading-[30px] overflow-hidden text-ellipsis line-clamp-2">
        <span className="flex-1 text-center">{title}</span>
        {haveDetails && (
          <Image
            width={20}
            height={20}
            src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/icons/info-circle.svg"
            alt="info-icon"
          />
        )}
      </p>
    </>
  );

  // Conditional rendering: Link if haveDetails, div otherwise
  return haveDetails ? (
    <Link
      href={`/products/${categoryId}/${title}`}
      className="block p-[20px_24px_60px_24px] lg:p-[25px_58px_65px_58px] min-h-[240px] lg:min-h-[258px] border-[2px] border-[#B81122] rounded-[4px] bg-white relative cursor-pointer"
    >
      {content}
    </Link>
  ) : (
    <div className="block p-[20px_24px_60px_24px] lg:p-[25px_58px_65px_58px] min-h-[240px] lg:min-h-[258px] border-[2px] border-[#B81122] rounded-[4px] bg-white relative cursor-default">
      {content}
    </div>
  );
};

export default PurchaseItemsCard;
