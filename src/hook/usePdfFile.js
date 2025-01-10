import { useState, useEffect } from 'react';

export const usePdfFile = () => {
  const [pdfFile, setPdfFile] = useState(null);

  // Retrieve the stored PDF file from localStorage on initial load
  useEffect(() => {
    const storedPdfFile = localStorage.getItem('pdfFile');
    if (storedPdfFile) {
      const fileData = JSON.parse(storedPdfFile);
      try {
        const byteCharacters = atob(fileData.base64); // Decode the base64 string
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += 512) {
          const slice = byteCharacters.slice(offset, offset + 512);
          const byteNumbers = new Array(slice.length);
          for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }
          byteArrays.push(new Uint8Array(byteNumbers));
        }
        const blob = new Blob(byteArrays, { type: fileData.type });
        const file = new File([blob], fileData.name, { type: fileData.type });
        setPdfFile(file); // Set the retrieved file
      } catch (error) {
        console.error('Error loading file from localStorage:', error);
      }
    }
  }, []);

  // Store the PDF file in localStorage whenever it changes
  const setFile = (file) => {
    setPdfFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      // Ensure we have reader.result before proceeding
      if (reader.result) {
        const base64 = reader.result.split(',')[1]; // Ensure we remove the prefix part
        const fileData = {
          name: file.name,
          type: file.type,
          base64: base64,
        };
        localStorage.setItem('pdfFile', JSON.stringify(fileData)); // Store the file in localStorage
      } else {
        console.error('Failed to read file');
      }
    };

    reader.onerror = () => {
      console.error('Error reading file');
    };

    reader.readAsDataURL(file); // Convert the file to base64
  };

  return {
    pdfFile,
    setFile,
  };
};
