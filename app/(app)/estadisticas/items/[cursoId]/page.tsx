"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useState, useEffect } from "react";
import ChartThree from "@/components/Charts/ChartThree";
import {Pregunta} from "@/pages/api/statistics/[id]";

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

    // Define los valores de labels y series
    const labels = ["Respuestas Correctas", "Respuestas Incorrectas"];
    const series = [8, 2];

    return (
        <>
            <Breadcrumb pageName={"Estadisticas del curso "+cursoId}/>
            <div className="grid grid-cols-2 gap-4">
                {preguntas.map((pregunta, key) => (
                    <div className="col-span-1">
                        <ChartThree enlace={"/estadisticas/"+cursoId+"/"+pregunta.type} nombre={pregunta.type} labels={labels} series={[pregunta.success, pregunta.failure]}/>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Estadisticas;
