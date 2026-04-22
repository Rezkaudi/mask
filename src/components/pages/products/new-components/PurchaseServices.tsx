interface IPurchaseServicesProps {
  servicesDescription: string;
  servicesTitle?: string;
  className?: string;
}

const PurchaseServices = ({
  servicesDescription,
  servicesTitle,
  className = "",
}: IPurchaseServicesProps) => {
  const paragraphs = servicesDescription
    .split("\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section className={`max-w-4xl mx-auto py-12 px-4 sm:px-6 ${className}`}>
      {servicesTitle && (
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#B81122] mb-8">
          {servicesTitle}
        </h2>
      )}
      <div className="bg-white rounded-[16px] border border-[#f1f5f9] shadow-[0_6px_18px_rgba(0,0,0,0.05)] p-6 sm:p-8">
        <div className="prose prose-sm sm:prose-base max-w-none text-[#303030]">
          <div className="space-y-4 sm:space-y-5 leading-7 sm:leading-8">
            {paragraphs.map((desc, index) =>
              index === 0 ? (
                <p
                  key={index}
                  className="font-semibold text-[#111111]"
                  dangerouslySetInnerHTML={{ __html: desc }}
                />
              ) : (
                <p key={index} dangerouslySetInnerHTML={{ __html: desc }} />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseServices;
