"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useState, useEffect, useCallback } from "react";
import { Pregunta } from "@/pages/api/statistics/[id]";
import TableThree2 from "@/components/Tables/TableThree2";

const Estadisticas = ({
  params: { cursoId },
}: {
  params: {
    cursoId: string;
  };
}) => {
  const [preguntas, setPreguntas] = useState<Pregunta[]>([]);

  const callApi = useCallback(() => {
    fetch("/api/statistics/" + cursoId)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos de la API");
        }
        return response.json();
      })
      .then((data) => {
        // Almacena las preguntas en el estado
        setPreguntas(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [cursoId]);
  useEffect(() => {
    // Realiza una solicitud GET a la API en "/api/statistics"
    callApi();
  }, [callApi]);

  console.log(preguntas);

  const headers = [
    {
      colSpan: 1,
      key: "id",
      label: "Id",
    },
    {
      colSpan: 8,
      key: "text",
      label: "Pregunta",
      classNames: "text-start",
    },
    {
      colSpan: 1,
      key: "success",
      label: "Correctas",
    },
    {
      colSpan: 1,
      key: "failure",
      label: "Incorrectas",
    },
    {
      colSpan: 1,
      key: "totalresponses",
      label: "Total",
    },
  ];

  return (
    <>
      <Breadcrumb pageName={"Estadisticas del curso " + cursoId} />
      <TableThree2 headers={headers} data={preguntas} />
    </>
  );
};

export default Estadisticas;
