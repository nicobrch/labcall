import { Package } from "@/types/package";
import { CursoItem } from "@/pages/api/statistics";
import React from "react";
import Link from "next/link";
import { ICourse } from "@/backend/interfaces/course";

export interface IItemHeader {
  title: string;
  colSpan: number;
  key: string;
  classNames?: string;
  render?: Function;
}

export interface TableThreeProps {
  headers: IItemHeader[];
  data: ICourse[];
}

const TableThree: React.FC<TableThreeProps> = ({ headers, data }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              {headers.map((header) => (
                <th
                  key={header.key}
                  colSpan={header.colSpan}
                  className={`py-4 px-4 font-medium text-black dark:text-white ${
                    header.classNames || ""
                  }`}
                >
                  {header.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((curso: any, key) => (
              <tr key={key}>
                {headers.map((header: IItemHeader) => (
                  <td
                    className={`border-b border-[#eee] py-5  dark:border-strokedark  ${
                      header.classNames || ""
                    }`}
                    key={header.key}
                    colSpan={header.colSpan}
                  >
                    {header.render
                      ? header.render(curso[header.key] || curso, curso)
                      : curso[header.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
