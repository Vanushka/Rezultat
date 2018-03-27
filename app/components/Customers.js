import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Header';
import Footer from './Footer';
import img from '../assets/images/Danger.png';

const Customers = () => {
  return (
  <div>
    <div id='up' />
      <Header />
    <div id='customers'>
      <Container text className='CustomersContainer'>
      <h1 className='textC' as='h2'>Для заказчиков</h1>
      <img className='iconDanger' alt='Картинка' src='images/Danger.png' />
      <p className='DangerMessage'>Данная страница находится в стадии разработки<br />Просим прощения за причинённые неудобства</p>
      </Container>
    </div>
      <Footer />
  </div>
  );
};

export default Customers;
