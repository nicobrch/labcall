"use client";
import React from "react";
import { useRouter } from "next/navigation";

// import Map from "../Maps/TestMap";

// without this the component renders on server and throws an error
import dynamic from "next/dynamic";

const DashEstudiante: React.FC = () => {
  console.log("Profesor");

  const router = useRouter();

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {/* <CardDataStats title="Mensaje del dia" total="Nunca consideres el estudio como una obligacion" rate="0.43%">
        
        </CardDataStats> */}

        <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
          <h3 className="font-semibold text-black dark:text-white">
            Bienvenido a LABCAL
          </h3>

          <p className="items-center justify-center mt-4.5">
            Bienvenido a la aplicacion de apoyo a la enseñanza de matematicas.
            Esta herramienta es un complemento para las actividades que se
            realizan en las salas de clases. Por favor, revise las tarjetas a
            continuacion, contienen informacion importante para el uso de la
            aplicacion.
          </p>
        </div>

        <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
          <h3 className="font-semibold text-black dark:text-white">
            <a href="/preguntas">Estadísticas</a>
          </h3>
          <p className="items-center justify-center mt-4.5">
            La sección "Estadísticas" proporciona un completo resumen del
            rendimiento del curso, desglosado por cada eje de estudio. Esto te
            permite obtener una visión detallada y analítica de cómo se están
            desarrollando los estudiantes en cada aspecto del programa
            académico.
          </p>
          <br></br>
          <div className="flex justify-center gap-4.5">
            <button
              className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-95"
              type="submit"
              onClick={() => {
                router.push("/asignacion/VerPreguntas");
              }}
            >
              Ver Estadísticas
            </button>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
          <h3 className="font-semibold text-black dark:text-white">
            <a href="/preguntas">Items de Preguntas</a>
          </h3>
          <p className="items-center justify-center mt-4.5">
            La sección "Items de preguntas" es donde encontrarás el banco
            completo de preguntas disponibles. Desde aquí, puedes elegir y
            organizar preguntas para tus evaluaciones y cuestionarios. Es un
            recurso esencial para crear evaluaciones de alta calidad.
          </p>
          <br></br>
          <div className="flex justify-center gap-4.5">
            <button
              className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-95"
              type="submit"
              onClick={() => {
                router.push("/asignacion/VerPreguntas");
              }}
            >
              Ver preguntas
            </button>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
          <h3 className="font-semibold text-black dark:text-white">
            <a href="/preguntas">Asignar nodos</a>
          </h3>
          <p className="items-center justify-center mt-4.5">
            En la sección "Asignar nodos", puedes asignar a cada estudiante ejes
            de aprendizaje y habilidades específicas que desees que desarrollen
            a lo largo del curso. Esta herramienta es fundamental para
            personalizar la educación de manera efectiva.
          </p>
          <br></br>
          <div className="flex justify-center gap-4.5">
            <button
              className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-95"
              type="submit"
              onClick={() => {
                router.push("/asignacion/preguntas");
              }}
            >
              Asignar nodos
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/* <ChartOne /> */}
        {/* <ChartTwo />
        <ChartThree /> */}
        {/* <MapOne /> */}
        {/* <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div> */}
        {/* <ChatCard /> */}
      </div>
    </>
  );
};

export default DashEstudiante;
