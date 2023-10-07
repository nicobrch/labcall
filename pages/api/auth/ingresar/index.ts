import { signInUser } from "@/backend/services/user.service";
import { ValidationFailedError } from "@/backend/error/customErrors";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // UTILIZA signInUser. El servicio ya valida por si mismo
  // Revisa su documentación para ver cómo trabaja los casos donde las credenciales son inválidas (por ejemplo)

  if (req.method === "POST") {
    try {
      const { rut, password } = await req.body;
      const user = await signInUser({ rut, password });
      return res.status(200).json({
        message: "Inicio de sesión exitoso.",
        user,
      });
    } catch (error: ValidationFailedError | any) {
      if (error.name === "ValidationFailedError") {
        // No se pudo validar el usuario, entregar mensaje de error.
        return res.status(500).json({
          message: error.message,
          // Error.message contiene ya el error para cada caso
        });
      } else {
        // Algún otro error que no es propio de ValidationFailedError
        return res.status(500).json({
          message:
            "Ocurrió un error al procesar la solicitud. Error: " +
            error.message,
        });
      }
    }
  }
}
