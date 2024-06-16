import React from 'react';
import './Screen_01.css';
import Button from './Button.js'

const Screen = ({ text, title }) => {
  return (
    <div className='container-screen'>
      <div className='container-primary'>
        <div className='container-title'>
          <h1> {title} </h1>
        </div>
        <div className='container-text'>
          <p>{ text }</p>
        </div>
        <div className='container-secondary'>
          <Button text="Primary Button" type="primary" />
          <Button text="Primary Button" type="primary" />
          <Button text="Primary Button" type="primary" />
          <Button text="Primary Button" type="primary" />
        </div>
      </div>
    </div>
  );
};


export default Screen;
