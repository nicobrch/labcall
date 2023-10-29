"use client";
import { useEffect } from "react";
import SelectComponent from "./SelectComponent";
import MultiSelectComponent from "./MultiSelectComponent";
import { IOption } from "./page";

type MultiSelectProps = {
	axisesOptions: IOption[];
	abilitiesOptions: IOption[];
	selectedAxis: IOption;
	setSelectedAxis: (axis: IOption) => void;
	selectedAbilities: IOption[];
	setSelectedAbilities: (abilities: IOption[]) => void;
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
							<SelectComponent name="axis" placeholder="Seleccionar eje" options={axisesOptions} selected={selectedAxis} setSelected={setSelectedAxis} />
						</div>
						<div>
							<MultiSelectComponent name="ability" placeholder="Seleccionar habilidades" options={abilitiesOptions} setSelected={setSelectedAbilities} selected={selectedAbilities} />
						</div>
					</div>
				</div>

				<div className="col-span-1 grid place-items-center">
					<button
						className="col-span-1 inline-flex items-center justify-center rounded-md bg-black p-1 w-7 h-7 text-center font-medium text-sm text-white hover:bg-opacity-90 mr-2"
						onClick={deleteNode}
					>
						<svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default EjeHabilidad;
