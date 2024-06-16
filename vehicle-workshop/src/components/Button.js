import React from 'react';
import './Button.css';

const Button = ({ text, onClick, type, disabled, style }) => {
  return (
    <button
      className={`button ${type}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {text}
    </button>
  );
};


export default Button;
