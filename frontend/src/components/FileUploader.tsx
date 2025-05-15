import React, { useState, useRef, FC } from 'react';
import { Props } from '../../interfaces/IProps';
import { InsertRegister } from '../services/insert';
// import * as XLSX from "xlsx";

interface ExcelData {
  [key: string]: string | number;
}

const FileUploader: FC<Props> = () => {
  const [data, setData] = useState<ExcelData[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFile: any = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const arrayBuffer = await file.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: 'array' });
      const firstSheet = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheet];
      const jsonData = XLSX.utils.sheet_to_json<ExcelData>(worksheet);
      InsertRegister(jsonData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ padding: '1px', paddingLeft: '5px', fontFamily: 'Arial' }}>
      <button onClick={handleButtonClick} style={{
        padding: '5px 10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}>
        Cargar Documento
      </button>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFile}
        style={{ display: 'none' }}
        accept=".xlsx,.xls"
      />
    </div>
  );
};

export default FileUploader;