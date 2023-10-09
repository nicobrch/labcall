import { NextRequest, NextResponse } from "next/server";
import { addNodesToUser } from "@/backend/services/user.service";

export async function GET(request: NextRequest) {
	try {
		const { rut, nodes } = await request.json();
		const response = await addNodesToUser({ rut, nodes });
		return NextResponse.json(
			{
				message: "Se añadió el node al estudiante"
			},
			{
				status: 200
			}
		);
	} catch (error) {
		return NextResponse.json(
			{
				message: "Ocurrió un error al procesar la solicitud."
			},
			{
				status: 500
			}
		);
	}
}
