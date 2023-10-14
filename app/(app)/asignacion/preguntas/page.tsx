"use client";
import React, { use, useEffect, useState, ReactNode } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import EjeHabilidad from "./EjeHabilidad";
import SelectComponent from "./SelectComponent";
import MultiSelectComponent from "./MultiSelectComponent";
import { useCallGetApi } from "@/hooks/useCallApi";
import { ICourse } from "@/backend/interfaces/course";
import { IUser } from "@/backend/interfaces/user";
import { postToApi } from "@/js/requests";
import { IAxis } from "@/backend/interfaces/axis";
import { IAbility } from "@/backend/interfaces/ability";

export interface IOption {
	label: string;
	value: string;
}

export type Node = {
	selectedAxis: IOption;
	selectedAbilities: IOption[];
};

export const ICourseToIOption = (course: ICourse): IOption => {
	return {
		label: String(course.name) || "Selecciona un curso",
		value: String(course.id) || "Selecciona un curso"
	};
};
export const IUserToIOption = (user: IUser): IOption => {
	return {
		label: `${user?.firstname} ${user?.lastname1}`,
		value: String(user.id) || "Error"
	};
};

export const buildCourseOptions = (courses: ICourse[]): IOption[] => {
	return courses?.map((course) => {
		return {
			label: String(course.name) || "Error",
			value: String(course.id) || "Error"
		};
	});
};

export const buildUserOptions = (users: IUser[]) => {
	return users?.map((user) => {
		return {
			label: `${user?.firstname} ${user?.lastname1}`,
			value: String(user.id) || "Error"
		};
	});
};

// componente
const CrearCuestionario = () => {
	const [courses, callCourses, statusCourses, errorCourses] = useCallGetApi("/course/all");
	const [abilities, callAbilities, statusAbilities, errorAbilities] = useCallGetApi("/abilities");
	const [axis, callAxis, statusAxis, errorAxis] = useCallGetApi("/axis");

	useEffect(() => {
		callCourses();
		callAbilities();
		callAxis();
	}, [callCourses, callAbilities, callAxis]);

	const [selectedCourse, setSelectedCourse] = useState<ICourse>({ id: 0, name: "", usuarios: [] });
	const [selectedUsers, setSelectedUsers] = useState<IUser[]>([]);
	const [nodes, setNodes] = useState<Node[]>([
		{
			selectedAxis: {
				label: "",
				value: ""
			},
			selectedAbilities: []
		}
	]);

	const onChangeSelectedCourse = (courseValue: IOption) => {
		const course = courses.find((course: ICourse) => course.name == courseValue.label);

		if (course) {
			setSelectedCourse(course);
		}
	};

	const onChangeSelectedUser = (userValue: IOption[]) => {
		const users = selectedCourse?.usuarios?.filter((user: IUser) => userValue.some((u) => u.label == user?.firstname + " " + user?.lastname1));

		if (users) {
			setSelectedUsers(users);
		}
	};

	const setSelectedAxisForNode = (axis: IOption, index: number) => (axis: IOption) => {
		const newNode = [...nodes];
		newNode[index].selectedAxis = axis;
		setNodes(newNode);
	};

	const setSelectedAbilitiesForNode = (abilities: IOption[], index: number) => (abilities: IOption[]) => {
		const newNode = [...nodes];
		newNode[index].selectedAbilities = abilities;
		setNodes(newNode);
	};

	const addEmptyNode = () => {
		// if there are no axis available, do nothing
		if (getAvailableAxisOptions().length === 0) {
			return;
		}

		// if there is already an empty node, do nothing
		if (nodes.some((node) => node.selectedAxis.label === "" && node.selectedAxis.value === "")) {
			return;
		}

		// add empty node
		setNodes([...nodes, { selectedAxis: { label: "", value: "" }, selectedAbilities: [] }]);
	};

	const deleteNode = (index: number) => () => {
		const newNode = [...nodes];

		newNode.splice(index, 1);

		setNodes(newNode);
	};

	const getAxisOptions = () => {
		if (!axis) {
			return [];
		}

		return axis?.map((axis: IAxis) => {
			return {
				label: axis.name || "",
				value: axis.id || ""
			};
		});
	};

	const getAbilitiesOptions = () => {
		if (!abilities) {
			return [];
		}

		return abilities?.map((ability: IAbility) => {
			return {
				label: ability.name || "",
				value: ability.id || ""
			};
		});
	};

	const getAvailableAxisOptions = () => {
		const axisOptions = getAxisOptions();
		return axisOptions?.filter((axis: IOption) => !nodes.some((node) => node.selectedAxis.value === axis.value));
	};

	const saveNodes = async () => {
		let _nodes: {
			axis: string;
			ability: string;
		}[] = [];

		nodes.forEach((node) => {
			_nodes = node.selectedAbilities.map((ability) => {
				return {
					axis: node.selectedAxis.label,
					ability: ability.label
				};
			});
		});

		let payload = {
			users: selectedUsers.map((user) => user.id),
			nodes: _nodes
		};

		const response = await postToApi("/node/student_save", payload);

		console.log(response);
	};

	return (
		<div>
			<Breadcrumb pageName="Asignar Nodos" />

			<div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
				<div className="flex flex-col gap-9">
					<div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
						<div className="flex flex-col gap-5.5 p-6.5">
							<div>
								<label className="mb-3 block text-black dark:text-white">Seleccionar curso</label>
								<div className="relative bg-white dark:bg-form-input">
									<div className="p-2 dark:border-strokedark flex">
										<SelectComponent
											name="Seleccionar curso"
											placeholder="Seleccionar curso"
											options={buildCourseOptions(courses)}
											selected={ICourseToIOption(selectedCourse)}
											setSelected={onChangeSelectedCourse}
										/>
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
											options={buildUserOptions(selectedCourse?.usuarios || [])}
											selected={selectedUsers?.map(IUserToIOption) || []}
											setSelected={onChangeSelectedUser}
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
							{nodes.map((node, index) => (
								<EjeHabilidad
									key={index}
									axisesOptions={getAvailableAxisOptions()}
									abilitiesOptions={getAbilitiesOptions()}
									selectedAxis={node.selectedAxis}
									setSelectedAxis={setSelectedAxisForNode(node.selectedAxis, index)}
									setSelectedAbilities={setSelectedAbilitiesForNode(node.selectedAbilities, index)}
									selectedAbilities={node.selectedAbilities}
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
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-around mt-5">
				<Link
					href="#"
					onClick={saveNodes}
					className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 w-55"
				>
					Guardar
				</Link>
			</div>
		</div>
	);
};

export default CrearCuestionario;
