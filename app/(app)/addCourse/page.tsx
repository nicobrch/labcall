"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useState } from "react";
const Settings = () => {
  const [nombreCurso, setNombreCurso] = useState("");
  const [descripcionCurso, setDescripcionCurso] = useState("");
  const [apiResponse, setApiResponse] = useState("");

  const handleCursoChange = (event: any) => {
    setNombreCurso(event.target.value);
  };

  const handleDescripcionChange = (event: any) => {
    setDescripcionCurso(event.target.value);
  };
  const validateForm = () => {
    // Realiza la validación aquí
    if (nombreCurso.trim() === "") {
      alert(
        'Por favor, complete el campo "Nombre del Curso" antes de enviar el formulario.'
      );
      return false;
    }
    return true;
  };

  const fetchGuardarCurso = async () => {
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:3000/api/course/all", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: nombreCurso,
            description: descripcionCurso,
            startDate: "2023-12-31",
            endDate: "2023-12-31",
          }),
        });
        if (response.ok) {
          // console.log("Enviada y guardada en DB");
          // esta respuesta contiene la siguiente pregunta
          const responseData = await response.json();
          // se debe actualizar el estado con la siguiente pregunta
          // console.log(responseData);
          setNombreCurso("");
          setDescripcionCurso("");
          console.log(responseData.message);
          setApiResponse(responseData.message);
        } else {
          console.log("Error al guardar");
          console.error("API Respondió mal :(");
          const responseData = await response.json();
          setApiResponse(responseData.message);
        }
      } catch (error) {
        console.error("Connection Error:", error);
      }
    }
  };

  return (
    <>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Creacion de curso" />

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              {apiResponse === "Curso almacenado exitosamente" ? (
                <div className="flex w-full border-l-6 border-[#72f7f7] bg-[#72f7f7] bg-opacity-[15%] px-5 py-5 shadow-md dark:bg-[#24241B] dark:bg-opacity-30 md:p-5">
                  <div className="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#72F7F7]">
                    <svg
                      width="45"
                      height="45"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.8179 4.54512L13.6275 4.27845C12.8298 3.16176 11.1702 3.16176 10.3725 4.27845L10.1821 4.54512C9.76092 5.13471 9.05384 5.45043 8.33373 5.37041L7.48471 5.27608C6.21088 5.13454 5.13454 6.21088 5.27608 7.48471L5.37041 8.33373C5.45043 9.05384 5.13471 9.76092 4.54512 10.1821L4.27845 10.3725C3.16176 11.1702 3.16176 12.8298 4.27845 13.6275L4.54512 13.8179C5.13471 14.2391 5.45043 14.9462 5.37041 15.6663L5.27608 16.5153C5.13454 17.7891 6.21088 18.8655 7.48471 18.7239L8.33373 18.6296C9.05384 18.5496 9.76092 18.8653 10.1821 19.4549L10.3725 19.7215C11.1702 20.8382 12.8298 20.8382 13.6275 19.7215L13.8179 19.4549C14.2391 18.8653 14.9462 18.5496 15.6663 18.6296L16.5153 18.7239C17.7891 18.8655 18.8655 17.7891 18.7239 16.5153L18.6296 15.6663C18.5496 14.9462 18.8653 14.2391 19.4549 13.8179L19.7215 13.6275C20.8382 12.8298 20.8382 11.1702 19.7215 10.3725L19.4549 10.1821C18.8653 9.76092 18.5496 9.05384 18.6296 8.33373L18.7239 7.48471C18.8655 6.21088 17.7891 5.13454 16.5153 5.27608L15.6663 5.37041C14.9462 5.45043 14.2391 5.13471 13.8179 4.54512Z"
                        fill="#ffffff"
                        stroke="#323232"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 12L10.8189 13.8189V13.8189C10.9189 13.9189 11.0811 13.9189 11.1811 13.8189V13.8189L15 10"
                        stroke="#323232"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h5 className="mb-3 font-bold">{apiResponse}</h5>
                  </div>
                </div>
              ) : (
                <></>
              )}
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Informacion del curso
                </h3>
              </div>
              <div className="p-7">
                <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                  <div className="w-full">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="fullName"
                    >
                      Nombre del curso
                    </label>
                    <div className="relative">
                      <span className="absolute left-4.5 top-4">
                        <svg
                          className="fill-current"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M21 10L12 5L3 10L6 11.6667M21 10L18 11.6667M21 10V10C21.6129 10.3064 22 10.9328 22 11.618V16.9998M6 11.6667L12 15L18 11.6667M6 11.6667V17.6667L12 21L18 17.6667L18 11.6667"
                              fill=""
                              stroke="#000000"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </span>

                      <input
                        className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        name="curso"
                        id="curso"
                        placeholder="7A"
                        value={nombreCurso}
                        onChange={handleCursoChange} // Manejar cambios en el nombre del curso
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                  <div className="w-full">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="text"
                    >
                      Descripcion
                    </label>
                    <div>
                      <textarea
                        rows={6}
                        placeholder="Texto descriptivo del curso"
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        value={descripcionCurso}
                        onChange={handleDescripcionChange} // Manejar cambios en la descripción
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-4.">
                  <button
                    onClick={fetchGuardarCurso}
                    className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-95"
                    type="submit"
                  >
                    Crear Curso
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

export default Settings;
