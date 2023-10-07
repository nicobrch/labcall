"use client";
import { useState, useEffect } from "react";
import SelectComponent from "./SelectComponent";
import MultiSelectComponent from "./MultiSelectComponent";
import { axisOptions } from "./otros/Selects";
import { buildOptions } from "./page";

const axisInfoApiResponse = ["sumar", "restar", "multiplicar", "dividir"];
const abilityInfoApiResponse = ["1", "2", "3", "4"];
type MultiSelectProps = {
	axisesOptions: string[];
	abilitiesOptions: string[];
	selectedAxis: string;
	setSelectedAxis: (axis: string) => void;
	selectedAbilities: string[];
	setSelectedAbilities: (abilities: string[]) => void;
	deleteNode: () => void;
};
const EjeHabilidad = ({ axisesOptions, abilitiesOptions, selectedAxis, setSelectedAxis, selectedAbilities, setSelectedAbilities, deleteNode }: MultiSelectProps) => {
	useEffect(() => {
		setSelectedAbilities([]);
	}, [selectedAxis]);

	return (
		<div>
			<div className="grid grid-cols-11 gap-1 sm:grid-cols-21 mb-4">
				<div className="col-span-10">
					<div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
						<div>
							<SelectComponent name="eje" placeholder="Seleccionar eje" options={buildOptions(axisesOptions)} setSelected={setSelectedAxis} />
						</div>
						<div>
							<MultiSelectComponent
								name="habilidad"
								placeholder="Seleccionar habilidades"
								options={buildOptions(abilitiesOptions)}
								setSelected={setSelectedAbilities}
								selected={selectedAbilities}
							/>
						</div>
					</div>
				</div>

				<div className="col-span-1 grid place-items-center">
					<button
						className="col-span-1 inline-flex items-center justify-center rounded-md bg-black p-1 w-7 h-7 text-center font-medium text-sm text-white hover:bg-opacity-90 mr-2"
						onClick={deleteNode}
					>
						<svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default EjeHabilidad;
