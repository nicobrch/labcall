// pages/api/tu_funcion_api.ts

import { addNodesToUser } from "@/backend/services/user.service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { body } = req;
    const saved = await addNodesToUser(body);

    console.log(saved);

    res.status(200).json({ mensaje: "Nodos almacenados exitosamente" });
  }
}
