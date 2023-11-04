import React, { ReactNode, useState } from "react";
import { clean } from "rut.js";
import { useRouter } from "next/navigation";
import { API_PATH } from "@/config";

interface ModalProps {
  title: string;
  body: ReactNode;
  show: boolean;

  setShow: (show: boolean) => void;
  setShowAlertOK: (show: boolean) => void;
  rut: string;
}

export default function ModalPassword({
  title,
  body,
  show,
  setShow,
  setShowAlertOK,
  rut,
}: ModalProps) {
  const router = useRouter();
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const validatePasswords = (newPass: string, confirmPass: string) => {
    const alphanumericRegex = /^(?=.*[A-Za-z])(?=.*\d)/;      
    const isValid =
      newPass === confirmPass &&
      newPass.length >= 6 &&
      alphanumericRegex.test(newPass);
    setIsPasswordValid(isValid);
    if (newPass === "" || confirmPass === "") {
      setErrorMessage("");
    } else if (!alphanumericRegex.test(newPass)) {
      setErrorMessage(
        "La contraseña debe tener letras y numeros, de minimo 6 caracteres de longitud."
       );
    } else if (newPass !== confirmPass) {
      setErrorMessage("Las contraseñas no coinciden");
    } else {
      setErrorMessage("");
    }
  };

  const handleNewPasswordChange = (e: any) => {
    const newPasswordValue = e.target.value;
    setNewPassword(newPasswordValue);
    validatePasswords(newPasswordValue, confirmPassword);
  };

  const handleConfirmPasswordChange = (e: any) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
    validatePasswords(newPassword, confirmPasswordValue);
  };

  const fetchModPass = async () => {
    try {
      const modifyPassword = await fetch(`${API_PATH}/student/modPass`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rut: clean(rut),
          password: newPassword,
        }),
      });
      if (modifyPassword.ok) {
        console.log("Contraseña modificada");
      } else {
        console.log("Error al modificar contraseña");
        console.error("API Respondió mal :(");
      }
    } catch (error) {
      console.error("Connection Error:", error);
    }
  };

  if (!show) {
    return null;
  }

  return (
    <>
      <div
        id="modal-root"
        className="justify-center px-4 items-center flex overflow-x-hidden overflow-y-auto absolute inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="w-auto my-6 mx-auto max-w-full">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">{title}</h3>
            </div>
            {/*body*/}
            <div className="relative p-6">
              Escriba su nueva contraseña (mínimo 6 caracteres, numéricos y
              alfabéticos)
            </div>
            
            <div className="flex flex-col gap-5.5 p-6.5 justify-center">
              {/* Campo de entrada de texto */}
              {errorMessage && (
              <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
            )}
              <input
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                type="password"
                value={newPassword}
                onChange={handleNewPasswordChange}
                placeholder="Escribe tu nueva contraseña"
              />
            </div>
            <div className="relative p-6">Repita la contraseña</div>
            <div className="flex flex-col gap-5.5 p-6.5 justify-center">
              {/* Campo de entrada de texto */}
              <input
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Repite la contraseña"
              />
            </div>
            
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-solid border-slate-200 rounded-b">
              <button
                className={`inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 m-1 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 color-boton ${
                  isPasswordValid ? "" : "opacity-50 cursor-not-allowed"
                }`}
                type="button"
                onClick={() => {
                  fetchModPass();
                  setShow(false);
                  setShowAlertOK(true);
                  setTimeout(() => {
                    router.push("/");
                  }, 2000);
                }}
                disabled={!isPasswordValid}
              >
                Modificar contraseña
              </button>
              <button
                className="inline-flex items-center justify-center rounded-full bg-black py-4 px-10 m-1 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 mr-2"
                type="button"
                onClick={() => setShow(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
