"use client";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartThree from "../Charts/ChartThree";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
import fetch from "node-fetch";

// import Map from "../Maps/TestMap";

// without this the component renders on server and throws an error
import dynamic from "next/dynamic";

const DashEstudiante: React.FC = () => {
  // funcion para obtener test con menor puntaje

  // funcion para obtener frase del dia

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
            {/* pendiente */}
            Bienvenido a la aplicacion de apoyo a la enseñanza de matematicas,
            para comenzar a usar la aplicacion, debes responder el test de
            diagnostico, el cual se encuentra en la seccion de test.
          </p>
        </div>
        {/* frase del dia */}
        {/* <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
          <h2 className="font-semibold text-black dark:text-white">
            Frase del dia
          </h2>
          <p id="fraseDelDia" className="items-center justify-center mt-4.5">
            
          </p>
          <h4 className="mt-3"> -  </h4>
        </div> */}

        <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
          <h2 className="font-semibold text-black dark:text-white">
            Recomendación de estudio
          </h2>

          <p className="items-center justify-center mt-4.5">
            {/* pendiente */}
            Tu puntaje mas bajo es XX, por lo que se recomienda que estudies la
            materia YY
          </p>
        </div>
        {/* pendiente: puede que esto se elimine en la version alpha */}
        <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark items-center justify-center">
          <h3 className="font-semibold text-black dark:text-white">
            Tu rango actual: Aspirante Matematico (F)
          </h3>
        </div>

        <div className="rounded-sm border border-stroke bg-primary py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark items-center justify-center">
          <h3 className="items-center font-medium text-white dark:text-white justify-center">
            <a href="/preguntas">Click aqui para responder test</a>
          </h3>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
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
