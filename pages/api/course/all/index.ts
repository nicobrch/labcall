import { getAllCourse, createCourse } from "@/backend/services/course.srv";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const courses = await getAllCourse();
      res.status(200).json(courses);
    }
    if (req.method === "POST") {
      const { body } = req;
      const {
        name,
        description,
        startDate,
        endDate,
      } = body;
      await createCourse(
        name,
        description,
        startDate,
        endDate,
      );
      res.status(200).json({
        message: "Curso almacenado exitosamente",
      });
    }

  } catch (error: any) {
    res.status(500).json({
      message: "Error al obtener los nodos con sus preguntas correspondientes.",
      error: error.message,
    });
  }
}
