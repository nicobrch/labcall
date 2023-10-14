import { deleteUserNodebyId } from "@/backend/services/usernode.serv";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const userNode = await deleteUserNodebyId(parseInt(req.query.id as string));
		res.status(200).json(userNode);
	} catch (error: any) {
		res.status(500).json({
			message: "Error al eliminar al UserNode.",
			error: error.message
		});
	}
}
