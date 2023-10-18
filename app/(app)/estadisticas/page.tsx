"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useState, useEffect } from "react";
import TableThree from "@/components/Tables/TableThree";
import {CursoItem} from "@/pages/api/statistics";

const Estadisticas = () => {

    const [cursos, setCursos] = useState<CursoItem[]>([]);

    useEffect(() => {
        // Realiza una solicitud GET a la API en "/api/statistics"
        fetch('/api/statistics')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error al obtener los datos de la API');
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
            <Breadcrumb pageName="Estadisticas de Cursos"/>
            <TableThree headers={headers} data={cursos}/>
        </>
    );
};

export default Estadisticas;
