import React, { ReactNode } from "react";

interface ModalProps {
	title: string;
	body: ReactNode;
	show: boolean;

	setShow: (show: boolean) => void;
	onSubmit: () => void;
}

export default function Modal({ title, body, show, setShow, onSubmit }: ModalProps) {
	if (!show) {
		return null;
	}

	return (
		<>
			<div className="justify-center px-4 items-center flex overflow-x-hidden overflow-y-auto absolute inset-0 z-50 outline-none focus:outline-none">
				<div className="w-auto my-6 mx-auto max-w-3xl">
					{/*content*/}
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
						{/*header*/}
						<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
							<h3 className="text-3xl font-semibold">{title}</h3>
						</div>
						{/*body*/}
						<div className="relative p-6 flex-auto">
							<p className="my-4 text-slate-500 text-lg leading-relaxed">{body}</p>
						</div>
						{/*footer*/}
						<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
							<button
								className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 m-1 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
								type="button"
								onClick={onSubmit}
							>
								Guardar cambios
							</button>
							<button
								className="inline-flex items-center justify-center rounded-full bg-black py-4 px-10 m-1 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 mr-2"
								type="button"
								onClick={() => setShow(false)}
							>
								Cerrar
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
		</>
	);
}
