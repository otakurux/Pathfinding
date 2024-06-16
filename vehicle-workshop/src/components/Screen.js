import React from 'react';
import './Screen.css';
import Button from './Button.js'

const Screen = ({ text, title, icons }) => {
  return (
    <div className='screen-container-screen'>
      <div className='screen-container-primary'>
        <div className='screen-container-title'>
          <h1> {title} </h1>
        </div>
        <div className='screen-container-text'>
          <p>{ text }</p>
        </div>
        <div className='screen-container-secondary'>
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
