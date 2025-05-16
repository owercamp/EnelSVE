import React, { FC, useRef } from 'react';

interface Props {
  handleFile: any
}

const FileUploader: FC<Props> = ({ handleFile }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
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