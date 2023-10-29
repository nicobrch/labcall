import { getAlternatives } from "@/backend/services/question.srv";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { question_id } = req.query;
    const alternatives = await getAlternatives(
      Number(question_id)
    );
    res.status(200).json(alternatives);
  } catch (error: any) {
    res.status(500).json({
      message: "Error al obtener las alternativas correspondientes.",
      error: error.message,
    });
  }
}