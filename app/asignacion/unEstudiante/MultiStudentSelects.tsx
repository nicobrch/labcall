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
			<h4>Modificando estudiantes: {students.map((student) => student.name)}</h4>

			<div className="py-5 dark:border-strokedark flex">
				<Select
					className="w-full dark:border-strokedark dark:text-black min-w-47.5 w-1/2 h-full mr-2"
					placeholder="Seleccionar eje"
					classNamePrefix="Eje"
					name="Eje"
					options={axisOptions}
					value={selectedAxis}
					onChange={onChangeAxis}
				/>

				<Select
					placeholder="Seleccionar habilidad"
					className="w-full dark:border-strokedark dark:text-black min-w-47.5 w-1/2 mr-2"
					classNamePrefix="Habilidad"
					isMulti
					name="Habilidad"
					options={abilityOptions}
					value={selectedAbilities}
					onChange={onChangeAbilities}
				/>
			</div>
		</div>
	);
};

export default MultiStudentSelects;
