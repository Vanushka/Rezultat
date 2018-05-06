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
        <p>В процессе обучения специалисты делают акцент на проработку практических навыков, а не теоретических основ. После завершения курса вы получаете необходимый набор инструментов (знания и практический опыт) необходимых для работы в сфере госзаказа, а так же документ государственного образца о прохождении данного курса, что положительно влияет на мнение работодателя о Ваших профессиональных навыках.</p>
      </Container>
    </div>
    <Footer />
  </div>
  );
};

export default Suppliers;
