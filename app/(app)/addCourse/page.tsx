"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useState } from "react";
import { Metadata } from "next";
import AlertConfirmacion from "@/components/AlertConfirmacion";
import AlertError from "@/components/AlertError";
import { API_PATH } from "@/config";
// export const metadata: Metadata = {
//   title: "LabCal",
//   // other metadata
// };

const Settings = () => {
  const [nombreCurso, setNombreCurso] = useState("");
  const [descripcionCurso, setDescripcionCurso] = useState("");
  const [apiResponse, setApiResponse] = useState("");

  const [showAlertOK, setShowAlertOK] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);

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
        const response = await fetch(`${API_PATH}/course/all`, {
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

  return (
    <>
      <div className="absolute z-9999 top-5 right-5 ">
        <AlertConfirmacion
          title={"Curso agregado con éxito!"}
          body={"Ya puedes asignarle estudiantes."}
          show={showAlertOK}
          setShow={setShowAlertOK}
        ></AlertConfirmacion>
        <AlertError
          title={"No se puedo agregar curso :("}
          body={"Intente nuevamente."}
          show={showAlertError}
          setShow={setShowAlertError}
        ></AlertError>
      </div>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Creacion de curso" />

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Información del curso
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
