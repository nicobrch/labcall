import { getAllAxis } from "@/backend/services/axis.serv";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const axis = await getAllAxis();
		res.status(200).send(axis);
	} catch (error: any) {
		res.status(500).send({
			message: "Error del servidor:" + error.message,
			error
		});
	}
}
