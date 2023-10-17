"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useState, useEffect } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  // other metadata
};

/**
 * This component displays a list of students for a selected course.
 * It fetches the list of courses and students from an API and allows the user to select a course
 * and display the list of students for that course.
 *
 * @returns A React component that displays a list of students for a selected course.
 */

const ListaCurso = () => {

  const [opcionesCursos, setOpcionesCursos] = useState([]);
  const [cursoActual, setCursoActual] = useState(0);
  const [apiResponse, setApiResponse] = useState([]);

  // llamada a la API para obtener los estudiantes del curso especifico
  const fetchReadStudents = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/course/students",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            course_id: Number(cursoActual),
          }),
        }
      );
      // console.log(response);
      if (response.ok) {
        const responseData = await response.json();
        setApiResponse(responseData);
        console.log(apiResponse);
      } else {
        console.log("Error al guardar");
        console.error("API Respondió mal :(");
        const responseData = await response.json();
        setApiResponse(responseData.message);
      }
    } catch (error) {
      console.error("Connection Error:", error);
    }
  };

  // llamada a la API para obtener los cursos (dentro estan los estudiantes)
  useEffect(() => {
    fetch('http://localhost:3000/api/course/all')
      .then((response) => response.json())
      .then((data) => {
        setOpcionesCursos(data);
      })
      .catch((error) => {
        console.error('Error al obtener las opciones desde la API:', error);
      });
  }, []);

  const handleCursoActual = (event: any) => {
    setCursoActual(event.target.value);
    // console.log(apiResponse);
  }

  return (
    <>
      <Breadcrumb pageName="Lista de curso" />

      <div className="flex flex-col gap-10">
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="grid grid-cols-3 sm:grid-cols-3">
          {/* podria usarse para poner el nombre del curso */}
 
          <div className="mb-6 text-x1 z-20 bg-white dark:bg-form-input">
            <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
              name="courseid1"
              id="courseid1"
              value={cursoActual}
              onChange={handleCursoActual}
            >
              <option value={0} disabled>Selecciona un Curso</option>
              {opcionesCursos.map((opcion: any) => (
              <option key={opcion?.id} value={Number(opcion?.id)}>
                {opcion?.name}
                
              </option>
            ))}
            </select>
          </div>
          <div></div>
          <div className="justify-center">
            <button
              onClick={fetchReadStudents}
              className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
              type="submit"
            >
              Buscar
            </button>
          </div>
        </div>
			<div className="flex flex-col">
				<div className="grid grid-cols-5 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
					<div className="p-2.5 text-center xl:p-3">
						<h5 className="text-sm font-medium uppercase xsm:text-base">Nombre</h5>
					</div>
					<div className="p-2.5 text-center xl:p-3">
						<h5 className="text-sm font-medium uppercase xsm:text-base">Primer Apellido</h5>
					</div>
					<div className="p-2.5 text-center xl:p-3">
						<h5 className="text-sm font-medium uppercase xsm:text-base">Segundo Apellido</h5>
					</div>
					<div className="p-2.5 text-center xl:p-3">
						<h5 className="text-sm font-medium uppercase xsm:text-base">RUT</h5>
					</div>
					<div className="p-2.5 text-center xl:p-3">
						<h5 className="text-sm font-medium uppercase xsm:text-base"></h5>
					</div>
					{/* <div className="hidden p-2.5 text-center sm:block xl:p-5">
						<h5 className="text-sm font-medium uppercase xsm:text-base">Puntaje</h5>
					</div> */}
          <div className="p-2.5 text-center xl:p-3">
						<h5 className="text-sm font-medium uppercase xsm:text-base">

            </h5>
					</div>
				</div>

        {apiResponse.map((estudiante: any) => (
          estudiante?.type === "student" ? (
            <div key={estudiante.id} className="grid grid-cols-5 sm:grid-cols-5 border-b border-stroke dark:border-strokedark">
            
              <div className="flex items-center justify-center p-2.5 xl:p-5">
							  <p className="text-black dark:text-white">{estudiante?.firstname}</p>
						  </div>

						  <div className="flex items-center justify-center p-2.5 xl:p-5">
							  <p className="text-black dark:text-white">{estudiante?.lastname1}</p>
						  </div>

						  <div className="flex items-center justify-center p-2.5 xl:p-5">
							  <p className="text-black dark:text-white">{estudiante?.lastname2}</p>
						  </div>

						  <div className="flex items-center justify-center p-2.5 xl:p-5">
  							<p className="text-black dark:text-white">{estudiante?.rut}</p>
						  </div>

						  <div className="flex justify-center gap-4.5">
                <button
                  // onClick={fetchReadStudents}
                  className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-4 xl:px-4"
                  type="submit"
                >
                  Editar
                </button>
						  </div>
            </div>
          ) : (
            <div></div>
          )
          
        ))}				 
			</div>
		</div>

      </div>
    </>
  );
};

export default ListaCurso;
