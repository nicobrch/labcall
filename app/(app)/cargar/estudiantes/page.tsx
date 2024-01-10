"use client";
import React, { useEffect, useState } from "react";
import { ICourse } from "@/backend/interfaces/course";
import { API_PATH } from "@/config";
import AlertConfirmacion from "@/components/AlertConfirmacion";
import AlertError from "@/components/AlertError";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";

const CargarExcelEstudiantes = () => {
  const [file, setFile] = useState<File>();
  const [course, setCourse] = useState("");
  const [courseOptions, setCourseOptions] = useState<ICourse[]>([]);
  const [apiResponse, setApiResponse] = useState();

  const [showAlertOK, setShowAlertOK] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleCourseChange = (e: any) => {
    setCourse(e.target.value);
  };

  const validateForm = () => {
    if (course.trim() === "") {
      alert("Por favor, elija un curso antes de subir el archivo.");
      return false;
    }
    if (file === undefined) {
      alert("Por favor, suba un archivo antes de enviar.");
      return false;
    }
    if (file && !file.name.endsWith(".xlsx")) {
      alert("Por favor, asegurese de subir un archivo de tipo Excel .XLSX");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    validateForm();

    if (file) {
      const formData = new FormData();
      formData.append("excelFile", file);
      formData.append("courseId", course);

      try {
        const response = await fetch(`/api/uploadExcel`, {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          setFile(undefined);
          setShowAlertOK(true);
          const responseData = await response.json();
          setApiResponse(responseData.message);
          window.location.href = "/lista_estudiantes";
        } else {
          console.error("API Error: ", response);
          setShowAlertError(true);
          setFile(undefined);
          const responseData = await response.json();
          setApiResponse(responseData.error);
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    }
  };

  useEffect(() => {
    fetch(`/api/course/all`)
      .then((response) => response.json())
      .then((data) => {
        setCourseOptions(data);
      })
      .catch((error) => {
        console.error("Error al obtener los cursos desde la API:", error);
      });
  }, []);

  return (
    <>
      {/* <!-- Alertas --> */}
      {apiResponse ? (
        <div className="absolute z-9999 top-5 right-5 ">
          <AlertConfirmacion
            title={"Estudiantes cargados con éxito!"}
            body={apiResponse}
            show={showAlertOK}
            setShow={setShowAlertOK}
          ></AlertConfirmacion>
          <AlertError
            title={"Falló la carga de estudiantes."}
            body={apiResponse}
            show={showAlertError}
            setShow={setShowAlertError}
          ></AlertError>
        </div>
      ) : null}
      {/* <!-- Breadcumb --> */}
      <Breadcrumb pageName="Cargar estudiantes" />
      {/* <!-- Descargar formato --> */}
      <div className="mx-auto max-w-screen-md rounded-sm border mb-6 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        {/* <!-- Titulo --> */}
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-bold text-lg dark:text-white">
            Descargar planilla de excel
          </h3>
        </div>
        <div className="flex flex-col gap-5 p-6">
          Asegúrate de descargar la planilla de excel y seguir el formato que
          este posee, antes de subir el archivo e intentar cargar los
          estudiantes. Esto evitará errores de ingreso.
          {/* <!-- Boton Submit --> */}
          <a
            href="/docs/Formato_Cargar_Estudiantes.xlsx"
            className="inline-flex items-center justify-center rounded-md bg-meta-3 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            download
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
                />
              </svg>
            </span>
            Descargar planilla
          </a>
        </div>
      </div>
      {/* <!-- Formulario --> */}
      <div className="mx-auto max-w-screen-md rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        {/* <!-- Titulo --> */}
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-bold text-lg dark:text-white">
            Subir planilla de Excel
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 p-6">
            {/* <!-- Opciones de Curso --> */}
            <label className="font-bold block text-black dark:text-white">
              Seleccionar un curso
            </label>
            <div className="relative z-20 bg-white dark:bg-form-input">
              <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </span>
              <select
                value={course}
                onChange={handleCourseChange}
                className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
              >
                <option value="">Seleccionar un curso</option>
                {courseOptions ? (
                  <>
                    {courseOptions.map((curso) => (
                      <option key={curso.id} value={curso.id}>
                        {curso.name}
                      </option>
                    ))}
                  </>
                ) : null}
              </select>
              <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>
            {/* <!-- Subir Archivo --> */}
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
            />
            {/* <!-- Boton Submit --> */}
            <input
              type="submit"
              value="Subir"
              className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default CargarExcelEstudiantes;
