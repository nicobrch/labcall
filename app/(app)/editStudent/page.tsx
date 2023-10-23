"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useState, useEffect } from "react";
import Link from "next/link";
import { NextApiRequest, NextApiResponse } from "next";
import { useSearchParams, useRouter } from "next/navigation";
import AlertError from "@/components/AlertError";
import AlertConfirmacion from "@/components/AlertConfirmacion";

// import { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "LabCal",
//   // other metadata
// };
// pendiente
// se debe cargar la informacion del estudiante en los campos respectivos
// se debe agregar un modal para cambiar la contraseña

const EditStudent = () => {
	const studentID = useSearchParams()?.get("id");
	const cursoActual = useSearchParams()?.get("cursoActual");
	const [opcionesCursos, setOpcionesCursos] = useState([]);
	const [apiResponse, setApiResponse] = useState([]);
	const router = useRouter();
	const [firstname, setFirstname] = useState("");
	const [lastname1, setLastname1] = useState("");
	const [lastname2, setLastname2] = useState("");
	const [email, setEmail] = useState("");
	const [course_id, setCourse_id] = useState("");
	const [rut, setRut] = useState("");
	const [password, setPassword] = useState("");
	const [type, setType] = useState("");
	const [active, setActive] = useState("");

	const [showAlertOK, setShowAlertOK] = useState(false);
	const [showAlertError, setShowAlertError] = useState(false);

	// funcion para traer la lista de cursos disponibles
	// llamada a la API para obtener los cursos
	useEffect(() => {
		fetch("http://localhost:3000/api/course/all")
			.then((response) => response.json())
			.then((data) => {
				setOpcionesCursos(data);
			})
			.catch((error) => {
				console.error("Error al obtener las opciones desde la API:", error);
			});
	}, []);

	// funcion para obtener los datos del estudiante mediante llamada a API
	useEffect(() => {
		fetch("http://localhost:3000/api/student/read", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				id: studentID
			})
		})
			.then((response) => response.json())
			.then((data) => {
				setApiResponse(data);
				setFirstname(data.firstname);
				setLastname1(data.lastname1);
				setLastname2(data.lastname2);
				setEmail(data.email);
				setCourse_id(data.course_id);
				setRut(data.rut);
				setPassword(data.password);
				setType(data.type);
				setActive(data.active);
			})
			.catch((error) => {
				console.error("Error al obtener la data desde la API:", error);
			});
	}, []);

	const fetchEditStudentData = async () => {
		try {
			const response = await fetch("http://localhost:3000/api/student/edit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					rut: rut,
					firstname: firstname,
					lastname1: lastname1,
					lastname2: lastname2,
					email: email,
					password: password,
					type: type,
					active: active,
					course_id: course_id
				})
			});
			// console.log(response);
			if (response.ok) {
				const responseData = await response.json();
				setApiResponse(responseData);
				setShowAlertOK(true);
				//esperar unos segundos antes de redirigir
				setTimeout(() => {
					router.push("/listaCurso");
				}, 2000);
			} else {
				console.log("Error al obtener data del usuario");
				console.error("API Respondió mal :(");
				const responseData = await response.json();
				setApiResponse(responseData.message);
				setShowAlertError(true);
			}
		} catch (error) {
			console.error("Connection Error:", error);
		}
	};

	return (
		<>
			<div className="absolute z-9999 top-5 right-5 ">
				<AlertConfirmacion title={"¡Estudiante modifcado con éxito!"} body={"Se redirigira a la lista del curso."} show={showAlertOK} setShow={setShowAlertOK}></AlertConfirmacion>
				<AlertError title={"No se puedo modificar estudiante :("} body={"Intente nuevamente."} show={showAlertError} setShow={setShowAlertError}></AlertError>
			</div>
			<div className="mx-auto max-w-270">
				<Breadcrumb pageName="Modificar estudiante" />

				<div className="grid grid-cols-3 gap-8">
					<div className="col-span-5 xl:col-span-3">
						<div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
							<div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
								<h3 className="font-medium text-black dark:text-white">Información Personal</h3>
							</div>
							<div className="p-7">
								<div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
									{/* nombre */}
									<div className="w-full sm:w-1/3">
										<label className="mb-3 block text-sm font-medium text-black dark:text-white" htmlFor="firstname">
											Nombre
										</label>
										<div className="relative">
											<input
												className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
												type="text"
												name="firstname"
												id="firstname"
												value={firstname}
												onChange={(event) => setFirstname(event.target.value)}
											/>
										</div>
									</div>

									{/* primer apellido */}
									<div className="w-full sm:w-1/3">
										<label className="mb-3 block text-sm font-medium text-black dark:text-white" htmlFor="lastname1">
											Primer apellido
										</label>
										<div className="relative">
											<input
												className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
												type="text"
												name="lastname1"
												id="lastname1"
												value={lastname1}
												onChange={(event) => setLastname1(event.target.value)}
											/>
										</div>
									</div>

									{/* segundo apellido */}
									<div className="w-full sm:w-1/3">
										<label className="mb-3 block text-sm font-medium text-black dark:text-white" htmlFor="lastname2">
											Segundo apellido
										</label>
										<div className="relative">
											<input
												className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
												type="text"
												name="lastname2"
												id="lastname2"
												value={lastname2}
												onChange={(event) => setLastname2(event.target.value)}
											/>
										</div>
									</div>
								</div>

								<div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
									{/* Curso */}
									<div className="w-full sm:w-1/2">
										<label className="mb-3 block text-sm font-medium text-black dark:text-white" htmlFor="curso">
											Curso
										</label>
										<select
											className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
											name="cursoActual"
											id="cursoActual"
											value={course_id}
											onClick={(event) => setCourse_id(event.target?.value)}
										>
											<option value={0} disabled>
												{cursoActual}
											</option>
											{opcionesCursos.map((opcion: any) => (
												<option key={opcion?.id} value={Number(opcion?.id)}>
													{opcion?.name}
												</option>
											))}
										</select>
									</div>
									{/* RUT */}
									<div className="w-full sm:w-1/2">
										<label className="mb-3 block text-sm font-medium text-black dark:text-white" htmlFor="rut">
											RUT (no modificable)
										</label>
										<input
											className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
											type="rut"
											name="rut"
											id="rut"
											defaultValue={rut}
											readOnly
										/>
									</div>
								</div>

								{/* correo: pendiente, no se sabe si sera incluido */}
								<div className="mb-5.5">
									<label className="mb-3 block text-sm font-medium text-black dark:text-white" htmlFor="emailAddress">
										Correo Electronico
									</label>
									<div className="relative">
										<input
											className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
											type="email"
											name="emailAddress"
											id="emailAddress"
											value={email}
											onChange={(event) => setEmail(event.target.value)}
										/>
									</div>
								</div>

								{/* 
                  pendiente: falta un modal que se abra cuando para solicitar confirmacion
                  */}
								<div className="flex justify-center gap-4.5">
									<button className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-95" type="submit" onClick={fetchEditStudentData}>
										Confirmar cambios
									</button>

									<button
										className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-95"
										onClick={() => {
											router.push("/listaCurso");
										}}
									>
										Cancelar
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EditStudent;
