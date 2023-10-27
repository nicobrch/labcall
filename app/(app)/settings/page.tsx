"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useEffect, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { format, clean } from "rut.js";
import ModalPassword from "@/components/ModalPassword";
import AlertConfirmacion from "@/components/AlertConfirmacion";

const Settings = () => {
  const [user, ] = useLocalStorage("user", null);
  const [rut, setRut] = useState("");
  const [firtsName, setFirstname] = useState("");
  const [lastName1, setLastname1] = useState("");
  const [lastName2, setLastname2] = useState("");
  const [email, setEmail] = useState("");
  const studentId = (user as any)?.id;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAlertOK, setShowAlertOK] = useState(false);

  const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

  useEffect(() => {
		fetch("http://localhost:3000/api/student/read", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				id: studentId
			})
		})
			.then((response) => response.json())
			.then((data) => {
        setRut(format(data.rut));
        console.log(rut);
				setFirstname(capitalizeString(data.firstname));
				setLastname1(capitalizeString(data.lastname1));
				setLastname2(capitalizeString(data.lastname2));
				setEmail(data.email);
			})
			.catch((error) => {
				console.error("Error al obtener la data desde la API: ", error);
			});
	}, []);

  function capitalizeString(inputString: string) {
    const words = inputString.split(' ');
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    const capitalizedString = capitalizedWords.join(' ');
    return capitalizedString;
  }

  return (
    <>
    <div className="absolute z-9999 top-5 right-5 ">
				<AlertConfirmacion title={"¡Contraseña modificada con éxito!"} body={"Se redigira a la pagina de inicio."} show={showAlertOK} setShow={setShowAlertOK}></AlertConfirmacion>
			</div>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Perfil" />

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
                    
                    <div className="w-full sm:w-1/3">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="fullName"
                      >
                        Nombre
                      </label>
                      <div className="relative">
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 pl-5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          name="fullName"
                          id="fullName"
                          defaultValue={firtsName}
                          readOnly
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/3">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="fullName"
                      >
                        Primer Apellido
                      </label>
                      <div className="relative">
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 pl-5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          name="lastname1"
                          id="lastname1"
                          defaultValue={lastName1}
                          readOnly
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/3">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="fullName"
                      >
                        Segundo Apellido
                      </label>
                      <div className="relative">
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 pl-5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          name="lastname2"
                          id="lastname2"
                          defaultValue={lastName2}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="text"
                      >
                        RUT
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        name="rut"
                        id="rut"
                        defaultValue={rut}
                        readOnly
                      />
                    </div>
                  

                  {/* correo: pendiente, no se sabe si sera incluido */}
                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="emailAddress"
                    >
                      Correo Electrónico
                    </label>
                    <div className="relative">
                      <span className="absolute left-4.5 top-4">
                        <svg
                          className="fill-current"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.33301 4.16667C2.87658 4.16667 2.49967 4.54357 2.49967 5V15C2.49967 15.4564 2.87658 15.8333 3.33301 15.8333H16.6663C17.1228 15.8333 17.4997 15.4564 17.4997 15V5C17.4997 4.54357 17.1228 4.16667 16.6663 4.16667H3.33301ZM0.833008 5C0.833008 3.6231 1.9561 2.5 3.33301 2.5H16.6663C18.0432 2.5 19.1663 3.6231 19.1663 5V15C19.1663 16.3769 18.0432 17.5 16.6663 17.5H3.33301C1.9561 17.5 0.833008 16.3769 0.833008 15V5Z"
                              fill=""
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.983719 4.52215C1.24765 4.1451 1.76726 4.05341 2.1443 4.31734L9.99975 9.81615L17.8552 4.31734C18.2322 4.05341 18.7518 4.1451 19.0158 4.52215C19.2797 4.89919 19.188 5.4188 18.811 5.68272L10.4776 11.5161C10.1907 11.7169 9.80879 11.7169 9.52186 11.5161L1.18853 5.68272C0.811486 5.4188 0.719791 4.89919 0.983719 4.52215Z"
                              fill=""
                            />
                          </g>
                        </svg>
                      </span>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="email"
                        name="emailAddress"
                        id="emailAddress"
                        defaultValue={email}
                        readOnly
                      />
                    </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-95"
                      type="submit"
                      onClick={openModal}
                    >
                      Modificar contraseña
                    </button>
                  </div>

                  <ModalPassword
										title="AVISO!"
										body=""
										show={isModalOpen}
										setShow={setIsModalOpen}
                    setShowAlertOK={setShowAlertOK}
                    rut={rut}
									/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
