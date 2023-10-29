/**
 * Retorna un arreglo de todas las preguntas para un determinado 
 * estudiante a partir de su ID (student_id)
 * @param req - The Next.js API request object.
 * @param res - The Next.js API response object.
 * @returns El arreglo de preguntas para un estudiante,
 * de todos los nodos asociados.
 */
import { getStudentQuestion } from "@/backend/services/question.srv";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { student_id } = req.query;
    const question = await getStudentQuestion(
      Number(student_id)
    );
    res.status(200).json(question);
  } catch (error: any) {
    res.status(500).json({
      message: "Error al obtener las preguntas correspondientes.",
      error: error.message,
    });
  }
}
