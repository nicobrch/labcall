"use client";

import React, { ReactNode, use, useEffect, useState } from "react";

interface ModalProps {
	title: string;
	body: string;
	show: boolean;
	setShow: (show: boolean) => void;
}

const AlertError = ({ title, body, show, setShow }: ModalProps) => {
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
		<div className="flex w-100 h-25 border-l-6 border-[#F87171] bg-[#FEE2E2] px-4 py-4 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-4 md:w-100">
			<div className="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#F87171]">
				<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M6.4917 7.65579L11.106 12.2645C11.2545 12.4128 11.4715 12.5 11.6738 12.5C11.8762 12.5 12.0931 12.4128 12.2416 12.2645C12.5621 11.9445 12.5623 11.4317 12.2423 11.1114C12.2422 11.1113 12.2422 11.1113 12.2422 11.1113C12.242 11.1111 12.2418 11.1109 12.2416 11.1107L7.64539 6.50351L12.2589 1.91221L12.2595 1.91158C12.5802 1.59132 12.5802 1.07805 12.2595 0.757793C11.9393 0.437994 11.4268 0.437869 11.1064 0.757418C11.1063 0.757543 11.1062 0.757668 11.106 0.757793L6.49234 5.34931L1.89459 0.740581L1.89396 0.739942C1.57364 0.420019 1.0608 0.420019 0.740487 0.739944C0.42005 1.05999 0.419837 1.57279 0.73985 1.89309L6.4917 7.65579ZM6.4917 7.65579L1.89459 12.2639L1.89395 12.2645C1.74546 12.4128 1.52854 12.5 1.32616 12.5C1.12377 12.5 0.906853 12.4128 0.758361 12.2645L1.1117 11.9108L0.758358 12.2645C0.437984 11.9445 0.437708 11.4319 0.757539 11.1116C0.757812 11.1113 0.758086 11.111 0.75836 11.1107L5.33864 6.50287L0.740487 1.89373L6.4917 7.65579Z"
						fill="#ffffff"
						stroke="#ffffff"
					></path>
				</svg>

				<span className="absolute top-0 bottom-0 right-0 px-2 py-3" onClick={() => setShow(false)}>
					<svg className="fill-current h-6 w-6 text-black-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
					</svg>
				</span>
			</div>
			<div className="w-full">
				<h6 className="mb-3 text-lg text-black dark:text-[#34D399]">{title}</h6>
				<p className="text-sm text-[#6B7280] dark:text-[#34D399]">{body}</p>
			</div>
		</div>
	);
};
export default AlertError;
