import React from 'react';
import './Information.css';
import Icon from './Icon';

const Information = ({ title, info, requirements, icons }) => {

  const generateRequirements = () => {
    if (!requirements) return null;
    return requirements.map((requiriment, index) => (
      <h5 key={index} >{requiriment}</h5>
    ));
  }

  const generateIcons = () => {
    if (!icons) return null;
    return icons.map((icon, index) => (
      <Icon key={index} img={icon.img} url={icon.url}/>
    ));
  }

  
  return (
    <div className='info-container'>
      <div className='info-container-primary'>
          <div className='info-container-title'>
            <h1 className='info-title'>{ title }</h1>
          </div>
        <div className='info-container-secundary'>
          <div className='info-container-text'>
            <h2 className='info-subTitle'>{info[0].subTitle}</h2>
            <p className='text'>{info[0].text}</p>
            <div className='info-container-list'>
              {generateRequirements()}
            </div>
          </div>
          <div className='info-container-image'>
            
          </div>
        </div>
        <div className='info-container-secundary'>
          <div className='info-container-text'>
            <h2 className='info-subTitle'>{info[1].subTitle}</h2>
            <p className='text'>{info[1].text}</p>
          </div>
          <div className='info-container-text'>
            <h2 className='info-subTitle'>{info[2].subTitle}</h2>
            <p className='text'>{info[2].text}</p>
            <div className='info-container-icons'>
              {generateIcons()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
