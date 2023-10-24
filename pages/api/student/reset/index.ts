import { resetPassword } from "@/backend/services/user.service";
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
      } = body;
      await resetPassword(
        rut,
      );
      res.status(200).json({message: "Contraseña restablecida correctamente."});
    }
  } catch (error: any) {
    res.status(500).json({
      message: "Error al modificar password del usuario.",
      error: error.message,
    });
  }
}
