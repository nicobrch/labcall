"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useState, useEffect } from "react";
import TableThree from "@/components/Tables/TableThree";
import { CursoItem } from "@/pages/api/statistics";
import { ICourse } from "@/backend/interfaces/course";
import Link from "next/link";

const Estadisticas = () => {
  const [cursos, setCursos] = useState<ICourse[]>([]);

  useEffect(() => {
    // Realiza una solicitud GET a la API en "/api/statistics"
    fetch("/api/statistics")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos de la API");
        }
        return response.json();
      })
      .then((data) => {
        // Almacena las preguntas en el estado
        setCursos(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Valores de la tabla
  const headers: string[] = ["Curso", "Última Actualización", "Acciones"];

  return (
    <>
      <Breadcrumb pageName="Estadisticas de Cursos" />
      <TableThree
        headers={[
          {
            key: "name",
            title: "Curso",
            colSpan: 3,
            classNames: "w-1/5 text-start",
          },
          {
            key: "description",
            title: "Descripción",
            classNames: "w-2/5 text-start",
            colSpan: 10,
          },
          {
            key: "actions",
            title: "Acciones",
            classNames: "w-2/5",
            colSpan: 4,
            render: (curso: ICourse) => (
              <>
                {/* <Link
                  href={"/estadisticas/nodos/" + curso.id}
                  className=" items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 mr-4 mb-4"
                >
                  Nodo
                </Link> */}
                <Link
                  href={"/estadisticas/items/" + curso.id}
                  className=" items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Por Items
                </Link>
              </>
            ),
          },
        ]}
        data={cursos}
      />
    </>
  );
};

export default Estadisticas;
