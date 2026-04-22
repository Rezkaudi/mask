import Image from "next/image";

interface IInformationProps {
  information: string[];
}

const Information = ({ information }: IInformationProps) => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6 bg-gradient-to-br from-[#fff7f7] to-[#ffeaea] rounded-xl shadow-lg mt-10 lg:mt-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#B81122] mb-8">
        高価買取のポイント
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {information.map((info, idx) => (
          <div
            key={idx}
            className="flex items-start bg-white rounded-lg shadow p-4 border border-[#f5c2c7] hover:shadow-md transition"
          >
            <Image
              src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/icons/red-correct.svg"
              width={20}
              height={20}
              alt="red-correct"
              className="mr-2 mt-1"
            />
            <span className="text-[#303030] text-[16px] md:text-[18px] leading-7 font-medium">
              {info}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Information;
