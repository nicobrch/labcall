import React, { ReactNode, useState } from "react";

interface ModalProps {
	title: string;
	body: ReactNode;
	show: boolean;

	setShow: (show: boolean) => void;
	onSubmit: () => void;
}

export default function Modal({ title, body, show, setShow, onSubmit }: ModalProps) {
	const [inputValue, setInputValue] = useState("");
  	const isInputValid = inputValue === "Eliminar";

	if (!show) {
		return null;
	}

	return (
		<>
			<div id="modal-root" className="justify-center px-4 items-center flex overflow-x-hidden overflow-y-auto absolute inset-0 z-50 outline-none focus:outline-none">
				<div className="w-auto my-6 mx-auto max-w-full">
					{/*content*/}
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
						{/*header*/}
						<div className="flex items-start justify-between p-5 border-solid border-slate-200 rounded-t">
							<h3 className="text-3xl font-semibold">{title}</h3>
						</div>
						{/*body*/}
						<div className="relative p-6">{body}</div>
						<div className="flex flex-col gap-5.5 p-6.5 justify-center">
						{/* Campo de entrada de texto */}
						<input
							className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
							type="text"
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							placeholder="Escribe Eliminar para habilitar el botón"
						/>
						</div>
						{/*footer*/}
						<div className="flex items-center justify-end p-6 border-solid border-slate-200 rounded-b">
						<button
							className={`inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 m-1 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 color-eliminar ${
							isInputValid ? "" : "opacity-50 cursor-not-allowed"
							}`}
							type="button"
							onClick={onSubmit}
							disabled={!isInputValid}
						>
							Eliminar
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
