"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableEstudiantes from "./TableEstudiantes";
import Link from "next/link";
import Modal from "@/components/Modal";

const CrearCuestionario = () => {
	return (
		<div>
			<Breadcrumb pageName="Asignar cuestionario a cada estudiante" />

			<div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
				<div className="flex flex-col gap-9">
					<div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
						<div className="flex flex-col gap-5.5 p-6.5">
							<div>
								<label className="mb-3 block text-black dark:text-white">Seleccionar curso</label>
								<div className="relative z-20 bg-white dark:bg-form-input">
									<select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 pl-5 pr-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
										<option value="">7°A</option>
										<option value="">7°B</option>
										<option value="">7°C</option>
									</select>
									<span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g opacity="0.8">
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
													fill="#637381"
												></path>
											</g>
										</svg>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Tabla estudiantes --> */}
			<div className="flex flex-col gap-10 mt-5">
				<TableEstudiantes />
			</div>

			{/* <!-- Botones --> */}
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
