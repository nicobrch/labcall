import { getStudentQuestion } from "@/backend/services/question.srv";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { student_id, node_id } = req.query;
    const question = await getStudentQuestion(
      Number(student_id),
      Number(node_id)
    );
    res.status(200).json(question);
  } catch (error: any) {
    res.status(500).json({
      message: "Error al obtener los nodos con sus preguntas correspondientes.",
      error: error.message,
    });
  }
}
