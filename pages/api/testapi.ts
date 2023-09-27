// pages/api/tu_funcion_api.ts

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ mensaje: "Hola mundo!" });
}
