import { getAllNodes, getNodesByUserId } from "@/backend/services/node.srv";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const nodes = await getNodesByUserId(req.query.user_id as string);
		res.status(200).send(nodes);
	} catch (error: any) {
		res.status(500).send({
			message: "Error del servidor:" + error.message,
			error
		});
	}
}
