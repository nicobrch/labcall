"use client";
import React, { useEffect, useState } from "react";
import Select, { MultiValue, SingleValue } from "react-select";
import { Ability, Axis, Student } from "@/types/student";

export interface Option {
	label: string;
	value: string;
}

export const axisOptions: Option[] = [
	{ value: "algebra_y_funciones", label: "Álgebra y funciones" },
	{ value: "geometria", label: "Geometría" },
	{ value: "probabilidad_y_estadisticas", label: "Probabilidad y estadísticas" },
	{ value: "numeros", label: "Números" }
];

export const abilityOptions: Option[] = [
	{ value: "resolver_problemas", label: "Resolver problemas" },
	{ value: "modelar", label: "Modelar" },
	{ value: "argumentar_y_comunicar", label: "Argumentar y comunicar" },
	{ value: "representar", label: "Representar" }
];

type SelectsProps = {
	student: Student;
	selectedAxis: Axis;
	updateStudentAxis: (student: Student, axis: Axis) => void;
	removeStudentAxis: (student: Student, axis: Axis) => void;
};

const parseAxisToOption = (axis: Axis): Option => ({ value: axis.id, label: axis.label });
const parseAbilitiesToOptionArray = (abilities: Ability[]): Option[] => abilities.map((ability) => ({ value: ability.id, label: ability.label }));

const Selects = ({ student, selectedAxis, updateStudentAxis, removeStudentAxis }: SelectsProps) => {
	const onChangeAxis = (e: SingleValue<Option>) => {
		const currentStudentAxis = student.axis.find((axis) => axis.id === selectedAxis.id);

		updateStudentAxis(student, {
			id: e?.value ?? "",
			label: e?.label ?? "",
			abilities: currentStudentAxis?.abilities ?? []
		});
	};

	const onChangeAbilities = (e: MultiValue<Option>) => {
		const currentStudentAxis = student.axis.find((axis) => axis.id === selectedAxis.id);

		updateStudentAxis(student, {
			id: selectedAxis.id,
			label: selectedAxis.label,
			abilities:
				e?.map((ability) => {
					return {
						id: ability.value,
						label: ability.label
					};
				}) ??
				currentStudentAxis?.abilities ??
				[]
		});
	};

	const getAxisOptionsWithoutStudentAxis = () => {
		return axisOptions.filter((axisOption) => {
			const isInStudentAxis = student.axis.findIndex((axis) => axis.id === axisOption.value) !== -1;

			return !isInStudentAxis;
		});
	};

	return (
		<div className="py-5 dark:border-strokedark flex overflow-x-scroll">
			<Select
				className="w-full dark:border-strokedark dark:text-black min-w-47.5 w-1/3 h-full mr-2"
				placeholder="Seleccionar eje"
				classNamePrefix="Eje"
				name="Eje"
				options={getAxisOptionsWithoutStudentAxis()}
				value={parseAxisToOption(selectedAxis)}
				onChange={onChangeAxis}
			/>

			<Select
				placeholder="Seleccionar habilidad"
				className="w-full dark:border-strokedark dark:text-black min-w-47.5 w-1/2 mr-2"
				classNamePrefix="Habilidad"
				isMulti
				name="Habilidad"
				options={abilityOptions}
				value={parseAbilitiesToOptionArray(selectedAxis.abilities)}
				onChange={onChangeAbilities}
			/>
			<div className="flex items-center justify-center">
				<button
					className="inline-flex items-center justify-center rounded-sm bg-black p-4 text-center font-medium text-sm text-white hover:bg-opacity-90 h-4 w-4"
					onClick={() => removeStudentAxis(student, selectedAxis)}
				>
					X
				</button>
			</div>
		</div>
	);
};

export default Selects;
