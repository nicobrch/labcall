import Link from "next/link";
import React from "react";

const CongratulationsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">¡Felicidades!</h1>
        <p className="text-gray-600">
          Has respondido todas las preguntas. ¡Buen trabajo!
        </p>
        <Link
          href={"/"}
          className="mt-6 bg-blue-500 text-primary p-2 rounded hover:bg-blue-600"
        >
          Regresar al inicio
        </Link>
      </div>
    </div>
  );
};

export default CongratulationsPage;
