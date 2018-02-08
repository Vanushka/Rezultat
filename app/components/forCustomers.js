import React from 'react';
import { Container } from 'semantic-ui-react';
import img from '../assets/images/bussiness1.png';

const ContainerExample = () => (
  <div id=''>
  <Container text>
    <div id='forCustomers'>
      <h1>Для Заказчиков</h1>
    <p>Обучение госзакупкам и тендерам с нуля «44 ФЗ успешное начало» <br /> курс, который сэкономит ваши деньги и время. <br />Чтобы превратить госконтракт в эффективный <br />бизнес инструмент нужно просто грамотно пользоваться законом. <br />Как? Мы научим вас этому за 5 дней! Вы будете <br />знать: как составить заявку на участие в котировке и аукционе, <br />чтобы ее не отклонили, эффективные стратегии участия в тендере.</p>
    <div id='VerticalLine1' />
    <a className='Button_3' href='1'>Подробнее...</a>
    </div>
  </Container>
  <img className='icon2' alt='Картинка' src='images/bussiness1.png' />
  </div>
);

export default ContainerExample;