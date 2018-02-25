import React from 'react';
import Header from './Header';
import img from '../assets/images/About.png';

const About = () => {
  return (
      <div>
        <Header />
        <div className='up' />
        <div id='about'>
            <img className='aboutIcon' alt='Картинка' src='images/About.png' />
        </div>
      </div>
  );
};

export default About;
