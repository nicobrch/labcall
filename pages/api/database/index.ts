import sequelize from "@/backend/loaders/sequelize";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await sequelize.authenticate();

    // Forzar la creación de tablas y bases de datos. Esto borrará todos los datos existentes.
    await sequelize.sync({ force: true });
    res
      .status(200)
      .json({ message: "Base de datos y tablas creadas con éxito." });
  } catch (error: any) {
    res.status(500).json({
      message:
        "No se pudo conectar a la base de datos. Verifique si ha ejecutado el docker-compose que está en la raíz del proyecto.",
      error: error.message,
    });
  }
}
