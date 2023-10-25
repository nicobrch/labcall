import mime from "mime";
import { join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";
import * as dateFn from "date-fns";
import { NextRequest, NextResponse } from "next/server";
import * as xlsx from "xlsx";
import {validate} from "rut.js";
import {addStudent} from "@/backend/services/user.service";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  
  const file = formData.get("file") as Blob | null;
  if (!file) {
    return NextResponse.json(
      { error: "File blob is required." },
      { status: 400 }
    );
  }
  
  const buffer = Buffer.from(await file.arrayBuffer());
  const relativeUploadDir = `/uploads/${dateFn.format(Date.now(), "dd-MM-Y")}`;
  const uploadDir = join(process.cwd(), "public", relativeUploadDir);
  const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
  const filename = `${file.name.replace(
    /\.[^/.]+$/,
    ""
  )}-${uniqueSuffix}.${mime.getExtension(file.type)}`;
  
  // Crear directorio de uploads en public, si es que no existe
  try {
    await stat(uploadDir);
    
  } catch (e: any) {
    if (e.code === "ENOENT") {
      await mkdir(uploadDir, { recursive: true });
    } else {
      console.error(
        "Error while trying to create directory when uploading a file\n",
        e
      );
      return NextResponse.json(
        { error: "Something went wrong." },
        { status: 500 }
      );
    }
  }
  
  // Subir archivo con un nombre unico generado
  try {
    await writeFile(`${uploadDir}/${filename}`, buffer);
    
  } catch (e) {
    console.error("Error while trying to upload a file\n", e);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
  
  try {
    interface ExcelRow {
      rut: string;
      firstname: string;
      lastname1: string;
      lastname2: string,
      email: string;
    }
    
    const workbook = xlsx.readFile(`${uploadDir}/${filename}`);
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
    
    return NextResponse.json(
      { message: "Students inserted succesfully" },
      { status: 200 }
    );
  } catch (e) {
    console.error("Error inserting students\n", e);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}