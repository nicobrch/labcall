import { INode } from "@/backend/interfaces/node";
import { postToApi } from "@/js/requests";
import React, { ReactNode, use, useEffect, useState } from "react";
import AlertConfirmacion from "../AlertConfirmacion";
import AlertError from "../AlertError";
import ButtonGroup from "../ButtonGroup";

interface ModalProps {
	title: string;
	body: ReactNode;
	show: boolean;
	nodes: any;
	name: string;
	setShow: (show: boolean) => void;
	onSubmit: () => void;
	callNodes: () => void;
}

export default function Modal({ title, body, show, setShow, onSubmit, nodes, callNodes }: ModalProps) {
	const [inputValue, setInputValue] = useState("");
	const isInputValid = inputValue === "Eliminar";
	const [showAlertOK, setShowAlertOK] = useState(false);
	const [showAlertError, setShowAlertError] = useState(false);
	const [showButtons, setShowButtons] = useState(false);

	if (!show) {
		return null;
	}
	const handleDeleteClick = () => {
		setShowButtons(true);
	};

	const handleConfirmDelete = async (id: number) => {
		const response = await postToApi("/usernode/delete?id=" + id, {});
		callNodes();
		setShowButtons(false);
	};
	const handleCancelDelete = () => {
		setShowButtons(false);
	};

	const deleteNode = async (id: number) => {
		const response = await postToApi("/usernode/delete?id=" + id, {});
		callNodes();
	};

	return (
		<>
			<div id="modal-root" className="justify-center px-4 items-center flex overflow-x-hidden overflow-y-auto absolute inset-0 z-50 outline-none focus:outline-none">
				<div className="w-110 my-6 mx-auto">
					{/*content*/}
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
						{/*header*/}
						<div className="flex items-center text-center justify-between p-5 border-solid border-slate-200 rounded-t">
							<h4 className="text-2xl font-semibold text-center">{title}</h4>
						</div>
						{/*body*/}
						<div className="relative p-3">
							{nodes.length === 0 ? (
								<p>No hay nodos asignados</p>
							) : (
								<div>
									<div className="grid grid-cols-3 gap-2">
										<div className="bg-gray-300 p-2 font-semibold text-start">Eje</div>
										<div className="bg-gray-300 p-2 font-semibold text-start">Habilidad</div>
										<div className="bg-gray-300 p-2 m-2 text-center"></div>
									</div>

									{nodes.map((node: any) => (
										<div key={node.id} className="grid grid-cols-3 gap-2">
											<div className="bg-gray-300 p-2 text-start">{node.node.axis}</div>
											<div className="bg-gray-300 p-2 text-start">{node.node.ability}</div>
											<ButtonGroup id={node.id || 0} callNodes={callNodes} />
										</div>
									))}
								</div>
							)}
						</div>

						{/*footer*/}
						<div className="flex items-center justify-end p-6 border-solid border-slate-200 rounded-b">
							<button
								className="inline-flex items-center justify-center rounded-full bg-black py-3 px-8 m-1 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 mr-2"
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
