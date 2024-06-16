import React from 'react';
import './Icon.css';

const Icon = ({ img, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="icon-link">
      <img src={img} alt="icon" className="icon-img" />
    </a>
  );
};


export default Icon;
