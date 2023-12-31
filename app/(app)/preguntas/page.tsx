"use client";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useState, useEffect } from "react";
var Latex = require("react-latex");

const Pregunta = () => {
  const [data, setData] = useState(null);
  const [userData] = useLocalStorage("user", null);

  const [isChecked1, setIsChecked1] = useState<boolean>(false);
  const [isChecked2, setIsChecked2] = useState<boolean>(false);
  const [isChecked3, setIsChecked3] = useState<boolean>(false);
  const [isChecked4, setIsChecked4] = useState<boolean>(false);

  const [mostrarRespuesta, setMostrarRespuesta] = useState<boolean>(false);
  const [enviarRespuestaDeshabilitado, setEnviarRespuestaDeshabilitado] = useState(false);
  const [mostrarExplicacion, setMostrarExplicacion] = useState(false);
  const [respuestaUsuario, setRespuestaUsuario] = useState("");
  const [justificacion, setJustificacion] = useState("");
  const [opcionesDeshabilitadas, setOpcionesDeshabilitadas] = useState(false);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(false);
  const [esCorrecta, setEsCorrecta] = useState(false);
  const [student_id, setStudent_id] = useState(userData?.id || 1);
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const alMenosUnaSeleccionada = isChecked1 || isChecked2 || isChecked3 || isChecked4;
    setRespuestaSeleccionada(alMenosUnaSeleccionada);
  }, [isChecked1, isChecked2, isChecked3, isChecked4]);

  useEffect(() => {
    const fetchData = async () => {
      const node_id = 1;
      try {
        const response = await fetch(
          `http://localhost:3000/api/question/student?student_id=${student_id}&node_id=${node_id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          console.log("API Respondió OK!");
          const responseData = await response.json();
        //   console.log(responseData);
          setData(responseData); // Actualiza el estado con los datos de la API
        } else {
          console.error("API Respondió mal :(");
        }
      } catch (error) {
        console.error("Connection Error:", error);
      }
    };
    fetchData(); // Llama a la función para cargar los datos de la API
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const fetchRespuesta = async () => {
    // estos parametros deberian entrar como argumentos de la funcion
    const node_id = 1;
    try {
      const response = await fetch(
        "http://localhost:3000/api/question/response",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            student_id: student_id,
            question_id: data?.id,
            alternative_id: respuestaUsuario,
            is_correct: esCorrecta,
            save_response: 1,
          }),
        }
      );
      if (response.ok) {
        console.log("Enviada y guardada en DB");
        // esta respuesta contiene la siguiente pregunta
        const responseData = await response.json();
        // se debe actualizar el estado con la siguiente pregunta
        setResponseData(responseData);
      } else {
        console.log("Error al guardar");
        console.error("API Respondió mal :(");
      }
    } catch (error) {
      console.error("Connection Error:", error);
    }
  };

  const handleEnviarRespuesta = () => {
    setEnviarRespuestaDeshabilitado(true);
    const respuestaIngresada = respuestaUsuario.trim();
    setRespuestaUsuario(respuestaIngresada);
    // se bloquean las opciones para cambiar la respuesta y se activa el boton para mostrar la respuesta
    setMostrarRespuesta(true);
    setOpcionesDeshabilitadas(true);
    fetchRespuesta();
  };

  const handleMostrarRespuesta = () => {
    setMostrarExplicacion(true); // Mostrar la explicación al hacer clic
  };

  const isFinish = () => {
    setMostrarExplicacion(false);
    setMostrarRespuesta(false);
    setIsChecked1(false);
    setIsChecked2(false);
    setIsChecked4(false);
    setIsChecked3(false);
    setEnviarRespuestaDeshabilitado(false);
    setRespuestaSeleccionada(false); 
    setRespuestaUsuario("");
    setJustificacion("");
    setOpcionesDeshabilitadas(false);
    setEsCorrecta(false);
  };

  const handleSiguientePregunta = () => {
    setData(responseData?.next_question);
    isFinish();
  }

  return (
    <>
      <div>
        {data ? (
          // Renderiza los datos cuando la promesa se completa
          <div>
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
              integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV"
              crossOrigin="anonymous"
            ></link>
            <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
              <div className="flex flex-col gap-9">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                  <h2 className="font-medium text-black dark:text-white">
                    Pregunta {data?.id}
                  </h2>
                </div>
                <div className="bg-white px-7.5 dark:border-strokedark dark:bg-boxdark">
                  <p className="items-center justify-center mt-4.5">
                    <Latex>{data?.questionText}</Latex>
                  </p>
                  {/* imagen : pendiente */}

                  <div className="flex flex-col gap-5.5 p-6.5">
                    {/* respuesta 1 */}
                    <div>
                      <label
                        htmlFor="radioOption1"
                        className="flex cursor-pointer select-none items-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="radioOption1"
                            className="sr-only"
                            onChange={() => {
                              if (!opcionesDeshabilitadas) {
                                setRespuestaUsuario(
                                  "" + data?.alternatives[0].id
                                );
                                setJustificacion(data?.alternatives[0].feedback);
                                setEsCorrecta(data?.alternatives[0].isCorrect);
                                setIsChecked1(!isChecked1);
                                setIsChecked2(false);
                                setIsChecked3(false);
                                setIsChecked4(false);
                              }
                            }}
                            disabled={opcionesDeshabilitadas}
                          />
                          <div
                            className={`mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${
                              isChecked1 && "border-primary"
                            }`}
                          >
                            <span
                              className={`h-2.5 w-2.5 rounded-full bg-transparent ${
                                isChecked1 && "!bg-primary"
                              }`}
                            >
                              {" "}
                            </span>
                          </div>
                        </div>

                        <Latex>{data.alternatives[0].answerText}</Latex>
                      </label>
                    </div>
                    {/* respuesta 2 */}
                    <div>
                      <label
                        htmlFor="radioOption2"
                        className="flex cursor-pointer select-none items-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="radioOption2"
                            className="sr-only"
                            onChange={() => {
                              if (!opcionesDeshabilitadas) {
                                setRespuestaUsuario(
                                  data.alternatives[1].id + ""
                                );
                                setJustificacion(data.alternatives[1].feedback);
                                setEsCorrecta(data.alternatives[1].isCorrect);
                                setIsChecked2(!isChecked2);
                                setIsChecked1(false);
                                setIsChecked3(false);
                                setIsChecked4(false);
                              }
                            }}
                            disabled={opcionesDeshabilitadas}
                          />
                          <div
                            className={`mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${
                              isChecked2 && "border-primary"
                            }`}
                          >
                            <span
                              className={`h-2.5 w-2.5 rounded-full bg-transparent ${
                                isChecked2 && "!bg-primary"
                              }`}
                            >
                              {" "}
                            </span>
                          </div>
                        </div>
                        <Latex>{data.alternatives[1].answerText}</Latex>
                      </label>
                    </div>
                    {/* respuesta 3 */}
                    <div>
                      <label
                        htmlFor="radioOption3"
                        className="flex cursor-pointer select-none items-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="radioOption3"
                            className="sr-only"
                            onChange={() => {
                              if (!opcionesDeshabilitadas) {
                                setRespuestaUsuario(
                                  data.alternatives[2].id + ""
                                );
                                setJustificacion(data.alternatives[2].feedback);
                                setEsCorrecta(data.alternatives[2].isCorrect);
                                setIsChecked3(!isChecked3);
                                setIsChecked1(false);
                                setIsChecked2(false);
                                setIsChecked4(false);
                              }
                            }}
                            disabled={opcionesDeshabilitadas}
                          />
                          <div
                            className={`mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${
                              isChecked3 && "border-primary"
                            }`}
                          >
                            <span
                              className={`h-2.5 w-2.5 rounded-full bg-transparent ${
                                isChecked3 && "!bg-primary"
                              }`}
                            >
                              {" "}
                            </span>
                          </div>
                        </div>
                        <Latex>{data.alternatives[2].answerText}</Latex>
                      </label>
                    </div>
                    {/* respuesta 4 */}
                    <div>
                      <label
                        htmlFor="radioOption4"
                        className="flex cursor-pointer select-none items-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="radioOption4"
                            className="sr-only"
                            onChange={() => {
                              if (!opcionesDeshabilitadas) {
                                setRespuestaUsuario(
                                  data.alternatives[3].id + ""
                                );
                                setJustificacion(data.alternatives[3].feedback);
                                setEsCorrecta(data.alternatives[3].isCorrect);
                                setIsChecked4(!isChecked4);
                                setIsChecked1(false);
                                setIsChecked2(false);
                                setIsChecked3(false);
                              }
                            }}
                            disabled={opcionesDeshabilitadas}
                          />
                          <div
                            className={`mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${
                              isChecked4 && "border-primary"
                            }`}
                          >
                            <span
                              className={`h-2.5 w-2.5 rounded-full bg-transparent ${
                                isChecked4 && "!bg-primary"
                              }`}
                            >
                              {" "}
                            </span>
                          </div>
                        </div>
                        <Latex>{data.alternatives[3].answerText}</Latex>
                      </label>
                    </div>
                  </div>
                  {/* pendiente */}
                  <div className="flex justify-center gap-4.5">
                    <button
                      onClick={handleEnviarRespuesta}
                      disabled={!respuestaSeleccionada}
                      className={`flex justify-center rounded bg-primary py-2 px-6 font-medium   
                            ${
                              enviarRespuestaDeshabilitado === true
                                ? "border-stroke bg-transparent outline-none focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary dark:disabled:bg-black"
                                : "text-gray hover:bg-opacity-95"
                            }
                            `}
                      id="enviarRespuesta"
                    >
                      Enviar respuesta
                    </button>
                    {mostrarRespuesta && (
                      <div>
                        <button
                          onClick={handleMostrarRespuesta}
                          className={`flex justify-center rounded bg-primary py-2 px-6 font-medium 
                            ${
                              mostrarExplicacion === true
                                ? "border-stroke bg-transparent outline-none focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary dark:disabled:bg-black"
                                : "text-gray hover:bg-opacity-95"
                            }
                            `}
                        >
                          Mostrar explicación
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                {mostrarExplicacion && (
                  <div>
                    <div className="bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
                      <h2 className="font-semibold text-black dark:text-white">
                        {" "}
                        Explicacion{" "}
                      </h2>
                      <p className="items-center justify-center mt-4.5">
                        <Latex>{justificacion}</Latex>
                      </p>
                    </div>
                    <div className="bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
                      <button
                        onClick={handleSiguientePregunta}
                        className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-95"
                      >
                        Siguiente pregunta
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          // Muestra un mensaje de carga mientras se espera la respuesta de la API
          <p>Cargando pregunta...</p>
        )}
      </div>
    </>
  );
};

export default Pregunta;
