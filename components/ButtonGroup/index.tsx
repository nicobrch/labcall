import { postToApi } from "@/js/requests";
import { useState } from "react";

interface ButtonGroupProps {
	id: number;
	callNodes: () => void;
}

export default function Modal({ id, callNodes }: ButtonGroupProps) {
	const [showButtons, setShowButtons] = useState(false);

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
	return (
		<>
			<div className="bg-gray-300 p-2 text-center">
				{!showButtons && (
					<button
						className="col-span-1 inline-flex items-center justify-center rounded-md bg-[#F3595E] p-1 w-20 h-7 text-center font-medium text-sm text-white hover:bg-opacity-90 mr-2"
						onClick={handleDeleteClick}
					>
						Eliminar
					</button>
				)}
				{showButtons && (
					<div>
						<button
							className="col-span-1 inline-flex items-center justify-center rounded-md bg-[#F3595E] p-1 w-20 h-7 text-center font-medium text-sm text-white hover:bg-opacity-90 m-1"
							onClick={() => handleConfirmDelete(id || 0)}
						>
							Confirmar
						</button>
						<button
							className="col-span-1 inline-flex items-center justify-center rounded-md bg-black p-1 w-20 h-7 text-center font-medium text-sm text-white hover:bg-opacity-90 m-1 mr-2"
							onClick={handleCancelDelete}
						>
							Cancelar
						</button>
					</div>
				)}
			</div>
		</>
	);
}
