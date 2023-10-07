import { seedNodes } from "@/backend/loaders/initialValuesDatabase/initialNodes";
import { seedQuestions } from "@/backend/loaders/initialValuesDatabase/initialQuestion";
import sequelize from "@/backend/loaders/sequelize";
import { getNodes } from "@/backend/services/question.srv";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const nodes = await getNodes();
    res.status(200).json(nodes);
  } catch (error: any) {
    res.status(500).json({
      message: "Error al obtener los nodos con sus preguntas correspondientes.",
      error: error.message,
    });
  }
}
