import React from 'react';
import './Footer.css';
import Icon from './Icon';

const Footer = ({  contactUs, icons, we, links }) => {
    const generateIcons = () => {
        if (!icons) return null;
        return icons.map((icon, index) => (
          <Icon key={index} img={icon.img} url={icon.url}/>
        ));
    };

    const generateContactUs = () => {
        if(!contactUs) return null;
        return contactUs.map((contact) => (
            <p>{contact}</p>
        ));
    };

    
    const generateLinks = () => {
        if(!links) return null;
        return links.map((link) => (
            <li><a href={link.href}>{link.text}</a></li>
        ));
    };


    return (
        <footer className="footer-container">
        <div className="footer-section contact-us">
            <h2>Contáctanos</h2>
            {generateContactUs()}
        </div>
        <div className="footer-section social-media">
            <h2>Síguenos</h2>
            <div className="social-icons">
            {generateIcons()}
            </div>
        </div>
        <div className="footer-section about-us">
            <h2>{we.title}</h2>
            <p>{we.text}</p>
        </div>
        <div className="footer-section links">
            <h2>Enlaces útiles</h2>
            <ul>
            {generateLinks()}
            </ul>
        </div>
        </footer>
    );
};

export default Footer;
