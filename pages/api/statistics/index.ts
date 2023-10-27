import { getAllCourse } from "@/backend/services/course.srv";
import { NextApiRequest, NextApiResponse } from "next";

export type CursoItem = {
  id: string; // numero incremental
  updated_at: string; // una fecha, incluye mes, dia, año y hora en formato español latino
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const cursos = await getAllCourse();
    res.status(200).json(cursos);
  }
}
