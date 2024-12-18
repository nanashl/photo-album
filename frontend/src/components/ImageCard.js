import React from 'react';

const ImageCard = ({ image }) => {
  return (
    <div className="image-card">
      <img src={`http://localhost:5000${image.url}`} alt={image.title} />
      <p>{image.title}</p>
    </div>
  );
};

export default ImageCard;
