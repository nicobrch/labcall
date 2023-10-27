"use client";
import React, { useState, useEffect } from "react";
import {IQuestion} from "@/backend/interfaces/question";
var Latex = require("react-latex");
interface header {
  colSpan: number;
  key: string;
  label: string;
  classNames?: string;
  render?: Function;
}

export interface TableThree2Props {
  headers: header[];
  data: IQuestion[];
}

const TableThree: React.FC<TableThree2Props> = ({ headers, data }) => {
  const [selectedOption, setSelectedOption] = useState(""); // Set an initial value
  const [sortedPreguntas, setSortedPreguntas] = useState(data);

  const handleSelectChange = (event: any) => {
    const newSelectedOption = event.target.value;
    setSelectedOption(newSelectedOption);
  };

  useEffect(() => {
    // Conditionally sort the Pregunta array based on the selectedOption
    const sorted = [...data];
    if (selectedOption === "desc") {
      sorted.sort((a, b) => parseInt((b as any).correctas) - parseInt((a as any).correctas)); // Descending order
    } else if (selectedOption === "asc") {
      sorted.sort((a, b) => parseInt((a as any).correctas) - parseInt((b as any).correctas)); // Ascending order
    } else if (selectedOption === "id") {
      sorted.sort((a, b) => a.id - b.id); // Sort by ID (original order)
      setSortedPreguntas(sorted);
    }

    setSortedPreguntas(sorted);
  }, [selectedOption, data]);

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <div className="flex justify-end mb-4">
          <select
            name=""
            id=""
            className="relative z-20 inline-flex py-2 pl-3 pr-8 text-sm font-medium outline-none"
            onChange={handleSelectChange}
            value={selectedOption}
          >
            <option value="id">Orden Id</option>
            <option value="desc">Más Fáciles</option>
            <option value="asc">Más difíciles</option>
          </select>
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              {headers.map((header) => (
                <th
                  key={header.key}
                  colSpan={header.colSpan}
                  className={`py-4 px-4 font-medium text-black dark:text-white xl:pl-11 `}
                >
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedPreguntas.map((pregunta: any, key) => (
              <tr key={pregunta.id}>
                {headers.map((header) => (
                  <td
                    colSpan={header.colSpan}
                    key={header.key}
                    className={`border-b border-[#eee] py-5 px-4 dark:border-strokedark`}
                  >
                    <p
                      className={`text-black dark:text-white text-center ${
                        header?.classNames || ""
                      }`}
                    >
                      {header.render
                        ? header.render(
                            pregunta[header.key] || pregunta,
                            pregunta
                          )
                        : pregunta[header.key]}
                    </p>
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

{
  /* <td
                    colSpan={1}
                    className="border-b border-[#eee] py-5 px-4 dark:border-strokedark"
                  >
                    <p className="text-black dark:text-white">{pregunta.id}</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {pregunta.text}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {pregunta.success}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {pregunta.failure}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {pregunta.totalresponses}
                    </p>
                  </td> */
}
