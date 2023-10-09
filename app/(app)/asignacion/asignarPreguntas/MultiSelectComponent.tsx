"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";

interface Option {
	label: string;
	value: string;
}
interface Tooltip {
	label: number;
	value: string;
}

type MultiSelectProps = {
	name: string;
	placeholder: string;
	options: Option[];
	selected: string[];
	setSelected: (options: string[]) => void;
};

const MultiSelectComponent = ({ name, placeholder, options, setSelected, selected }: MultiSelectProps) => {
	const buildTooltip = (tooltips: string[]) => {
		return tooltips?.map((tooltip, index) => {
			return {
				value: index,
				label: tooltip + 1
			};
		});
	};

	//const tooltipOptions = buildTooltip(tooltips);

	const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
	useEffect(() => {
		if (options) {
			options.push({ label: "Todos", value: "Todos" });
		}
	}, [options]);

	useEffect(() => {
		if (selected) {
			setSelectedOptions(selected.map((option) => ({ label: option, value: option })));
		}
	}, [selected]);

	const onChange = (e: any) => {
		if (e.some((option: Option) => option.value === "Todos")) {
			setSelectedOptions(options.filter((option: Option) => option.value !== "Todos"));

			setSelected(options.filter((option: Option) => option.value !== "Todos").map((option: Option) => option.value));
		} else {
			setSelectedOptions(e);

			setSelected(e.map((option: Option) => option.value));
		}
	};
	//const formatOptionLabel = ({ label, value }: Tooltip) => <div title={tooltips[value]}>{label}</div>;
	return (
		<Select
			className="relative w-full appearance-none rounded bg-transparent outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
			placeholder={placeholder}
			name={name}
			isMulti
			options={options}
			classNamePrefix={name}
			value={selectedOptions}
			onChange={onChange}
			//formatOptionLabel={formatOptionLabel}
		/>
	);
};

export default MultiSelectComponent;
