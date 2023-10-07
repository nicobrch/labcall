"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Ability, Axis, Student } from "@/types/student";
import { Option, abilityOptions, axisOptions } from "./Selects";

type MultiStudentSelectsProps = {
	students: Student[];
	axis: Axis;
	setAxis: (axis: Axis) => void;
};

const MultiStudentSelects = ({ students, axis, setAxis }: MultiStudentSelectsProps) => {
	const [selectedAxis, setSelectedAxis] = useState<Option>({ value: "", label: "" });
	const [selectedAbilities, setSelectedAbilities] = useState<Option[]>([]);

	const buildCurrentAxis = () => {
		return {
			id: selectedAxis.value,
			label: selectedAxis.label,
			abilities: buildCurrentAbilities()
		};
	};

	const buildCurrentAbilities = () => {
		return selectedAbilities.map((ability) => {
			return {
				id: ability.value,
				label: ability.label
			};
		});
	};

	const onChangeAxis = (e: any) => {
		setSelectedAxis(e);
	};

	const onChangeAbilities = (e: any) => {
		setSelectedAbilities(e);
	};

	useEffect(() => {
		setAxis(buildCurrentAxis());
	}, [selectedAxis, selectedAbilities]);

	return (
		<div>
			<h4>
				Modificando estudiantes:
				<ol style={{ listStyleType: "decimal", justifyContent: "flex-start", paddingLeft: "20px", paddingTop: "5px" }}>
					{students.map((student, index) => (
						<li key={index}>{student.name}</li>
					))}
				</ol>
			</h4>

			<div className="py-5 dark:border-strokedark sm:flex-col">
				<Select
					className="w-full dark:border-strokedark dark:text-black min-w-47.5 h-full mb-2 sm:mb-0 sm:w-1/2 sm:mr-2"
					placeholder="Seleccionar eje"
					classNamePrefix="Eje"
					name="Eje"
					options={axisOptions}
					value={selectedAxis}
					onChange={onChangeAxis}
				/>

				<Select
					placeholder="Seleccionar habilidad"
					className="w-full dark:border-strokedark dark:text-black min-w-47.5 h-full sm:w-1/2 md:w-1/2"
					classNamePrefix="Habilidad"
					isMulti
					name="Habilidad"
					options={abilityOptions}
					value={selectedAbilities}
					onChange={onChangeAbilities}
				/>
			</div>
			<div className="flex items-center justify-center">
				<button className="inline-flex items-center justify-center rounded-sm bg-black p-4 text-center font-medium text-sm text-white hover:bg-opacity-90 h-4 w-4">X</button>
			</div>
		</div>
	);
};

export default MultiStudentSelects;
