import { validate } from "rut.js"
import { ValidationFailedError } from "../error/customErrors";
import { addStudent } from "@/backend/services/user.service";
import { bcryptHash } from "@/backend/services/auth.serv";
import * as xlsx from "xlsx"

interface ExcelRow {
  rut: string;
  firstname: string;
  lastname1: string;
  lastname2: string,
  email: string;
}

export const insertStudentsExcel = async (path: string) => {
  try {
    const workbook = xlsx.readFile(path);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data: ExcelRow[] = xlsx.utils.sheet_to_json(sheet);
    
    for (const row of data) {
      console.log(row)
      const { rut, firstname, lastname1, lastname2, email} = row;
      
      if (!rut || !firstname || !lastname1 || !lastname2 || !email) {
        // Skip rows with missing data
        console.log("hola!", row)
        continue;
      }
      
      if (!validate(rut.toString())) {
        // Omitir filas con rut inválidos
        continue;
      }
      
      // Insertar
      console.log("Hola!!!")
      await addStudent(rut.toString(), firstname, lastname1, lastname2, email, "1234", "active", true, 1);
    }
  } catch (error) {
    throw new ValidationFailedError("Error procesando el archivo .xlsx");
  }
}
