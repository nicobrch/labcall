"use client";
import React, { use, useEffect, useState, ReactNode } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import EjeHabilidad from "./EjeHabilidad";
import SelectComponent from "./SelectComponent";
import MultiSelectComponent from "./MultiSelectComponent";

const coursesApiResponse = ["7°A", "7°B", "7°C", "7°D", "7°E", "7°F", "7°G", "7°H"];
const userApiResponse = ["Luis Acuña", "Martín Saavedra", "Valentina Díaz", "Matías Aguilera", "Nicolás Chirino", "David Silva"];
const axisApiResponse = ["Números", "Algebra y funciones", "Geometría", "Probabilidad y estadísticas"];
const abilityApiResponse = ["Representar", "Resolver problemas", "Argumentar y comunicar", "Modelar"];

type Node = {
	selectedAxis: string;
	selectedAbilities: string[];
};

//zona apis
const getCoursesApi = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return coursesApiResponse;
};
const getUserApi = async (course_id: string) => {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return userApiResponse;
};
const getAxisApi = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return axisApiResponse;
};
const getAbilitiesApi = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return abilityApiResponse;
};
export const buildOptions = (courses: string[]) => {
	return courses?.map((course) => {
		return {
			label: course,
			value: course
		};
	});
};

// componente
const CrearCuestionario = () => {
	const [courses, setCourses] = useState<string[]>([]);
	const [users, setUsers] = useState<string[]>([]);
	const [axis, setAxis] = useState<string[]>([]);
	const [abilities, setAbilities] = useState<string[]>([]);

	const [nodes, setNodes] = useState<Node[]>([
		{
			selectedAxis: "",
			selectedAbilities: []
		}
	]);
	const [selectedCourse, setSelectedCourse] = useState<string>("");
	const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

	const setSelectedAxisForNode = (axis: string, index: number) => (axis: string) => {
		const newNode = [...nodes];
		newNode[index].selectedAxis = axis;
		setNodes(newNode);
	};

	const setSelectedAbilitiesForNode = (abilities: string[], index: number) => (abilities: string[]) => {
		const newNode = [...nodes];
		newNode[index].selectedAbilities = abilities;
		setNodes(newNode);
	};

	// funciones get para ocupar la api y llenar los cursos
	const getCourses = async () => {
		try {
			const coursesApiResult = await getCoursesApi();

			setCourses(coursesApiResult);
		} catch (error: any) {
			console.error(error);
		}
	};
	const getUsers = async () => {
		//resultado de la api
		try {
			const usersApiResult = await getUserApi(selectedCourse);
			setUsers(usersApiResult);
		} catch (error: any) {
			console.error(error);
		}
	};
	const getAxis = async () => {
		try {
			const axisApiResult = await getAxisApi();

			setAxis(axisApiResult);
		} catch (error: any) {
			console.error(error);
		}
	};
	const getAbilities = async () => {
		try {
			const abilitiesApiResult = await getAbilitiesApi();

			setAbilities(abilitiesApiResult);
		} catch (error: any) {
			console.error(error);
		}
	};
	const addEmptyNode = () => {
		// if there are no axis available, do nothing
		if (getAvailableAxisOptions().length === 0) {
			return;
		}

		// if there is already an empty node, do nothing
		if (nodes.some((node) => node.selectedAxis === "")) {
			return;
		}

		// add empty node
		setNodes([...nodes, { selectedAxis: "", selectedAbilities: [] }]);
	};
	const deleteNode = (index: number) => () => {
		const newNode = [...nodes];

		newNode.splice(index, 1);

		setNodes(newNode);
	};

	const getAvailableAxisOptions = () => {
		const selectedAxis = nodes.map((node) => node.selectedAxis);

		return axis.filter((axis) => !selectedAxis.includes(axis));
	};

	// useEffect para que se ejecute la funcion getCourses al cargar la pagina
	useEffect(() => {
		getCourses();
		getAxis();
		getAbilities();
	}, []);

	// useEffect que trae los usuarios cuando cambia el curso seleccionado
	useEffect(() => {
		getUsers();
	}, [selectedCourse]);

	// useEffect que reinicia los usuarios seleccionados cuando cambia el curso seleccionado
	useEffect(() => {
		setSelectedUsers([]);
	}, [selectedCourse]);

	return (
		<div>
			<Breadcrumb pageName="Asignar cuestionario" />

			<div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
				<div className="flex flex-col gap-9">
					<div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
						<div className="flex flex-col gap-5.5 p-6.5">
							<div>
								<label className="mb-3 block text-black dark:text-white">Seleccionar curso</label>
								<div className="relative bg-white dark:bg-form-input">
									<div className="p-2 dark:border-strokedark flex">
										<SelectComponent name="Seleccionar curso" placeholder="Seleccionar curso" options={buildOptions(courses)} setSelected={setSelectedCourse} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-9">
					<div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
						<div className="flex flex-col gap-5.5 p-6.5">
							<div>
								<label className="mb-3 block text-black dark:text-white">Asignar a:</label>
								<div className="relative bg-white dark:bg-form-input">
									<div className="p-2 dark:border-strokedark flex">
										<MultiSelectComponent
											name="asignar estudiantes"
											placeholder="Seleccionar estudiantes"
											options={buildOptions(users)}
											setSelected={setSelectedUsers}
											selected={selectedUsers}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col mt-5 gap-9">
				<div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
					<div className="flex flex-col gap-5.5 p-6.5">
						<label className="mb-3 block text-black dark:text-white">Seleccionar eje y habilidad</label>
						<div className="relative bg-white dark:bg-form-input">
							{nodes.map((eje, index) => (
								<EjeHabilidad
									axisesOptions={getAvailableAxisOptions()}
									abilitiesOptions={abilities}
									selectedAxis={eje.selectedAxis}
									setSelectedAxis={setSelectedAxisForNode(eje.selectedAxis, index)}
									setSelectedAbilities={setSelectedAbilitiesForNode(eje.selectedAbilities, index)}
									selectedAbilities={eje.selectedAbilities}
									deleteNode={deleteNode(index)}
								/>
							))}
						</div>

						<div className="flex items-center justify-center">
							<button
								className="inline-flex items-center justify-center rounded-md bg-black p-1 w-35 h-10 text-center font-medium text-sm text-white hover:bg-opacity-90 mr-2"
								onClick={addEmptyNode}
							>
								<label className="pr-2">Agregar eje</label>
								<svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-around mt-5">
				<Link href="#" className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 w-55">
					Guardar
				</Link>
				<Link href="#" className="inline-flex items-center justify-center rounded-full bg-meta-3 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 w-55">
					Guardar y publicar
				</Link>
			</div>
		</div>
	);
};

export default CrearCuestionario;
