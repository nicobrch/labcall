"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useState, useEffect, useCallback } from "react";
import {IQuestion} from "@/backend/interfaces/question";
import TableThree2 from "@/components/Tables/TableThree2";

const Estadisticas = ({
  params: { cursoId },
}: {
  params: {
    cursoId: string;
  };
}) => {
  const [preguntas, setPreguntas] = useState<IQuestion[]>([]);

  const callApi = useCallback(() => {
    fetch("/api/statistics/item?course_id=" + cursoId)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos de la API");
        }
        return response.json();
      })
      .then((data) => {
        // Almacena las preguntas en el estado
        console.log(data);
        
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

  const headers = [
    {
      colSpan: 1,
      key: "id",
      label: "Id",
    },
    {
      colSpan: 8,
      key: "questionText",
      label: "Pregunta",
      classNames: "text-start",
    },
    {
      colSpan: 1,
      key: "correctas",
      label: "Correctas",
    },
    {
      colSpan: 1,
      key: "failure",
      label: "Incorrectas",
      render: (pregunta: any) => (
        <span>{pregunta.total - parseInt(pregunta.correctas)}</span>
      ),
    },
    {
      colSpan: 1,
      key: "total",
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
