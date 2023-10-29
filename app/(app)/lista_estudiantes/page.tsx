"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Modal from "@/components/Modal";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import ModalNodes from "@/components/ModalNodes";
import { useCallGetApi } from "@/hooks/useCallApi";
import AlertConfirmacion from "@/components/AlertConfirmacion";
import AlertError from "@/components/AlertError";
import { format } from "rut.js";
import { API_PATH } from "@/config";

/**
 * This component displays a list of estudiantes for a selected course.
 * It fetches the list of courses and estudiantes from an API and allows the user to select a course
 * and display the list of estudiantes for that course.
 *
 * @returns A React component that displays a list of estudiantes for a selected course.
 */

const ListaCurso = () => {
  const [opcionesCursos, setOpcionesCursos] = useState([]);
  const [cursoActual, setCursoActual] = useState(0);
  const [isModalOpenNode, setIsModalOpenNode] = useState(false);
  const [nombreCurso, setNombreCurso] = useState("");
  const [apiResponse, setApiResponse] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentRUT, setStudentRUT] = useState("");
  const [studentID, setStudentID] = useState(0);
  const [userId, setUserId] = useState(0);
  const rol = { teacher: "Profesor", student: "Estudiante" };
  const [showAlertOK, setShowAlertOK] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);

  const [nodes, callNodes, statusNodes, errorNodes] = useCallGetApi(
    "/node/by-user?user_id=" + userId
  );

  useEffect(() => {
    callNodes();
  }, [callNodes, userId]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async () => {
    // Lógica de envío de formulario o acciones relacionadas
    try {
      const response = await fetch(`${API_PATH}/student/delete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rut: studentRUT,
        }),
      });
      if (response.ok) {
        setStudentRUT("");
        //console.log("Estudiante eliminado correctamente");
        setShowAlertOK(true);
      } else {
        console.log("Error al eliminar");
        console.error("API Respondió mal :(");
        setShowAlertError(true);
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
      const response = await fetch(`${API_PATH}/course/students`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          course_id: Number(cursoActual),
        }),
      });
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
    fetch(`${API_PATH}/course/all`)
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

  function capitalizeString(inputString: string) {
    // Dividir la cadena en palabras
    const words = inputString.split(" ");

    // Capitalizar la primera letra de cada palabra y convertirlas a minúsculas el resto de las letras
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    // Unir las palabras nuevamente en una cadena
    const capitalizedString = capitalizedWords.join(" ");

    return capitalizedString;
  }

  return (
    <>
      <div className="absolute z-9999 top-5 right-5 ">
        <AlertConfirmacion
          title={"Estudiante eliminado con éxito!"}
          body={"Puedes volver a agregalo si lo deseas."}
          show={showAlertOK}
          setShow={setShowAlertOK}
        ></AlertConfirmacion>
        <AlertError
          title={"No se puedo eliminar estudiante :("}
          body={"Intente nuevamente."}
          show={showAlertError}
          setShow={setShowAlertError}
        ></AlertError>
      </div>
      <Breadcrumb pageName="Lista de Estudiantes" />

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
                    setNombreCurso((selectedCurso as any).name);
                  } else {
                    setNombreCurso("");
                  }
                }}
              >
                <option value={0} disabled>
                  Selecciona un Curso
                </option>
                {Array.isArray(opcionesCursos) &&
                  opcionesCursos.map((opcion: any) => (
                    <option key={opcion?.id} value={Number(opcion?.id)}>
                      {opcion?.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col overflow-auto">
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

            {Array.isArray(apiResponse) &&
              apiResponse.map((estudiante: any) => (
                <div
                  key={estudiante?.id}
                  className="grid grid-cols-6 sm:grid-cols-6 border-b border-stroke dark:border-strokedark"
                >
                  <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-black dark:text-white">
                      {capitalizeString(String(estudiante?.firstname))}
                    </p>
                  </div>

                  <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-black dark:text-white">
                      {capitalizeString(String(estudiante?.lastname1))}
                    </p>
                  </div>

                  <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-black dark:text-white">
                      {capitalizeString(String(estudiante?.lastname2))}
                    </p>
                  </div>

                  <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-black dark:text-white">
                      {format(estudiante?.rut)}
                    </p>
                  </div>

                  <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-black dark:text-white">
                      {(rol as any)[(estudiante as any).type]}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-3">
                    {/* boton EDITAR ESTUDIANTE */}
                    <button
                      onClick={() => {
                        const id = estudiante?.id;
                        setStudentID(id);
                      }}
                      className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-4 xl:px-4 w-15"
                      type="submit"
                    >
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M21.1213 2.70705C19.9497 1.53548 18.0503 1.53547 16.8787 2.70705L15.1989 4.38685L7.29289 12.2928C7.16473 12.421 7.07382 12.5816 7.02986 12.7574L6.02986 16.7574C5.94466 17.0982 6.04451 17.4587 6.29289 17.707C6.54127 17.9554 6.90176 18.0553 7.24254 17.9701L11.2425 16.9701C11.4184 16.9261 11.5789 16.8352 11.7071 16.707L19.5556 8.85857L21.2929 7.12126C22.4645 5.94969 22.4645 4.05019 21.2929 2.87862L21.1213 2.70705ZM18.2929 4.12126C18.6834 3.73074 19.3166 3.73074 19.7071 4.12126L19.8787 4.29283C20.2692 4.68336 20.2692 5.31653 19.8787 5.70705L18.8622 6.72357L17.3068 5.10738L18.2929 4.12126ZM15.8923 6.52185L17.4477 8.13804L10.4888 15.097L8.37437 15.6256L8.90296 13.5112L15.8923 6.52185ZM4 7.99994C4 7.44766 4.44772 6.99994 5 6.99994H10C10.5523 6.99994 11 6.55223 11 5.99994C11 5.44766 10.5523 4.99994 10 4.99994H5C3.34315 4.99994 2 6.34309 2 7.99994V18.9999C2 20.6568 3.34315 21.9999 5 21.9999H16C17.6569 21.9999 19 20.6568 19 18.9999V13.9999C19 13.4477 18.5523 12.9999 18 12.9999C17.4477 12.9999 17 13.4477 17 13.9999V18.9999C17 19.5522 16.5523 19.9999 16 19.9999H5C4.44772 19.9999 4 19.5522 4 18.9999V7.99994Z"
                          fill="#FFFFFF"
                        />
                      </svg>
                    </button>

                    {/* boton VER NODOS */}
                    <button
                      // onClick={}
                      className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-4 xl:px-4 w-15"
                      type="submit"
                      onClick={() => {
                        setUserId(estudiante?.id);
                        setIsModalOpenNode(true);
                      }}
                    >
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 2c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1H8v2h5V9c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1v-1H8v6h5v-1c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1v-1H7c-.552 0-1-.448-1-1V8H4c-.552 0-1-.448-1-1V3c0-.552.448-1 1-1h6zm9 16h-4v2h4v-2zm0-8h-4v2h4v-2zM9 4H5v2h4V4z"
                          fill="#FFFFFF"
                        />
                      </svg>
                    </button>

                    {/* boton ELIMINAR ESTUDIANTE */}
                    <button
                      className="inline-flex items-center justify-center rounded-md py-4 px-2 hover:bg-opacity-90 lg:px-4 xl:px-4 w-15 bg-[#F3595E]"
                      onClick={() => {
                        setStudentRUT(estudiante?.rut); // Guarda el RUT del estudiante en el estado
                        openModal();
                      }}
                    >
                      <svg
                        width="25"
                        height="25"
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
                    <ModalNodes
                      title="Nodos de estudiante"
                      body={"hola"}
                      show={isModalOpenNode}
                      setShow={setIsModalOpenNode}
                      onSubmit={() => {}}
                      nodes={nodes}
                      name={estudiante?.name}
                      callNodes={callNodes}
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
