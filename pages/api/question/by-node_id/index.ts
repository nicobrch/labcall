import { getNodeQuestions, getQuestionsByNodeId } from "@/backend/services/question.srv";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const node_id = req.query.node_id as string;
		const questions = await getQuestionsByNodeId(Number(node_id));
		res.status(200).send(questions);
	} catch (error: any) {
		res.status(500).send({
			message: "Error del servidor:" + error.message,
			error
		});
	}
}
