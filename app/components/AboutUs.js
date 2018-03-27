import React from 'react';
import { Container } from 'semantic-ui-react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import img from '../assets/images/bussiness.png';


const AboutUs = () => (
    <div id='ContainerEx'>
      <div id='AboutUs' />
      <div>
        <img className='icon1' alt='Картинка' src='images/bussiness.png' />
      </div>
      <div id='VerticalLine' />
      <h2 className='TextA' as='h2'>О нас</h2>
  <Container fluid>
    <p className='Text' >ООО Результат - центр информационно-технической и правовой поддержки.<br />
    Основные направления деятельности:<br />
      - повышение квалификации и профессиональная подготовка;<br />
      - сопровождение деятельности заказчиков в рамках 44 и 223-ФЗ;<br />
      - сопровождение деятельности поставщиков в рамках 44 и 223-ФЗ;<br />
      - защита интересов заказчиков в контролирующих органах;<br />
      - защита интересов поставщиков в рамках закупочной деятельности;<br />
      - решение юридических вопросов.<br />
    </p>
  </Container>
  <NavLink className='Button_2' to='/about#up' href='/about'>Подробнее</NavLink>
    </div>
);

export default AboutUs;
