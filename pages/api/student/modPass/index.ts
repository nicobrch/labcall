import { modPassword } from "@/backend/services/user.service";
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
        password,
      } = body;
      await modPassword(
        rut,
        password,
      );
      res.status(200).json({message: "Contraseña modificada correctamente."});
    }
  } catch (error: any) {
    res.status(500).json({
      message: "Error al modificar contraseña del usuario.",
      error: error.message,
    });
  }
}
