"use client";
import React from "react";

// import Map from "../Maps/TestMap";

// without this the component renders on server and throws an error
import dynamic from "next/dynamic";

const DashEstudiante: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {/* <CardDataStats title="Mensaje del dia" total="Nunca consideres el estudio como una obligacion" rate="0.43%">
        
        </CardDataStats> */}

        <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
          <h2 className="font-semibold text-black dark:text-white">
            Instrucciones de Uso
          </h2>

          <p className="items-center justify-center mt-4.5">
            Bienvenido a la aplicacion de apoyo a la enseñanza de matematicas.
            Lea atentamente las preguntas que se le presentan para cada
            ejercicio. No olvide tener lapiz y papel para el desarrollo de los
            ejercicios. Las preguntas presentadas tienen una unica respuesta
            correcta, por favor, revise sus calculos antes de responder.
          </p>
          <br></br>
          <h3 className="items-center">Exito!</h3>
        </div>
        <div className="rounded-sm border border-stroke bg-primary py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark items-center justify-center">
          <h3 className="items-center font-medium text-white dark:text-white justify-center">
            <a href="/preguntas">Click aqui para responder test</a>
          </h3>
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
