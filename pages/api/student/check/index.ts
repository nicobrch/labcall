import { checkExistingStudent } from "@/backend/services/user.service";
import { NextApiRequest, NextApiResponse } from "next";
import { format, clean } from "rut.js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
        let { rut } = await req.body;
  
        if (rut === "" || rut === undefined){
          return res.status(500).json({
            message: "Campo rut incompleto. Por favor ingrese bien los datos."
          });
        }
        
        rut = format(rut)
        rut = clean(rut)
        const user = await checkExistingStudent(rut);
        if(user) {
            return res.status(200).json({
                message: "Rut disponible para ingresar."
              });
        }
        return res.status(500).json({
          message: "Rut ya esta ingresado."
        });
    } catch (error: any) {
    res.status(500).json({
      message: "Error al realizar la consulta.",
      error: error.message,
    });
  }
}
