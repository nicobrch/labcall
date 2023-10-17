"use client"
import React, { useState, useEffect } from "react";
import { Pregunta } from "@/pages/api/statistics/[id]";

export interface TableThree2Props {
  headers: string[];
  data: Pregunta[];
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
      sorted.sort((a, b) => b.success - a.success); // Descending order
    } else if (selectedOption === "asc") {
      sorted.sort((a, b) => a.success - b.success); // Ascending order
    } else if (selectedOption === "id") {
      sorted.sort((a, b) => a.id - b.id); // Sort by ID (original order)
      setSortedPreguntas(sorted);
    }
    
    setSortedPreguntas(sorted);
  }, [selectedOption]);
  
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
            <option value="desc">Orden Descendente</option>
            <option value="asc">Orden Ascendente</option>
          </select>
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              {headers.map((header) => (
                  <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                    {header}
                  </th>
              ))}
            </tr>
          </thead>
          <tbody>
          {sortedPreguntas.map((pregunta, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {pregunta.id}
                  </p>
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
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
