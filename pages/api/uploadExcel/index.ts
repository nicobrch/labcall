import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import * as XLSX from 'xlsx';
import { validate, clean } from "rut.js";
import { addStudent } from "@/backend/services/user.service";
import { getStudents } from "@/backend/services/course.srv";
import { IUser } from "@/backend/interfaces/user";

export const config = {
  api: {
    bodyParser: false,
  },
};

export interface rowData {
  rut?: string | number | null | undefined,
  nombres?: string | null | undefined,
  primer_apellido?: string | null | undefined,
  segundo_apellido?: string | null | undefined,
  email?: string | null | undefined,
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const form = formidable({});
      form.parse(req, async (err, fields, files) => {
        if (err) {
          res.status(400).json({error: `Error de servidor. ${err}`});
          return;
        }
        if (!files.excelFile) {
          res.status(400).json({error: 'No se subió un archivo.'})
          return;
        }
        if (!fields.courseId) {
          res.status(400).json({error: 'No se seleccionó un curso.'})
          return;
        }
        const file = files.excelFile[0];
        const courseId = fields.courseId[0];
        
        if (!file.originalFilename?.endsWith('.xlsx')) {
          res.status(400).json({error: 'El archivo no es tipo .xlsx'})
          return;
        }
        // El archivo existe y es de tipo XLSX, procesar
        const workbook = XLSX.readFile(file.filepath);
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        // Definir filas y columnas como JSON
        const excelData = XLSX.utils.sheet_to_json<rowData>(worksheet);
        const currentUsers = await getStudents(
          parseInt(courseId)
        );
        // Procesar JSON
        let studentsInsertedCount: number = 0;
        for (let index = 0; index < excelData.length; index++) {
          const row = excelData[index];
          // Saltar filas con valores nulos
          if (!row.rut || !row.nombres || !row.primer_apellido || !row.segundo_apellido || !row.email) {
            continue;
          }
          row.rut = String(row.rut);
          // Saltar filas con ruts invalidos
          if (!validate(row.rut)) {
            continue;
          }
          row.rut = clean(row.rut)
          
          // Verificar si el rut ya existe en currentUsers
          const rutExists = currentUsers?.some(user => user.rut === row.rut);
          if (rutExists) {
            continue;
          }
          
          // Constantes para crear usuario
          const password = row.rut.substring(0, 4)
          const type = "student"
          const active = true
          // Insertar estudiantes
          try {
            await addStudent(
              row.rut,
              row.nombres.toLowerCase(),
              row.primer_apellido.toLowerCase(),
              row.segundo_apellido.toLowerCase(),
              row.email,
              password,
              type,
              active,
              parseInt(courseId),
            )
            studentsInsertedCount++;
          } catch (error) {
            console.error(error);
          }
        }
        if (studentsInsertedCount === 0){
          res.status(400).json({error: `No se insertaron estudiantes. Verifica el contenido del archivo.`});
          return;
        } else {
          res.status(200).json({message: `Se insertaron exitosamente ${studentsInsertedCount} estudiantes.`});
          return;
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({error: `Error de servidor: ${error}` });
      return;
    }
  } else {
    res.status(405).json({error: 'Método no permitido.'}); // Method not allowed
    return;
  }
}
