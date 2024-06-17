import React, { useState } from 'react';
import './NavBar.css';

import Icon from './Icon';
import Button from './Button';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

const NavBar = ( { icons, myApp } ) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isLoging, setIsLoging] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const  DropdownRegister = () => {
    setIsOpen(!isOpen);
    setIsRegister(!isRegister);
  };

  const  DropdownLoging = () => {
    setIsOpen(!isOpen);
    setIsLoging(!isLoging);
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
        <div className="navbar-brand">{myApp}</div>
        <div className='container-botton'>
          <Button text="Primary Botton" onClick={toggleDropdown} type="primary" />
        </div>
      </div>
      {isOpen && (
        <div className="overlay">
          <ul className="navbar-menu">
            <li className="navbar-item" onClick={toggleDropdown}>cerrar</li>
            <li className="navbar-item" onClick={DropdownRegister}>registrarce</li>
            <li className="navbar-item" onClick={DropdownLoging}>inciar secion</li>
          </ul>
        </div>
      )}
      {isRegister && (
        <div className='overlay'>
          <RegistrationForm onClick={DropdownRegister}/>
        </div>
      )}
      {isLoging && (
        <div className='overlay'>
          <LoginForm onClick={DropdownLoging}/>
        </div>
      )}
    </div>
  );
};

export default NavBar;
