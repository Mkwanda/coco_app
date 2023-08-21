// src/ImageUploader.js
//import React, { useRef, useState, useEffect } from "react";
import React, { useEffect, useState } from 'react';
import * as tf from "@tensorflow/tfjs";
import { nextFrame } from "@tensorflow/tfjs";

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);

  const runCoco = async () => {
    const net = await tf.loadGraphModel('./TFexport/model.json')
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  useEffect( () => {
    runCoco();
  }, []);

  useEffect(() => {
    if (selectedImage){
      console.log('image available now')
    }
  }, [selectedImage]);

  return (
    <div>
      <h2>Image Uploader</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <div>
          <h3>Selected Image</h3>
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
