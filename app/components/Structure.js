/* eslint-disable */
import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Header';
import Footer from './Footer';

const Structure = () => {
  return (
    <div>
      <div id='up1' />
      <Header />
      <div id='about'>
      <Container text className='AboutContainer'>
        <h1 as='h2'>Структура и органы управления</h1>
        <p className='TextS'><b>Директор ООО «Результат»:</b> Дудин Виталий Геннадьевич</p>
        <p className='TextS'><b>Телефон:</b> +7 (8342) 313 343</p>
        <p className='TextS'><b>Электронная почта:</b> rezultatc@gmail.com</p>
        <p className='TextS'><b>Руководитель учебного центра дополнительного профессионального образования:</b> Кузина Ольга Владимировна</p>
        <p className='TextS'><b>Телефон:</b> +7 963 148 09 97</p>
        <p className='TextS'><b>Электронная почта:</b> rezultatc@gmail.com</p>
        <p className='TextS'><b>Учредитель:</b> Сюда прикрепляем положение об учебном центре дополнительного профессионального образования общества с ограниченной ответственностью Результат</p>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Structure;
