import React, { useState } from 'react';
import './Screen.css';
import Button from './Button.js';
import Gallery from './Gallery.js';

const Screen = ({ text, title, imagesProducts, imagesServices, imagesBranches, imagesSchedules }) => {
  const [isProducts, setIsProducts] = useState(false);
  const [isServices, setIsServices] = useState(false);
  const [isBranches, setIsBranches] = useState(false);
  const [isSchedules, setIsSchedules] = useState(false);

  const handleProductsClick = () => {
    setIsProducts(!isProducts);
    setIsServices(false);
    setIsBranches(false);
    setIsSchedules(false);
  };

  const handleServicesClick = () => {
    setIsProducts(false);
    setIsServices(!isServices);
    setIsBranches(false);
    setIsSchedules(false);
  };

  const handleBranchesClick = () => {
    setIsProducts(false);
    setIsServices(false);
    setIsBranches(!isBranches);
    setIsSchedules(false);
  };

  const handleSchedulesClick = () => {
    setIsProducts(false);
    setIsServices(false);
    setIsBranches(false);
    setIsSchedules(!isSchedules);
  };

  return (
    <div className='screen-container-screen'>
      <div className='screen-container-primary'>
        <div className='screen-container-title'>
          <h1>{title}</h1>
        </div>
        <div className='screen-container-text'>
          <p>{text}</p>
        </div>
        <div className='screen-container-secondary'>
          <Button text="productos" type="primary" onClick={handleProductsClick} />
          <Button text="servicios" type="primary" onClick={handleServicesClick} />
          <Button text="sucursales" type="primary" onClick={handleBranchesClick} />
          <Button text="horarios" type="primary" onClick={handleSchedulesClick} />
        </div>

        {isProducts && (
          <div className='overlay'>
            <Gallery images={imagesProducts} />
            <div>
              <Button text="Close" type="primary" onClick={handleProductsClick} />
            </div>
          </div>
        )}
        {isServices && (
          <div className='overlay'>
            <Gallery images={imagesServices} />
            <div>
              <Button text="Close" type="primary" onClick={handleServicesClick} />
            </div>
          </div>
        )}
        {isBranches && (
          <div className='overlay'>
            <Gallery images={imagesBranches} />
            <div>
              <Button text="Close" type="primary" onClick={handleBranchesClick} />
            </div>
          </div>
        )}
        {isSchedules && (
          <div className='overlay'>
            <Gallery images={imagesSchedules} />
            <div>
              <Button text="Close" type="primary" onClick={handleSchedulesClick} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Screen;
