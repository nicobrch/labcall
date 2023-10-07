"use client";
import React, { useEffect, useState, ReactNode } from "react";
import Select, { MultiValue, SingleValue } from "react-select";
import { Ability, Axis, Student } from "@/types/student";
import { Placeholder } from "react-select/animated";

type SelectProps = {
	selectedAxis: Axis;
	options: ReactNode;
	name: string;
	placeholder: string;
	isMulti: boolean;
};

const SelectProps = ({ name, placeholder, options }: SelectProps) => {
	return (
		<div className="py-5 dark:border-strokedark flex overflow-x-scroll">
			<Select
				className="w-full dark:border-strokedark dark:text-black min-w-47.5 w-1/3 h-full mr-2"
				placeholder={placeholder}
				name={name}
				{...(isMulti && { isMulti: true })}
				options={options}
				classNamePrefix="Eje"
				value={}
				onChange={}
			/>
		</div>
	);
};

export default Select;
