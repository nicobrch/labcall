"use client";
import React, { useEffect, useState, ReactNode } from "react";
import Select, { MultiValue, SingleValue } from "react-select";
import { IOption } from "./page";

type SelectProps = {
	name: string;
	placeholder: string;
	options: IOption[];
	selected: IOption;
	setSelected: (option: IOption) => void;
};

const SelectComponent = ({ name, placeholder, options, selected, setSelected }: SelectProps) => {
	const onChange = (e: any) => {
		setSelected(e);
	};

	return (
		<Select
			className="relative w-full appearance-none rounded bg-transparent outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
			placeholder={placeholder}
			name={name}
			options={options}
			classNamePrefix={name}
			value={selected}
			onChange={onChange}
		/>
	);
};

export default SelectComponent;
