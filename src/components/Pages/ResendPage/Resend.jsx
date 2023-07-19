import React, { useState } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';

const Resend = () => {
  const [images, setImages] = useState([]);

  const handleDrop = (acceptedFiles) => {
    setImages(acceptedFiles);
  };

  // Update the URL to match the backend endpoint
const handleUpload = async () => {
    const formData = new FormData();
    images.forEach((file) => {
      formData.append('image', file); // Use 'image' instead of 'images'
    });
  
    try {
      const response = await axios.post('http://localhost:5000/tht/uploadWarehouseImgs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Multiple Image Upload</h1>
      <Dropzone onDrop={handleDrop} accept="image/*" multiple>
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            className="border border-dashed border-gray-400 p-4 rounded-lg cursor-pointer"
          >
            <input {...getInputProps()} />
            <p className="text-center">Drag 'n' drop some files here, or click to select files</p>
          </div>
        )}
      </Dropzone>
      <div className="mt-4">
        {images.map((file) => (
          <img
            key={file.name}
            src={URL.createObjectURL(file)}
            alt={file.name}
            className="max-w-xs mx-auto mt-2"
          />
        ))}
      </div>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
        onClick={handleUpload}
      >
        Upload Images
      </button>
    </div>
  );
};

export default Resend;
