import { addStudent } from "@/backend/services/user.service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
        const courses = "hooooola";
        res.status(200).json(courses);
        }
    if (req.method === "POST") {
        const type = "student";
        const active = true;
        const { body } = req;
        const {
            rut,
            firstname,
            lastname1,
            lastname2,
            email,
            password,
            course_id,
        } = body;
        await addStudent(
            rut,
            firstname,
            lastname1,
            lastname2,
            email,
            password,
            type,
            active,
            course_id,
        );
        res.status(200).json({
            message: "Estudiante creado y agregado al curso",
        });
    }

  } catch (error: any) {
    res.status(500).json({
      message: "API: Error al agregar al estudiante a la base de datos.",
      error: error.message,
    });
  }
}
