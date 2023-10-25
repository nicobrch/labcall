"use client";

import React, { ReactNode, use, useEffect, useState } from "react";

interface ModalProps {
	title: string;
	body: string;
	show: boolean;
	setShow: (show: boolean) => void;
}

const AlertConfirmacion = ({ title, body, show, setShow }: ModalProps) => {
	useEffect(() => {
		if (show) {
			setTimeout(() => {
				setShow(false);
			}, 5000);
		}
	}, [show]);

	if (!show) {
		return null;
	}

	return (
		<div className="flex w-100 h-25 border-l-6 border-[#34D399] bg-[#DCFCE7] px-4 py-4 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-4 md:w-100">
			<div className="mr-4 flex h-9 w-full max-w-[34px] items-center justify-center rounded-lg bg-[#34D399]">
				<svg width="13" height="13" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M15.2984 0.826822L15.2868 0.811827L15.2741 0.797751C14.9173 0.401867 14.3238 0.400754 13.9657 0.794406L5.91888 9.45376L2.05667 5.2868C1.69856 4.89287 1.10487 4.89389 0.747996 5.28987C0.417335 5.65675 0.417335 6.22337 0.747996 6.59026L0.747959 6.59029L0.752701 6.59541L4.86742 11.0348C5.14445 11.3405 5.52858 11.5 5.89581 11.5C6.29242 11.5 6.65178 11.3355 6.92401 11.035L15.2162 2.11161C15.5833 1.74452 15.576 1.18615 15.2984 0.826822Z"
						fill="white"
						stroke="white"
					></path>
				</svg>
				<span className="absolute top-0 bottom-0 right-0 px-2 py-3" onClick={() => setShow(false)}>
					<svg className="fill-current h-6 w-6 text-black-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
					</svg>
				</span>
			</div>
			<div className="w-full">
				<h6 className="mb-3 text-lg text-black dark:text-[#34D399] ">{title}</h6>
				<p className="text-sm text-[#6B7280] dark:text-[#34D399]">{body}</p>
			</div>
		</div>
	);
};
export default AlertConfirmacion;
