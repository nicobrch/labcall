import { validate } from "rut.js"
import { ValidationFailedError } from "../error/customErrors";
import { addStudent } from "@/backend/services/user.service";
import { bcryptHash } from "@/backend/services/auth.serv";
import UserRep from "../repositories/user.rep";
import * as xlsx from "xlsx"

const User = new UserRep();

interface ExcelRow {
  rut: string;
  firstname: string;
  lastname1: string;
  lastname2: string,
  email: string;
  type: string;
  active: boolean;
  course_id: number;
}

export const insertStudentsExcel = async (path: string) => {
  try {
    const workbook = xlsx.readFile(path);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data: ExcelRow[] = xlsx.utils.sheet_to_json(sheet);
    
    let index: number = 0;
    
    for (const row of data) {
      if (index === 0){
        index++;
        continue;
      }
      
      const { rut, firstname, lastname1, lastname2, email, type, active, course_id } = row;
      
      if (!rut || !firstname || !lastname1 || !lastname2 || !email || !type || active === undefined || course_id === undefined) {
        // Skip rows with missing data
        continue;
      }
      
      if (!validate(rut)) {
        // Omitir filas con rut inválidos
        continue;
      }
      
      const rutExistente = await User.findOne({
        rut,
      });
      
      if (rutExistente) {
        // Omitir filas con ruts repetidos
        continue;
      }
      
      // Generar contraseña con los primeros 5 números del rut
      const rutSubstring = rut.substring(0, 5)
      const password = await bcryptHash(rutSubstring)
      
      // Insertar
      await addStudent(rut, firstname, lastname1, lastname2, email, password, type, active, course_id);
    }
  } catch (error) {
    throw new ValidationFailedError("Error procesando el archivo .xlsx");
  }
}
