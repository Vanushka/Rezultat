/* eslint-disable */
import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Container, Header } from 'semantic-ui-react';
import img from '../assets/images/bussiness2.png';

const ContainerExampleFluid = () => (
    <Container fluid>
      <div id='Suppliers'>
        <div id='ForSuppliers' />
          <div className='forsuppliers'>
      <Header className='TextC' as='h2'>Для Поставщиков</Header>
              <p className='TextC'>Предлагаем пройти обучение по курсу 44-ФЗ Поставщик- «Успешное начало».
                <br />В рамках курса вы получите ответы на важные вопросы,
                <br />просто необходимые для работы в сфере госусзакупок, а именно:
                <br /> - Что такое госзакупки?<br /> - Можно ли зарабатывать в сфере государственного заказа?
                <br /> - Как найти нужные тендеры?<br /> - Что нужно для участия?<br /> - Что такое ЭЦП, и как её получить?
                <br /> - Как читать документы заказчика?<br /> - Как подготовить заявку на участие в тендерах?
                <br /> - Что делать если заказчик нарушает Ваши права?</p>
              <NavLink className='Button_4' href='/Suppliers#up' to='/Suppliers#up' >Подробнее</NavLink>
              <img className='icon3' alt='Картинка' src='images/bussiness2.png' />
            <div id='VerticalLine3' />
          </div>
        </div>
    </Container>
);

export default ContainerExampleFluid;
