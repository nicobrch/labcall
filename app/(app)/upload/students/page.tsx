"use client"
import React, {useState} from "react";
import axios from "axios";

type Props = {};

const Item = (props: Props) => {
  const [file, setFile] = useState<File>();
  
  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  
  const fileToBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64Data = reader.result.split(',')[1];
        resolve(base64Data);
      };
      reader.onerror = (error) => reject(error);
    });
  };
  
  const uploadExcel = async () => {
    const fileField = document.querySelector('input[type="file"]');
    const base64Data = await fileToBase64(fileField.files[0]);
    
    const response = await fetch('/api/uploadExcel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ excelFile: base64Data }),
    });
    
    const result = await response.json();
    console.log('Respuesta del servidor:', result);
  };
  
  return (
    <div>
      <div className="bg-white p-4 my-4">
        <h3 className=" font-bold text-lg">Descargar formato de planilla excel</h3>
      </div>
      <div className="bg-white p-4 my-4">
        <form onSubmit={uploadExcel}>
          <h3 className="font-bold text-lg mb-4">Subir planilla de excel</h3>
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            className="mb-4 w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
          />
          <div className="mb-2">
            <input
              type="submit"
              value="Subir"
              className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Item;
