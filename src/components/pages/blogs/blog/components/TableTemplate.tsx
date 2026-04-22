import React from "react";
import SectionWrapper from "./common/SectionWrapper";
import SectionHeader from "./common/SectionHeader";

interface TableContent {
  id: string;
  type: "table";
  title: string;
  topDescription: string;
  bottomDescription: string;
  headers: string[];
  rows: {
    id: string;
    columns: string[];
  }[];
}

interface ITableTemplate {
  content: TableContent;
  sectionNumber?: number;
}

const TableTemplate: React.FC<ITableTemplate> = ({
  content,
  sectionNumber,
}) => {
  return (
    <SectionWrapper id={content.title}>
      <SectionHeader number={sectionNumber} title={content.title} />

      {/* Top Description */}
      {content.topDescription && (
        <div className="mb-8">
          {content.topDescription.split("\n").map((paragraph, index) => (
            <p
              key={index}
              className="font-noto font-normal text-[14px] lg:text-[16px] leading-[200%] tracking-normal align-middle text-[#323232] mb-4"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto my-8 rounded-lg border border-gray-200 shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
              {content.headers.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider border-b-2 border-gray-200"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {content.rows.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                {row.columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-6 py-4 text-sm text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: col }}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Description */}
      {content.bottomDescription && (
        <div className="border border-[#B81122] rounded-2xl bg-[#FFF5F6] p-4">
          {content.bottomDescription.split("\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-[14px] lg:text-[16px] leading-[160%] align-middle font-noto text-[#B81122]"
              dangerouslySetInnerHTML={{
                __html: paragraph,
              }}
            />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
};

export default TableTemplate;
