"use client"
interface IShowMoreBtn {
    handleShowMore: () => void
}
const ShowMoreBtn: React.FC<IShowMoreBtn> = ({ handleShowMore }) => {

    return (
        <div className="w-full mt-10 md:mt-12 flex justify-center">
            <button
                onClick={handleShowMore}
                className="block w-full md:w-[50%] lg:w-[30%] px-[16px] py-[11px] lg:p-[15px] text-center text-[14px] lg:text-[18px] leading-[18px] lg:leading-[24px] font-noto font-semibold border-[2px] border-[#990E1C] text-white gradient-red text-shadow-red"
            >
                もっと見る
            </button>
        </div>
    )
};

export default ShowMoreBtn;
