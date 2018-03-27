import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Header';
import Footer from './Footer';

const Suppliers = () => {
  return (
  <div>
    <div id='up' />
      <Header />
    <div id='Supplier'>
      <Container text className='SuppliersContainer'>
        <h1 as='h2'>Для поставщиков</h1>
        <img className='iconDanger' alt='Картинка' src='images/Danger.png' />
        <p className='DangerMessage'>Данная страница находится в стадии разработки<br />Просим прощения за причинённые неудобства</p>
      </Container>
    </div>
    <Footer />
  </div>
  );
};

export default Suppliers;
