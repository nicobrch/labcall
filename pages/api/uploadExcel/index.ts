import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import * as XLSX from 'xlsx';

export const config = {
  api: {
    bodyParser: false,
  },
};

export interface rowData {
  rut: string,
  nombres: string,
  apellido_paterno: string,
  apellido_materno: string,
  email: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const form = formidable({});
      
      form.parse(req, (err, fields, files) => {
        if (err) {
          res.status(500).json({ error: 'Server error.' });
          return;
        }
        if (!files.excelFile){
          res.status(400).json({ error: 'No file uploaded.' })
          return;
        }
        const file = files.excelFile[0];
        if (!file.originalFilename?.endsWith('.xlsx')){
          res.status(400).json({ error: 'The file is not XLSX.' })
          return;
        }
        // El archivo existe y es de tipo XLSX, procesar
        const workbook = XLSX.readFile(file.filepath);
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        // Convert the sheet data to JSON
        const data = XLSX.utils.sheet_to_json<rowData>(worksheet);
        // Verify that the data has all the columns specified in the SheetData interface
        const requiredColumns = rowData.keys();
        
        for (const row of data) {
          for (const col of requiredColumns) {
            if (!(col in row)) {
              res.status(400).json({ error: `Missing column '${col}' in the Excel data.` });
              return;
            }
          }
        }
        res.status(200).json({data: data});
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error.' });
    }
  } else {
    res.status(405).end(); // Method not allowed.
  }
}
