"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Modal from "@/components/Modal";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

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
  const [nombreCurso, setNombreCurso] = useState("");
  const [apiResponse, setApiResponse] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentRUT, setStudentRUT] = useState("");
  const [studentID, setStudentID] = useState(0);
  const rol = { teacher: "Profesor", student: "Estudiante" };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async () => {
    // Lógica de envío de formulario o acciones relacionadas
    try {
      const response = await fetch("http://localhost:3000/api/student/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rut: studentRUT,
        }),
      });
      console.log(response);
      if (response.ok) {
        setStudentRUT("");
        console.log("Estudiante eliminado correctamente");
      } else {
        console.log("Error al eliminar");
        console.error("API Respondió mal :(");
      }
    } catch (error) {
      console.error("Connection Error:", error);
    }
    fetchReadStudents();
    closeModal();
  };

  // llamada a la API para obtener los estudiantes del curso especifico
  const fetchReadStudents = useCallback(async () => {
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
      if (response.ok) {
        const responseData = await response.json();
        setApiResponse(responseData);
      } else {
        console.error("API Respondió mal :(");
        const responseData = await response.json();
        setApiResponse(responseData.message);
      }
    } catch (error) {
      console.error("Connection Error:", error);
    }
  }, [cursoActual]);

  // llamada a la API para obtener los cursos (dentro estan los estudiantes)
  useEffect(() => {
    fetch("http://localhost:3000/api/course/all")
      .then((response) => response.json())
      .then((data) => {
        setOpcionesCursos(data);
        setCursoActual(data[0]?.id);
      })
      .catch((error) => {
        console.error("Error al obtener las opciones desde la API:", error);
      });
  }, []);

  useEffect(() => {
    fetchReadStudents();
  }, [fetchReadStudents]);

  const handleCursoActual = (event: any) => {
    setCursoActual(event.target.value);
  };

  const router = useRouter();
  const handleEditClick = () => {
    router.push(`/editStudent?id=${studentID}&cursoActual=${nombreCurso}`);
  };

  useEffect(() => {
    if (studentID !== 0) {
      handleEditClick();
    }
  }, [studentID]);

  return (
    <>
      <Breadcrumb pageName="Lista de curso" />

      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="grid grid-cols-3 sm:grid-cols-3">
            {/* podria usarse para poner el nombre del curso */}

            <div className="mb-6 text-x1 z-20 bg-white dark:bg-form-input">
              <select
                className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                name="courseid1"
                id="courseid1"
                value={cursoActual}
                onChange={(e) => {
                  const selectedCursoId = e.target.value;
                  setCursoActual(Number(selectedCursoId));

                  // Encuentra el nombre del curso seleccionado y actualiza nombreCurso
                  const selectedCurso = opcionesCursos.find(
                    (opcion: any) => opcion.id === Number(selectedCursoId)
                  );
                  if (selectedCurso) {
                    setNombreCurso(selectedCurso?.name);
                  } else {
                    setNombreCurso("");
                  }
                }}
              >
                <option value={0} disabled>
                  Selecciona un Curso
                </option>
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
            <div className="grid grid-cols-6 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6 overflow-auto">
              <div className="p-2.5 text-center xl:p-3">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Nombre
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-3">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Primer Apellido
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-3">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Segundo Apellido
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-3">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  RUT
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-3">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Rol
                </h5>
              </div>
              <div className="hidden p-2.5 text-center sm:block xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base"></h5>
              </div>
              <div className="p-2.5 text-center xl:p-3">
                <h5 className="text-sm font-medium uppercase xsm:text-base"></h5>
              </div>
            </div>

            {apiResponse.map((estudiante: any) => (
              <div
                key={estudiante?.id}
                className="grid grid-cols-6 sm:grid-cols-6 border-b border-stroke dark:border-strokedark"
              >
                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="text-black dark:text-white">
                    {estudiante?.firstname}
                  </p>
                </div>

                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="text-black dark:text-white">
                    {estudiante?.lastname1}
                  </p>
                </div>

                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="text-black dark:text-white">
                    {estudiante?.lastname2}
                  </p>
                </div>

                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="text-black dark:text-white">
                    {estudiante?.rut}
                  </p>
                </div>

                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="text-black dark:text-white">
                    {rol[estudiante?.type]}
                  </p>
                </div>

                <div className="flex justify-center gap-4.5 py-2">
                  <button
                    onClick={() => {
                      const id = estudiante?.id;
                      setStudentID(id);
                    }}
                    className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-4 xl:px-4"
                    type="submit"
                  >
                    Editar
                  </button>
                  <button
                    // onClick={}
                    className="inline-flex items-center justify-center rounded-md bg-primary py-1 px-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-4 xl:px-4"
                    type="submit"
                  >
                    <span className="hidden md:inline-block mr-2">Ver </span>
                    Nodos
                  </button>
                  <button
                    // onClick={fetchReadStudents}
                    className="inline-flex items-center justify-center rounded-md bg-red py-4 px-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-4 xl:px-4 color-eliminar"
                    onClick={() => {
                      setStudentRUT(estudiante?.rut); // Guarda el RUT del estudiante en el estado
                      openModal();
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <Modal
                    title="ADVERTENCIA"
                    body="Esta a punto de eliminar un estudiante del curso, ¿Desea continuar? (Escriba 'Eliminar' para confirmar)"
                    show={isModalOpen}
                    setShow={setIsModalOpen}
                    onSubmit={handleSubmit}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaCurso;
