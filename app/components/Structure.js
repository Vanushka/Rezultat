/* eslint-disable */
import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Header';
import Footer from './Footer';

const Structure = () => {
  return (
    <div>
      <div id='up1' />
      <Header />
      <div id='about'>
      <Container text className='AboutContainer'>
        <h1 as='h2'>Структура и органы управления</h1>
        <img className='iconDanger' alt='Картинка' src='images/Danger.png' />
        <p className='DangerMessage'>Данная страница находится в стадии разработки<br />Просим прощения за причинённые неудобства</p>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Structure;
