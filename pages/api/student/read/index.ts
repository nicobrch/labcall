import { getStudentData } from "@/backend/services/user.service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { body } = req;
      const {
        id,
      } = body;
      const response = await getStudentData(
        id
      );
      res.status(200).json(response);
    }
  } catch (error: any) {
    res.status(500).json({
      message: "Error al obtener data del usuario.",
      error: error.message,
    });
  }
}
