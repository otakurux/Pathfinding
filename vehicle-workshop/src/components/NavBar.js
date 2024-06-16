import React, { useState } from 'react';
import './NavBar.css';
import Icon from './Icon';

import Button from './Button';

const NavBar = ( { icons } ) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const generateIcons = () => {
    if (!icons) return null;
    return icons.map((icon, index) => (
      <Icon key={index} img={icon.img} url={icon.url}/>
    ));
  }

  return (
    <div className="navbar">
      <div class="fixed-div">
        {generateIcons()}
      </div>
      <div className="navbar-content">
        <div className="navbar-brand">Mi Aplicación</div>
        <Button text="Primary Button" onClick={toggleDropdown} type="primary" />
      </div>
      {isOpen && (
        <div className="overlay">
          <ul className="navbar-menu">
            <li className="navbar-item" onClick={toggleDropdown}>Opción 1</li>
            <li className="navbar-item" onClick={toggleDropdown}>Opción 2</li>
            <li className="navbar-item" onClick={toggleDropdown}>Opción 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
