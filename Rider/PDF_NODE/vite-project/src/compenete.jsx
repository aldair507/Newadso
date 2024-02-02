import React from 'react';

const MyComponent = () => {
  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:3000/home', {
        method: 'GET', // Método GET para obtener el PDF
        headers: {
          'Content-Type': 'application/pdf', // Tipo de contenido esperado
        },
      });

      if (response.ok) {
        // Convertir la respuesta a un archivo PDF y descargarlo
        const blob = await response.blob();
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'home.pdf');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      } else {
        // Manejo de errores si la solicitud al backend falla
        console.error('Error al obtener el archivo PDF.');
      }
    } catch (error) {
      // Manejo de errores en caso de problemas de red u otros errores
      console.error('Error de red o problemas al obtener el archivo PDF.', error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Descargar PDF</button>
    </div>
  );
};

export default MyComponent;
