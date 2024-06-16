import React from "react";
import './Gallery.css';

const Gallery = ({ images }) => {
  const generateImages = () => {
    if (!images) return null;
    return images.map((image) => (
      <div className="gallery-container-image">
        <img
          src={image.src}
          alt={image.alt}
          className="gallery-image"
        />
      </div>
    ));
  };

  return (
    <div className="gallery-container-primary">
      <div className="gallery-container-secundary">
        {generateImages()}
      </div>
    </div>
  );
};

export default Gallery;
