"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { IOption } from "./page";

// interface Tooltip {
// 	label: number;
// 	value: string;
// }

type MultiSelectProps = {
	name: string;
	placeholder: string;
	options: IOption[];
	selected: IOption[];
	setSelected: (options: IOption[]) => void;
};

const MultiSelectComponent = ({ name, placeholder, options, selected, setSelected }: MultiSelectProps) => {
	//   const buildTooltip = (tooltips: string[]) => {
	//     return tooltips?.map((tooltip, index) => {
	//       return {
	//         value: index,
	//         label: tooltip + 1,
	//       };
	//     });
	//   };

	//const tooltipOptions = buildTooltip(tooltips);

	useEffect(() => {
		if (options) {
			options.push({ label: "Todos", value: "Todos" });
		}
	}, [options]);

	const onChange = (e: any) => {
		if (e.some((option: IOption) => option.value === "Todos")) {
			setSelected(options.filter((option: IOption) => option.value !== "Todos"));
		} else {
			setSelected(e);
		}
	};
	return (
		<Select
			className="relative w-full appearance-none rounded bg-transparent outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
			placeholder={placeholder}
			name={name}
			isMulti
			options={options}
			classNamePrefix={name}
			value={selected}
			onChange={onChange}
		/>
	);
};

export default MultiSelectComponent;
