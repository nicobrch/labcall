"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useState, useEffect } from "react";
import { Pregunta } from "@/pages/api/statistics/[id]";
import TableThree2 from "@/components/Tables/TableThree2";

const Estadisticas = ({
                        params: {cursoId},
                        } : { params: {
                            cursoId: string;
                        };
                      }) => {

    const [preguntas, setPreguntas] = useState<Pregunta[]>([]);

    useEffect(() => {
        // Realiza una solicitud GET a la API en "/api/statistics"
        fetch('/api/statistics/'+cursoId)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error al obtener los datos de la API');
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
    }, []);
    
    const headers = ["Id", "Pregunta", "Correctas", "Incorrectas", "Total"];

    return (
        <>
          <Breadcrumb pageName={"Estadisticas del curso "+cursoId}/>
          <TableThree2 headers={headers} data={preguntas}/>
        </>
    );
};

export default Estadisticas;
