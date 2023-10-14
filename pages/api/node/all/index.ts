import { getAllNodes } from "@/backend/services/node.srv";
import { addNodesToUser } from "@/backend/services/user.service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const nodes = await getAllNodes();
    res.status(200).send(nodes);
  } catch (error: any) {
    res.status(500).send({
      message: "Error del servidor:" + error.message,
      error,
    });
  }
}
