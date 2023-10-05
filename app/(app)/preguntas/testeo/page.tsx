"use client";
import React, { useState } from 'react';

function MiPagina() {
  const [respuesta, setRespuesta] = useState('');
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

  const handleEnviarRespuesta = () => {
    // Aquí puedes agregar la lógica para enviar la respuesta, por ejemplo, a través de una API o un servidor Node.js.
    // Una vez que tengas la respuesta, actualiza el estado de respuesta y muestra el botón "Mostrar respuesta".
    const respuestaEnviada = 'Esta es la respuesta enviada';
    setRespuesta(respuestaEnviada);
    setMostrarRespuesta(true);
  };

  const handleMostrarRespuesta = () => {
    // Aquí puedes implementar la lógica para mostrar la respuesta completa o realizar otras acciones.
    console.log(respuesta);
  };

  return (
    <div>
      <button onClick={handleEnviarRespuesta}>Enviar respuesta</button>
      {mostrarRespuesta && (
        <div>
          <button onClick={handleMostrarRespuesta}>Mostrar respuesta</button>
        </div>
      )}
    </div>
  );
}

export default MiPagina;
