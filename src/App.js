// src/App.js
import React, { useRef, useState, useEffect } from "react";
//import React from 'react';
import './App.css';
import ImageUploader from './imageUploader';

function App() {
  return (
    <div className="App">
      <h2>Cocoa Classification using images</h2>
      <ImageUploader />
    </div>
  );
}

export default App;
