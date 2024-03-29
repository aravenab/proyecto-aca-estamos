import React, { useState } from 'react';

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      console.error('No se ha seleccionado ningún archivo.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile); // 'file' debe coincidir con el nombre del campo en el servidor

    fetch('http://localhost:3000/subir_archivo', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Respuesta del servidor:', data);
      })
      .catch((error) => {
        console.error('Error al subir el archivo:', error);
      });
  };

  return (
    <div>
      <h3 >Subir Foto de Perfil</h3>
      <input type="file" onChange={handleFileUpload}/> 
      <button onClick={handleUpload}style={{backgroundColor: 'black', color: 'white'}}>Subir</button>
    </div>
  );
};

export default UploadFile;


