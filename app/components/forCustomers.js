/* eslint-disable */
import React from 'react';
import { Container } from 'semantic-ui-react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import img from '../assets/images/bussiness1.png';

const ContainerExample = () => (
  <div>
  <Container fluid>
    <div id='forCustomers'>
      <div id='ForCustomers' />
      <h1>Для Заказчиков</h1>
    <p className='TextPc'>Контрактная система в сфере закупок товаров, работ, услуг 44 ФЗ
      <br /> курс, который сэкономит ваши деньги и время.
      <br />Чтобы превратить госконтракт в эффективный
      <br />бизнес инструмент нужно просто грамотно пользоваться законом.
      <br />Как? Мы научим вас этому за 5 дней! Вы будете
      <br />знать: как составить заявку на участие в котировке и аукционе,
      <br />чтобы ее не отклонили, эффективные стратегии участия в тендере.
    </p>
    <div id='VerticalLine1' />
    <NavLink className='Button_3' href='/Customers' to='/Customers#up'>Подробнее</NavLink>
    </div>
  </Container>
  <img className='icon2' alt='Картинка' src='images/bussiness1.png' />
  </div>
);

export default ContainerExample;
