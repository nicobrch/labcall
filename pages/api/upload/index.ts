// pages/api/uploadExcel.ts
import { NextApiRequest, NextApiResponse } from 'next';
import XLSX from 'xlsx';
import { Buffer } from 'buffer';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Aumenta el límite del tamaño del cuerpo si es necesario
    },
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const base64Data = req.body.excelFile;
    
    if (!base64Data) {
      return res.status(400).json({ success: false, message: 'No file data received' });
    }
    
    // Convierte Base64 a un Buffer
    const buffer = Buffer.from(base64Data, 'base64');
    
    // Procesa el archivo Excel
    const workbook = XLSX.read(buffer, { type: 'buffer' });
    const sheetNames = workbook.SheetNames;
    const firstSheet = sheetNames[0];
    const worksheet = workbook.Sheets[firstSheet];
    const data = XLSX.utils.sheet_to_json(worksheet);
    
    // Haz algo con los datos aquí (por ejemplo, guardarlos en una base de datos)
    console.log(data);
    
    return res.status(200).json({ success: true, data });
  } else {
    return res.status(405).json({ success: false, message: 'Method not supported' });
  }
};

export default handler;