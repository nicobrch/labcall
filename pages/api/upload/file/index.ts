import { join } from "path";
import { writeFile } from "fs/promises";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { file } = await req.body
    console.log(await req.body);
    
    if (!file || file === "" || file === undefined) {
      return res.status(500).json({
        message: "No file uploaded",
      })
    }
    
    // Check if the file has a valid Excel extension (e.g., .xlsx)
    if (!file.name.endsWith(".xlsx")) {
      return res.status(500).json({
        message: "Invalid file format. Please upload an Excel file."
      })
    }
    
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const path = join("/", "tmp", file.name);
    await writeFile(path, buffer);
    
    return res.status(200).json({
      message: `File writed to ${path}`
    })
  }
}