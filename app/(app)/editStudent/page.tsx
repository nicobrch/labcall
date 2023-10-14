"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useState, useEffect } from "react";
import Link from "next/link";
import { NextApiRequest, NextApiResponse } from "next";
import { useSearchParams, useRouter } from "next/navigation";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "LabCal",
  // other metadata
};
// pendiente
// se debe cargar la informacion del estudiante en los campos respectivos
// se debe agregar un modal para cambiar la contraseña

const EditStudent = () => {
  const studentID = useSearchParams()?.get('id');
  const [opcionesCursos, setOpcionesCursos] = useState([]);
  const [apiResponse, setApiResponse] = useState([]);
  const router = useRouter();

  // funcion para traer la lista de cursos disponibles
  // llamada a la API para obtener los cursos
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


  // funcion para obtener los datos del estudiante mediante llamada a API
  useEffect(() => {
    fetch(
      "http://localhost:3000/api/student/read",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: studentID,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setApiResponse(data);
        // console.log(apiResponse);
      })
      .catch((error) => {
        console.error('Error al obtener la data desde la API:', error);
      });
  }, []);

  // const fetchReadStudentData = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:3000/api/student/data",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           id: studentID,
  //         }),
  //       }
  //     );
  //     // console.log(response);
  //     if (response.ok) {
  //       const responseData = await response.json();
  //       setApiResponse(responseData);
  //       console.log(apiResponse);
  //     } else {
  //       console.log("Error al obtener data del usuario");
  //       console.error("API Respondió mal :(");
  //       const responseData = await response.json();
  //       setApiResponse(responseData.message);
  //     }
  //   } catch (error) {
  //     console.error("Connection Error:", error);
  //   }
  // }



  return (
    <>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Modificar estudiante"/>

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Informacion Personal
                </h3>
              </div>
              <div className="p-7">
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">

                    {/* nombre */}
                    <div className="w-full sm:w-1/3">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="firstname"
                      >
                        Nombre
                      </label>
                      <div className="relative">
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          name="firstname"
                          id="firstname"
                          defaultValue={apiResponse?.firstname}
                        />
                      </div>
                    </div>

                    {/* primer apellido */}
                    <div className="w-full sm:w-1/3">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="lastname1"
                      >
                        Primer apellido
                      </label>
                      <div className="relative">
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          name="lastname1"
                          id="lastname1"
                          defaultValue={apiResponse?.lastname1}
                        />
                      </div>
                    </div>

                    {/* segundo apellido */}
                    <div className="w-full sm:w-1/3">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="lastname2"
                      >
                        Segundo apellido
                      </label>
                      <div className="relative">
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          name="lastname2"
                          id="lastname2"
                          defaultValue={apiResponse?.lastname2}
                        />
                      </div>
                    </div>

                    
                  </div>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                  {/* Curso */}
                  <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="curso"
                      >
                        Curso
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="curso"
                        name="curso"
                        id="curso"
                        defaultValue={apiResponse?.course_id}
                      />
                    </div>
                  {/* RUT */}
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="rut"
                      >
                        RUT
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="rut"
                        name="rut"
                        id="rut"
                        defaultValue={apiResponse?.rut}
                      />
                    </div>
                  </div>

                  {/* correo: pendiente, no se sabe si sera incluido */}
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="emailAddress"
                    >
                      Correo Electronico
                    </label>
                    <div className="relative">
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="email"
                        name="emailAddress"
                        id="emailAddress"
                        defaultValue={apiResponse?.email}
                      />
                    </div>
                  </div>
                
                  {/* 
                  pendiente: falta un modal que se abra cuando se desee modificar la contrasena
                  se debe pedir la contrasena actual y la repeticion de la nueva contrasena
                  */}
                  <div className="flex justify-center gap-4.5">
                    
                    <button
                      className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-95"
                      type="submit"
                    >
                      Modificar contraseña
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
