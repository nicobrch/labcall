import { deleteStudent } from "@/backend/services/user.service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { body } = req;
      const {
        rut,
      } = body;
      await deleteStudent(
        rut
      );
      res.status(200).json({
        message: "Estudiante eliminado de los registros",
    });
    }

  } catch (error: any) {
    res.status(500).json({
      message: "Error al eliminar al usuario.",
      error: error.message,
    });
  }
}
