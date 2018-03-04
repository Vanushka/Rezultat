import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header } from 'semantic-ui-react';
import img from '../assets/images/bussiness2.png';

const ContainerExampleFluid = () => (
  <div id='Suppliers'>
    <div id='ForSuppliers' />
    <div>
      <img className='icon1' alt='Картинка' src='images/bussiness2.png' />
    </div>
    <div id='VerticalLine2' />
    <Container fluid>
      <Header className='Text' as='h2'>Для Поставщиков</Header>
        <p>Предлагаем пройти обучение по курсу 44-ФЗ Поставщик- «Успешное начало».<br />В рамках курса вы получите ответы на важные вопросы,<br />просто необходимые для работы в сфере госусзакупок, а именно:<br />- Что такое госзакупки?<br />- Можно ли зарабатывать в сфере государственного заказа?<br />- Как найти нужные тендеры?<br />- Что нужно для участия?<br />- Как читать документы заказчика?<br />- Как подготовить заявку на участие в тендерах?<br />- Что делать если заказчик нарушает Ваши права?</p>
    </Container>
    <Link className='Button_4' href='/Suppliers' to='/Suppliers' >Подробнее...</Link>
  </div>
);

export default ContainerExampleFluid;
