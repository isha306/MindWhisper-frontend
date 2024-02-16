import React from 'react';
import './ImageWithText.css'; // Import CSS file for styling
import Imagem13 from "../assets/m13.jpg"
function ImageWithText({ imageUrl, text }) {
  return (
    <div className="image-container">
      <img src={Imagem13} alt="Your Image" />
      <div className="text-overlay">{text}</div>
     
      </div>
     


  );
}

export default ImageWithText;