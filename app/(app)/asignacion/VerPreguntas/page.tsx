"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Accordion from "./Accordion";
import { useCallGetApi } from "@/hooks/useCallApi";
import { IAxis } from "@/backend/interfaces/axis";

const preguntas = ["pregunta 1", "pregunta 2", "pregunta 3", "pregunta 4"];
const buildAnswer = () => {
	return (
		<div className="flex flex-col gap-9 dark:border-strokedark dark:shadow-none">
			<ul>
				{preguntas.map((pregunta, index) => (
					<li key={index}>{pregunta}</li>
				))}
			</ul>
		</div>
	);
};

const CrearCuestionario = () => {
	const [axis, callAxis, statusAxis, errorAxis] = useCallGetApi("/axis");

	useEffect(() => {
		callAxis();
	}, [callAxis]);
	return (
		<div>
			<Breadcrumb pageName="Items de preguntas" />

			<div className="grid grid-cols-1 ">
				<div className="flex flex-col gap-9 dark:border-strokedark dark:shadow-none">
					{axis?.map((axis: IAxis, index: number) => (
						<Accordion key={index} question={axis.name || ""} answer={buildAnswer()} />
					))}
				</div>
			</div>
		</div>
	);
};

export default CrearCuestionario;
