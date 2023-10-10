"use client";
import React, { useEffect, useState, ReactNode } from "react";
import Select, { MultiValue, SingleValue } from "react-select";

interface Option {
	label: string;
	value: string;
}

type SelectProps = {
	name: string;
	placeholder: string;
	options: Option[];
	setSelected: (options: string) => void;
};

const SelectComponent = ({ name, placeholder, options, setSelected }: SelectProps) => {
	const [selectedOption, setSelectedOption] = useState<Option>();

	const onChange = (e: any) => {
		setSelectedOption(e);
		setSelected(e.value);
	};

	return (
		<Select
			className="relative w-full appearance-none rounded bg-transparent outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
			placeholder={placeholder}
			name={name}
			options={options}
			classNamePrefix={name}
			value={selectedOption}
			onChange={onChange}
		/>
	);
};

export default SelectComponent;
