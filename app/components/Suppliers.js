import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Header';
import Footer from './Footer';

const Suppliers = () => {
  return (
  <div>
    <div id='sup' />
      <Header />
    <div id='Supplier'>
      <Container text className='SuppliersContainer'>
        <h1 as='h2'>Для поставщиков</h1>
        <p>Блок 44-ФЗ (15 000)</p>
        <p>Блок 223-ФЗ (15 000)</p>
      </Container>
    </div>
    <Footer />
  </div>
  );
};

export default Suppliers;
