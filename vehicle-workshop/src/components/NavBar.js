import React, { useState } from 'react';
import './NavBar.css';

import Button from './Button';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
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
