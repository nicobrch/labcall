import { modifyStudent } from "@/backend/services/user.service";
import { NextApiRequest, NextApiResponse } from "next";
// pendienteeeee
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { body } = req;
      const {
        rut,
        firstname,
        lastname1,
        lastname2,
        email,
        password,
        type,
        active,
        course_id,
      } = body;
      await modifyStudent(
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
      res.status(200).json({message: "Usuario modificado correctamente."});
    }
  } catch (error: any) {
    res.status(500).json({
      message: "Error al modificar data del usuario.",
      error: error.message,
    });
  }
}
