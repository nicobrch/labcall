import { DATABASE_CREDENTIALS } from "@/config";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ mensaje: "Hola mundo!" });
}
