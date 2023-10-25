import { addStudent } from "@/backend/services/user.service";
import { NextApiRequest, NextApiResponse } from "next";
import { format, clean } from "rut.js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
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
        // set rut to a only numeric values, delete dots and hyphen
        var rutFormated = format(rut);
        rutFormated = clean(rut);
        var lowerName = firstname.toLowerCase();
        var lowerLastName1 = lastname1.toLowerCase();
        var lowerLastName2 = lastname2.toLowerCase();
        await addStudent(
            rutFormated,
            lowerName,
            lowerLastName1,
            lowerLastName2,
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
