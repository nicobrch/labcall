import { getAllCourse, createCourse, getStudents } from "@/backend/services/course.srv";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { body } = req;
      const {
        course_id,
      } = body;
      const response = await getStudents(
        course_id
      );
      res.status(200).json(response);
    }

  } catch (error: any) {
    res.status(500).json({
      message: "Error al obtener los nodos con sus preguntas correspondientes.",
      error: error.message,
    });
  }
}
