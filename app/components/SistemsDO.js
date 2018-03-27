import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Header';
import Footer from './Footer';
import img from '../assets/images/Danger.png';

const SistemsDO = () => {
  return (
    <div>
      <div id='up' />
        <Header />
      <div id='SistemsDO'>
      <Container text className='SDOContainer'>
        <h1 as='h2'>Система дистанционного обучения</h1>
        <img className='iconDanger' alt='Картинка' src='images/Danger.png' />
        <p className='DangerMessage'>Данная страница находится в стадии разработки<br />Просим прощения за причинённые неудобства</p>
      </Container>
      </div>
      <Footer />
    </div>
  );
};

export default SistemsDO;
