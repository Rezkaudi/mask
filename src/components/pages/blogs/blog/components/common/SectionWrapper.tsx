import React from "react";

interface ISectionWrapper {
  id?: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<ISectionWrapper> = ({ id, children }) => {
  return (
    <section
      id={id}
      className="bg-white rounded-[20px] p-5 lg:p-8 border border-[#EAEAEA] scroll-mt-32 lg:scroll-mt-20"
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
