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
      setErrorMessage(
        "La contraseña debe tener letras y numeros, de minimo 6 caracteres de longitud."
      );
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
  });

  return (
    <>
      <div className="absolute z-50 top-5 right-5">
        <AlertConfirmacion
          title={"¡Contraseña modificada con éxito!"}
          body={"Se redigirá a la página de inicio."}
          show={showAlertOK}
          setShow={setShowAlertOK}
        />
      </div>
      <div className="mx-auto max-w-xl mt-10">
        <div className="bg-white shadow-md rounded-lg dark:bg-gray-800">
          <div className="px-6 py-4 border-b">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
              Información Personal
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Por favor, modifique su contraseña. Esto lo tendrá que hacer solo
              la primera vez que entra.
            </p>
          </div>
          <div className="px-6 py-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  className="text-sm font-medium text-gray-600 dark:text-gray-300 block mb-2"
                  htmlFor="newPassword"
                >
                  Nueva Contraseña
                </label>
                <input
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                />
              </div>
              <div>
                <label
                  className="text-sm font-medium text-gray-600 dark:text-gray-300 block mb-2"
                  htmlFor="confirmPassword"
                >
                  Confirmar Contraseña
                </label>
                <input
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </div>
            </div>
            {errorMessage && (
              <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
            )}
            <div className="mt-5 flex justify-center">
              <button
                className={`w-full sm:w-auto bg-primary text-white py-2 px-6 rounded-md ${
                  isPasswordValid
                    ? "bg-indigo-500 hover:bg-indigo-600"
                    : "bg-gray-400 cursor-not-allowed"
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
    </>
  );
};

export default ModPasswordInit;
