import { getAllAbilities } from "@/backend/services/ability.serv";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const abilities = await getAllAbilities();
		res.status(200).send(abilities);
	} catch (error: any) {
		res.status(500).send({
			message: "Error del servidor:" + error.message,
			error
		});
	}
}
