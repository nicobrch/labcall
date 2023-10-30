"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useEffect, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { format, clean } from "rut.js";
import ModalPassword from "@/components/ModalPassword";
import AlertConfirmacion from "@/components/AlertConfirmacion";
import { API_PATH } from "@/config";

const ModPasswordInit = () => {
  const [user] = useLocalStorage("user", null);
  const [rut, setRut] = useState("");
  const [firtsName, setFirstname] = useState("");
  const [lastName1, setLastname1] = useState("");
  const [lastName2, setLastname2] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const studentId = (user as any)?.id;
  const [showAlertOK, setShowAlertOK] = useState(false);

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

  const validatePasswords = (newPass: string, confirmPass: string) => {
    const alphanumericRegex = /^(?=.*[A-Za-z])(?=.*\d)/;
    const isValid =
      newPass === confirmPass &&
      newPass.length >= 6 &&
      alphanumericRegex.test(newPass);
    setIsPasswordValid(isValid);
    if (!alphanumericRegex.test(newPass)) {
      setErrorMessage("La contraseña debe tener letras y numeros, de minimo 6 caracteres de longitud.");
    } else if (newPass !== confirmPass) {
      setErrorMessage("Las contraseñas no coinciden");
    } else {
      setErrorMessage("");
    }
  };

  const handlePasswordSubmit = () => {
    if (isPasswordValid) {
      fetchModPass();
      setShowAlertOK(true);
    }
  };

  useEffect(() => {
    fetch(`${API_PATH}/student/read`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: studentId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setRut(format(data.rut));
        console.log(rut);
      })
      .catch((error) => {
        console.error("Error al obtener la data desde la API: ", error);
      });
  }, []);

  useEffect(() => {
    if (showAlertOK) {
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    }
  })

  return (
    <>
      <div className="absolute z-9999 top-5 right-5 ">
        <AlertConfirmacion
          title={"¡Contraseña modificada con éxito!"}
          body={"Se redigira a la pagina de inicio."}
          show={showAlertOK}
          setShow={setShowAlertOK}
        ></AlertConfirmacion>
      </div>
      <div className="mx-auto max-w-270">
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-15 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Información Personal
                </h3>
              </div>
              <div className="p-7">
                <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                  <div className="w-full sm:w-1/2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="newPassword"
                  >
                    Nueva Contraseña
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                  />
                </div>

                <div className="w-full sm:w-1/2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="confirmPassword"
                  >
                    Confirmar Contraseña
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                </div>
                </div>
                {errorMessage && (
                  <div className="text-red-500 mb-3 text-sm">
                    {errorMessage}
                  </div>
                )}
                <div className="flex justify-end gap-4.5">
                  <button
                    className={`flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-95 ${
                      isPasswordValid ? "" : "opacity-50 cursor-not-allowed"
                    }`}
                    type="submit"
                    onClick={handlePasswordSubmit}
                    disabled={!isPasswordValid}
                  >
                    Modificar contraseña
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModPasswordInit;
