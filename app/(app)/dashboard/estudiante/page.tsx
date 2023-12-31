"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CheckboxFive from "@/components/Checkboxes/CheckboxFive";
import CheckboxFour from "@/components/Checkboxes/CheckboxFour";
import CheckboxOne from "@/components/Checkboxes/CheckboxOne";
import CheckboxThree from "@/components/Checkboxes/CheckboxThree";
import CheckboxTwo from "@/components/Checkboxes/CheckboxTwo";
import SwitcherFour from "@/components/Switchers/SwitcherFour";
import SwitcherOne from "@/components/Switchers/SwitcherOne";
import SwitcherThree from "@/components/Switchers/SwitcherThree";
import SwitcherTwo from "@/components/Switchers/SwitcherTwo";
import { useState } from "react";


const Pregunta = () => {
    var data = { 
        "id": 1,
        "pregunta": "Marco compró 7 espejos de radio 10 cm que desea poner en la pared como decoración, para esto debe poner un pegamento en barra en toda la superficie posterior de cada espejo. Si cada barra de pegamento cubre 270 cm². Determine el número de barras de pegamento que se debe comprar para poner los 7 espejos y asegurar que estos queden bien pegados. Utilizar pi igual a 3.14.",
        "respuesta_correcta": "9",
        "alternativas": [
          "8",
          "9",
          "10",
          "No se la respuesta"
        ],
        "explicacion": "Como Marco debe poner pegamento en los espejos, se debe calcular el área (A) para uno de ellos, utilizando la formula A=πr². Reemplazando el radio (10 cm), y π=3.14, resulta en A=314 cm². Al tener 7 espejos, se multiplica el área obtenida por 7, resultando un área final de 2198 cm². Por otro lado, cada barra de pegamento cubre 270 cm², por lo que se divide el área final por 270 cm², quedando como respuesta 8,14, pero, como se quieren comprar barras enteras, la respuesta es 9 barras de pegamento."
      }

    const [isChecked1, setIsChecked1] = useState<boolean>(false);
    const [isChecked2, setIsChecked2] = useState<boolean>(false);
    const [isChecked3, setIsChecked3] = useState<boolean>(false);
    const [isChecked4, setIsChecked4] = useState<boolean>(false);

    const [respuesta, setRespuesta] = useState<string>("");
    const [mostrarRespuesta, setMostrarRespuesta] = useState<boolean>(false);
    const [enviarRespuestaDeshabilitado, setEnviarRespuestaDeshabilitado] = useState(false);
    const [mostrarExplicacion, setMostrarExplicacion] = useState(false);
    const [respuestaUsuario, setRespuestaUsuario] = useState('');
    const [opcionesDeshabilitadas, setOpcionesDeshabilitadas] = useState(false);
    const [verificarRespuesta, setVerificarRespuesta] = useState(false);


    const handleEnviarRespuesta = () => {
        setEnviarRespuestaDeshabilitado(true);
        const respuestaIngresada = respuestaUsuario.trim();
        if (respuestaIngresada === data.respuesta_correcta) {
            setVerificarRespuesta(true);
        } else {
            setVerificarRespuesta(false);
        }
        console.log(verificarRespuesta);
        setRespuesta(respuestaIngresada);
        // console.log(respuestaIngresada)
        setMostrarRespuesta(true);
        setOpcionesDeshabilitadas(true);
    };

    const handleMostrarRespuesta = () => {
        // Aquí puedes implementar la lógica para mostrar la respuesta completa o realizar otras acciones.
        setMostrarExplicacion(true); // Mostrar la explicación al hacer clic
    };


  
    return (
    <>
      <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
        <div className="flex flex-col gap-9">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h2 className="font-medium text-black dark:text-white">
                Pregunta {data.id}
              </h2>
            </div>
            <div className="bg-white px-7.5 dark:border-strokedark dark:bg-boxdark">
            <p className="items-center justify-center mt-4.5">
                {data.pregunta}
            </p>          

            <div className="flex flex-col gap-5.5 p-6.5">
                {/* respuesta 1 */}
                <div>
                <label htmlFor="radioOption1" className="flex cursor-pointer select-none items-center">
                    <div className="relative">
                    <input
                        type="checkbox"
                        id="radioOption1"
                        className="sr-only"
                        onChange={() => {
                            if (!opcionesDeshabilitadas){
                                setRespuestaUsuario(data.alternativas[0]);
                                setIsChecked1(!isChecked1);
                                setIsChecked2(false);
                                setIsChecked3(false);
                                setIsChecked4(false);
                            }
                        }}
                        disabled={opcionesDeshabilitadas}
                    />
                    <div className={`mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${isChecked4 && "border-primary"}`}
                    >
                        <span className={`h-2.5 w-2.5 rounded-full bg-transparent ${
                            isChecked1 && "!bg-primary"
                        }`}>
                        {" "}
                        </span>
                    </div>
                    </div>
                    {data.alternativas[0]}
                </label>
                </div>
                {/* respuesta 2 */}
                <div>
                <label htmlFor="radioOption2" className="flex cursor-pointer select-none items-center">
                    <div className="relative">
                    <input
                        type="checkbox"
                        id="radioOption2"
                        className="sr-only"
                        onChange={() => {
                            if (!opcionesDeshabilitadas) {
                                setRespuestaUsuario(data.alternativas[1]);
                                setIsChecked2(!isChecked2);
                                setIsChecked1(false);
                                setIsChecked3(false);
                                setIsChecked4(false);
                            }
                        }}
                        disabled={opcionesDeshabilitadas}
                    />
                    <div className={`mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${
                        isChecked2 && "border-primary"
                        }`}>
                        <span className={`h-2.5 w-2.5 rounded-full bg-transparent ${
                            isChecked2 && "!bg-primary"
                        }`}>
                        {" "}
                        </span>
                    </div>
                    </div>
                    {data.alternativas[1]}
                </label>
                </div>
                {/* respuesta 3 */}
                <div>
                <label htmlFor="radioOption3" className="flex cursor-pointer select-none items-center">
                    <div className="relative">
                    <input
                        type="checkbox"
                        id="radioOption3"
                        className="sr-only"
                        onChange={() => {
                            if (!opcionesDeshabilitadas){
                                setRespuestaUsuario(data.alternativas[2]);
                                setIsChecked3(!isChecked3);
                                setIsChecked1(false);
                                setIsChecked2(false);
                                setIsChecked4(false);
                            }
                        }}
                        disabled={opcionesDeshabilitadas}
                    />
                    <div className={`mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${
                        isChecked3 && "border-primary"
                        }`}>
                        <span className={`h-2.5 w-2.5 rounded-full bg-transparent ${
                            isChecked3 && "!bg-primary"
                        }`}>
                        {" "}
                        </span>
                    </div>
                    </div>
                    {data.alternativas[2]}
                </label>
                </div>
                {/* respuesta 4 */}
                <div>
                <label htmlFor="radioOption4" className="flex cursor-pointer select-none items-center">
                    <div className="relative">
                    <input
                        type="checkbox"
                        id="radioOption4"
                        className="sr-only"
                        onChange={() => {
                            if (!opcionesDeshabilitadas){
                                setRespuestaUsuario(data.alternativas[3]);
                                setIsChecked4(!isChecked4);
                                setIsChecked1(false);
                                setIsChecked2(false);
                                setIsChecked3(false);
                            }
                        }}
                        disabled={opcionesDeshabilitadas}
                    />
                    <div className={`mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${
                        isChecked4 && "border-primary"
                        }`}>
                        <span className={`h-2.5 w-2.5 rounded-full bg-transparent ${
                            isChecked4 && "!bg-primary"
                        }`}>
                        {" "}
                        </span>
                    </div>
                    </div>
                    {data.alternativas[3]}
                </label>
                </div>
            </div>
            {/* pendiente */}
            <div className="flex justify-center gap-4.5">
                    <button
                        onClick={handleEnviarRespuesta} 
                        disabled={enviarRespuestaDeshabilitado}
                        className={`flex justify-center rounded bg-primary py-2 px-6 font-medium   
                        ${ enviarRespuestaDeshabilitado===true ? "border-stroke bg-transparent outline-none focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary dark:disabled:bg-black" : "text-gray hover:bg-opacity-95"}
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
                        ${ mostrarExplicacion===true ? "border-stroke bg-transparent outline-none focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary dark:disabled:bg-black" : "text-gray hover:bg-opacity-95"}
                        `}
                    >
                        Mostrar respuesta</button>
                    </div>
                )}

                

            </div>
          </div>
            {mostrarExplicacion && (
                <div>
                <div className="bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
                    <h2 className="font-semibold text-black dark:text-white"> Explicacion </h2>
                    <p className="items-center justify-center mt-4.5">
                        {data.explicacion}
                    </p>
                    
                </div>
                <div className="bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
                <button 
                    // onClick={}
                    className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-95"
                >
                    Siguiente pregunta</button>                    
                </div>
                </div>
            )}
        </div>
      </div>
    </>
  );
};

export default Pregunta;
