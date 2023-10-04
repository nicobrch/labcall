"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Accordion from "./Accordion";

const ejes = ["Álgebra y funciones", "Geometría", "Probabilidad y estadísticas", "Números"];
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
	return (
		<div>
			<Breadcrumb pageName="Items de preguntas" />

			<div className="grid grid-cols-1 ">
				<div className="flex flex-col gap-9 dark:border-strokedark dark:shadow-none">
					{ejes.map((eje, index) => (
						<Accordion key={index} question={eje} answer={buildAnswer()} />
					))}
				</div>
			</div>
		</div>
	);
};

export default CrearCuestionario;
