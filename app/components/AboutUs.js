import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import img from '../assets/images/bussiness.png';


const AboutUs = () => (
    <div id='ContainerEx'>
      <div>
        <img className='icon1' alt='Картинка' src='images/bussiness.png' />
      </div>
      <div id='VerticalLine' />
  <Container text>
    <Header as='h2'>О нас</Header>
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
  <a className='Button_2' href='/about'>Подробнее...</a>
    </div>
);

export default AboutUs;
