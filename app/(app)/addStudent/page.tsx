"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useState, useEffect } from "react";
import { Metadata } from "next";
import { ValidationError } from "sequelize";
import AlertConfirmacion from "@/components/AlertConfirmacion";
import AlertError from "@/components/AlertError";
// export const metadata: Metadata = {
//   title: "LabCal",
//   // other metadata
// };

const AddStudent = () => {
	const [studentName, setStudentName] = useState("");
	const [studentRUT, setStudentRUT] = useState("");
	const [lastName1, setLastname1] = useState("");
	const [lastName2, setLastname2] = useState("");
	const [email1, setEmail1] = useState("");
	const [courseId, setCourseId] = useState(0);

	const [opcionesCursos, setOpcionesCursos] = useState([]);
	const [rutError, setRutError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [apiResponse, setApiResponse] = useState("");
	const [showAlertOK, setShowAlertOK] = useState(false);
	const [showAlertError, setShowAlertError] = useState(false);

	const handleStudentNameChange = (event: any) => {
		setStudentName(event.target.value);
	};

	const handleRutChange = (event: any) => {
		const rutValue = event.target.value;
		setStudentRUT(rutValue);
		const rutRegex = /^(\d{1,3}(\.\d{3})*-\d{1}|[\d]{8}-[\d]{1})$/;

		if (!rutRegex.test(rutValue)) {
			setRutError("RUT no válido, debe ingresarlo con guion y digito verificador");
		} else {
			setRutError(""); // Borra el mensaje de error
		}
	};

	const handleLastname1 = (event: any) => {
		setLastname1(event.target.value);
	};

	const handleLastname2 = (event: any) => {
		setLastname2(event.target.value);
	};

	const handleEmail = (event: any) => {
		const emailValue = event.target.value;
		setEmail1(emailValue);
		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

		if (!emailRegex.test(emailValue)) {
			setEmailError("Correo electrónico no válido");
		} else {
			setEmailError(""); // Borra el mensaje de error
		}
	};

	const handleCourseId = (event: any) => {
		setCourseId(event.target.value);
	};

	const validateForm = () => {
		// Realiza la validación aquí
		if (studentName.trim() === "" || studentRUT.trim() === "" || lastName1.trim() === "" || lastName2.trim() === "" || email1.trim() === "" || courseId === 0) {
			alert("Por favor, complete todos los campos antes de enviar el formulario.");
			return false;
		}
		return true;
	};

	const fetchRegistrarEstudiante = async () => {
		if (validateForm()) {
			try {
				const response = await fetch("http://localhost:3000/api/register", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						rut: studentRUT,
						firstname: studentName,
						lastname1: lastName1,
						lastname2: lastName2,
						email: email1,
						password: studentRUT.slice(0, 4),
						course_id: courseId
					})
				});
				console.log(response);
				if (response.ok) {
					const responseData = await response.json();
					setStudentName("");
					setStudentRUT("");
					setLastname1("");
					setLastname2("");
					setEmail1("");
					setCourseId(0);
					setApiResponse(responseData.message);
					setShowAlertOK(true);
				} else {
					console.log("Error al guardar");
					console.error("API Respondió mal :(");
					const responseData = await response.json();
					setApiResponse(responseData.message);
					setShowAlertError(true);
				}
			} catch (error) {
				console.error("Connection Error:", error);
			}
		}
	};

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

	return (
		<>
			<div className="absolute z-9999 top-5 right-5 ">
				<AlertConfirmacion title={"¡Estudiante agregado con éxito!"} body={"Ya puedes asignarle nodos."} show={showAlertOK} setShow={setShowAlertOK}></AlertConfirmacion>
				<AlertError title={"No se puedo agregar estudiante :("} body={"Intente nuevamente."} show={showAlertError} setShow={setShowAlertError}></AlertError>
			</div>

			<div className="mx-auto max-w-270">
				<Breadcrumb pageName="Creacion de nuevo estudiante" />

				<div className="grid grid-cols-5 gap-8">
					<div className="col-span-5 xl:col-span-3">
						<div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
							<div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
								<h3 className="font-medium text-black dark:text-white">Creacion de nuevo estudiante</h3>
							</div>
							<div className="p-7">
								<div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
									{/* nombre */}
									<div className="w-full sm:w-1/3">
										<label className="mb-3 block text-sm font-medium text-black dark:text-white" htmlFor="Name">
											Nombre
										</label>
										<div className="relative">
											<input
												className="w-full rounded border border-stroke py-3 px-4.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
												type="text"
												name="nombre"
												id="nombre"
												placeholder="Nombre"
												value={studentName}
												onChange={handleStudentNameChange}
											/>
										</div>
									</div>
									{/* primer apellido */}
									<div className="w-full sm:w-1/3">
										<label className="mb-3 block text-sm font-medium text-black dark:text-white" htmlFor="lastName1">
											Primer Apellido
										</label>
										<div className="relative">
											<input
												className="w-full rounded border border-stroke py-3 px-4.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
												type="text"
												name="apellido1"
												id="apellido1"
												placeholder="Primer apellido"
												value={lastName1}
												onChange={handleLastname1}
											/>
										</div>
									</div>
									{/* segundo apellido */}
									<div className="w-full sm:w-1/3">
										<label className="mb-3 block text-sm font-medium text-black dark:text-white" htmlFor="lastName2">
											Segundo Apellido
										</label>
										<div className="relative">
											<input
												className="w-full rounded border border-stroke py-3 px-4.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
												type="text"
												name="apellido2"
												id="apellido2"
												placeholder="Segundo apellido"
												value={lastName2}
												onChange={handleLastname2}
											/>
										</div>
									</div>
								</div>
								{/* rut */}
								<div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
									<div className="w-full sm:w-1/2">
										<label className="mb-3 block text-sm font-medium text-black dark:text-white" htmlFor="rutCode">
											RUT
										</label>
										<div className="relative">
											<input
												className="w-full rounded border border-stroke py-3 px-4.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
												type="text"
												name="rut"
												id="rut"
												placeholder="22.222.222-2"
												value={studentRUT}
												onChange={handleRutChange}
											/>
											{rutError && <span className="text-red-500">{rutError}</span>}
										</div>
									</div>

									<div className="w-full sm:w-1/2">
										<label className="mb-3 block text-sm font-medium text-black dark:text-white" htmlFor="courseid1">
											Curso
										</label>
										<div className="relative z-20 bg-white dark:bg-form-input">
											<select
												className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
												name="courseid1"
												id="courseid1"
												value={courseId}
												onChange={handleCourseId}
											>
												<option value={0} disabled>
													Selecciona un Curso
												</option>
												{opcionesCursos.map((opcion: any) => (
													<option key={opcion?.id} value={opcion?.id}>
														{opcion?.name}
													</option>
												))}
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
								{/* correo electronico */}
								<div className="mb-5.5">
									<label className="mb-3 block text-sm font-medium text-black dark:text-white" htmlFor="email1">
										Correo electronico
									</label>
									<div className="relative">
										<input
											className="w-full rounded border border-stroke py-3 px-4.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
											type="text"
											name="email1"
											id="email1"
											placeholder="correo.estudiante@email.com"
											value={email1}
											onChange={handleEmail}
										/>
										{emailError && <span className="text-red-500">{emailError}</span>}
									</div>
								</div>

								<div className="flex justify-center gap-4.5">
									<button onClick={fetchRegistrarEstudiante} className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-95" type="submit">
										Agregar estudiante
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

export default AddStudent;
