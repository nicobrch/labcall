"use client";
import { API_PATH } from "@/config";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { literal } from "sequelize";
import Image from "next/image";
var Latex = require("react-latex");

const Pregunta = () => {
  const [alternatives, setAlternatives] = useState([]);

  const [userData] = useLocalStorage("user", null);

  const [isChecked1, setIsChecked1] = useState<boolean>(false);
  const [isChecked2, setIsChecked2] = useState<boolean>(false);
  const [isChecked3, setIsChecked3] = useState<boolean>(false);
  const [isChecked4, setIsChecked4] = useState<boolean>(false);

  const [mostrarRespuesta, setMostrarRespuesta] = useState<boolean>(false);
  const [enviarRespuestaDeshabilitado, setEnviarRespuestaDeshabilitado] =
    useState(false);
  const [mostrarExplicacion, setMostrarExplicacion] = useState(false);
  const [respuestaUsuario, setRespuestaUsuario] = useState("");
  const [justificacion, setJustificacion] = useState("");
  const [opcionesDeshabilitadas, setOpcionesDeshabilitadas] = useState(false);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(false);
  const [esCorrecta, setEsCorrecta] = useState(false);
  const [student_id, setStudent_id] = useState((userData as any)?.id || 1);
  const [preguntas, setPreguntas] = useState([]);
  const [indicePreguntaActual, setIndicePreguntaActual] = useState(0);
  const [idPregunta, setIdPregunta] = useState(0);
  const [nextQuestion, setNextQuestion] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const alMenosUnaSeleccionada =
      isChecked1 || isChecked2 || isChecked3 || isChecked4;
    setRespuestaSeleccionada(alMenosUnaSeleccionada);
  }, [isChecked1, isChecked2, isChecked3, isChecked4]);

  const fetchAlternatives = async (idPreguntaActual: number) => {
    try {
      const response = await fetch(
        `/api/question/alternative?question_id=${idPreguntaActual}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("API alternativas Respondió OK!");
        const responseData = await response.json();
        setAlternatives(responseData);
      } else {
        console.error("API Respondió mal :(");
      }
    } catch (error) {
      console.error("Connection Error Alternative:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `/api/question/student?student_id=${student_id}`,
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
        console.log(responseData);
        // no quedan nodos ni preguntas por responder
        if (responseData === 0) {
          router.push("/finalizar");
        }
        let indiceAleatorio = Math.floor(
          Math.random() * responseData?.questions.length
        );
        // manejar la no existencia de preguntas pendientes
        if (responseData?.questions.length === 0) {
          router.push("/finalizar");
        } else {
          indiceAleatorio = Math.floor(
            Math.random() * responseData?.questions.length
          );
        }
        setPreguntas(responseData.questions[indiceAleatorio]);
        fetchAlternatives(responseData.questions[indiceAleatorio].id);
        // manejar la no existencia de nodos pendientes
      } else {
        console.error("API Respondió mal :(");
      }
    } catch (error) {
      console.error("Connection Error Question:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchRespuesta = async () => {
    try {
      console.log(preguntas);

      console.log({
        student_id: student_id,
        question_id: idPregunta,
        node_id: (preguntas as any)?.node_id,
        alternative_id: respuestaUsuario,
        is_correct: esCorrecta,
        save_response: 1,
      });

      const response = await fetch(`/api/question/response`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          student_id: student_id,
          question_id: (preguntas as any).id,
          node_id: (preguntas as any)?.node_id,
          alternative_id: respuestaUsuario,
          is_correct: esCorrecta,
          save_response: 1,
        }),
      });
      if (response.ok) {
        setNextQuestion((response as any).json());
        console.log("Enviada y guardada en DB");
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
    isFinish();
    fetchData();
  };

  return (
    <>
      <div>
        {preguntas && alternatives.length > 0 ? (
          <div>
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
              integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV"
              crossOrigin="anonymous"
            ></link>
            <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
              <div className="flex flex-col gap-9">
                <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
                  <h2 className="font-medium text-black dark:text-white">
                    Pregunta {(preguntas as any).id}
                  </h2>
                </div>
                <div className="col-span-12 rounded-sm border border-stroke bg-white px-7 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
                  <p className="items-center justify-center ">
                    <Latex>{(preguntas as any).questionText}</Latex>
                    {(preguntas as any).imageURL &&
                    (preguntas as any).imageURL !== "null" ? (
                      <div className="w-full">
                        {/* // eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={(preguntas as any).imageURL}
                          alt="Descripción"
                          className="w-full" // Aplica las clases de Tailwind aquí
                        />
                        {/* <Image
                          src={(preguntas as any).imageURL}
                          alt="Descripción"
                        /> */}
                      </div>
                    ) : null}
                  </p>
                </div>

                <div className="flex flex-col gap-5.5 p-6.5 col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
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
                                "" + (alternatives[0] as any)?.id
                              );
                              setJustificacion(
                                (alternatives[0] as any)?.feedback
                              );
                              setEsCorrecta(
                                (alternatives[0] as any)?.isCorrect
                              );
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

                      <Latex>{(alternatives[0] as any)?.answerText}</Latex>
                    </label>
                  </div>

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
                                (alternatives[1] as any)?.id + ""
                              );
                              setJustificacion(
                                (alternatives[1] as any)?.feedback
                              );
                              setEsCorrecta(
                                (alternatives[1] as any)?.isCorrect
                              );
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
                      <Latex>{(alternatives[1] as any)?.answerText}</Latex>
                    </label>
                  </div>

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
                                (alternatives[2] as any)?.id + ""
                              );
                              setJustificacion(
                                (alternatives[2] as any)?.feedback
                              );
                              setEsCorrecta(
                                (alternatives[2] as any)?.isCorrect
                              );
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
                      <Latex>{(alternatives[2] as any)?.answerText}</Latex>
                    </label>
                  </div>
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
                                (alternatives[3] as any)?.id + ""
                              );
                              setJustificacion(
                                (alternatives[3] as any)?.feedback
                              );
                              setEsCorrecta(
                                (alternatives[3] as any)?.isCorrect
                              );
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
                      <Latex>{(alternatives[3] as any)?.answerText}</Latex>
                    </label>
                  </div>
                </div>

                {mostrarRespuesta && (
                  <div
                    className={`mt-4 p-4  rounded-sm border border-stroke
                    shadow-default ${esCorrecta ? "bg-gray-3" : "bg-gray-3"}`}
                  >
                    <p
                      className={`${
                        esCorrecta ? "text-success" : "text-danger"
                      } font-bold`}
                    >
                      {esCorrecta
                        ? "¡Respuesta correcta!"
                        : "Respuesta incorrecta."}
                    </p>
                  </div>
                )}

                <div className="flex justify-center gap-4.5 py-6">
                  <button
                    onClick={handleEnviarRespuesta}
                    disabled={!respuestaUsuario || enviarRespuestaDeshabilitado}
                    className={`flex justify-center rounded bg-primary py-2 px-6 font-medium 
                ${
                  enviarRespuestaDeshabilitado === true
                    ? "border-stroke bg-transparent outline-none focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary dark:disabled:bg-black"
                    : "text-gray hover:bg-opacity-95"
                }
              `}
                    id="enviarRespuesta"
                  >
                    Guardar Respuesta
                  </button>
                  <button
                    onClick={handleSiguientePregunta}
                    disabled={!mostrarRespuesta}
                    className={`flex justify-center rounded bg-primary py-2 px-6 font-medium 
                ${
                  enviarRespuestaDeshabilitado === false
                    ? "border-stroke bg-transparent outline-none focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary dark:disabled:bg-black"
                    : "text-gray hover:bg-opacity-95"
                }
              `}
                  >
                    Siguiente pregunta
                  </button>
                  {/* {mostrarRespuesta && (
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
                  )} */}
                </div>
              </div>
              {/* {mostrarExplicacion && (
                <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
                  <div className="">
                    <h2 className="font-semibold text-black dark:text-white">
                      {" "}
                      Explicación{" "}
                    </h2>
                    <p className="items-center justify-center mt-4.5">
                      <Latex>{justificacion}</Latex>
                    </p>
                  </div>
                  <div className="py-6 px-7.5">
                    <button
                      onClick={handleSiguientePregunta}
                      className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-95"
                    >
                      Siguiente pregunta
                    </button>
                  </div>
                </div>
              )} */}
            </div>
          </div>
        ) : (
          <p>Cargando pregunta...</p>
        )}
      </div>
    </>
  );
};

export default Pregunta;
