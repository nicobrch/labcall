"use client"
import React, {useState} from "react";

type Props = {};

const Item = (props: Props) => {
  const [file, setFile] = useState<File>();
  
  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;
    
    try {
      const formData = new FormData();
      formData.set('file', file);
      const res = await fetch('/api/upload/file/', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      })
      // error handler
      if (!res.ok) throw new Error(await res.text())
    } catch (e: any) {
      console.error(e)
    }
  }
  
  return (
    <div>
      <div className="bg-white p-4 my-4">
        <h3 className=" font-bold text-lg">Descargar formato de planilla excel</h3>
      </div>
      <div className="bg-white p-4 my-4">
        <form onSubmit={handleSubmit}>
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
