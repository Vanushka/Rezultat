/* eslint-disable */
import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Header';
import Footer from './Footer';

const Basis = () => {
  return (
    <div>
      <div id='up1' />
      <Header />
      <div id='aboutBasis'>
      <Container text className='AboutContainer'>
        <h1 as='h2'>Основные сведения</h1>
        <p className='TextB'><b>Учредитель:</b> Дудин Виталий Геннадьевич</p>
        <p className='TextB'><b>Организационно-правовая форма:</b> Общество с ограниченной ответственностью</p>
        <p className='TextB'><b>Наименование без организационно-правовой формы:</b> Результат</p>
        <p className='TextB'><b>Полное наименование:</b> Общество с ограниченной ответственностью «Результат»</p>
        <p className='TextB'><b>Краткое наименование:</b> ООО «Результат»</p>
        <p className='TextB'><b>Дата образования:</b> 03 февраля 2017 год</p>
        <p className='TextB'><b>Юридический адрес:</b> 430009, Республика Мордовия, г. Саранск, ул. Волгоградская, дом 75/1, помещение 2</p>
        <p className='TextB'><b>Почтовый адрес:</b> 430003, Республика Мордовия, Саранск, проспект Ленина, д. 43</p>
        <p className='TextB'><b>ИНН:</b> 132704269483</p>
        <p className='TextB'><b>КПП:</b> 13280100</p>
        <p className='TextB'><b>Банковские реквизиты:</b> Филиал Точка Публичного акционерного общества Банка «Финансовая Корпорация Открытие»
        <br/>Расчетный счет 40702810402500003382 БИК 044525999</p>
        <p className='TextB'><b>Электронная почта:</b> rezultatc@gmail.com</p>
        <p className='TextB'><b>Режим работы:</b> Пятидневная рабочая неделя. С понедельника по пятницу,  с 9.00 до 17.00.</p>
        <p className='TextB'><b>Учебный центр осуществляет:</b> реализацию государственных образовательных программ повышения <br/>квалификации работников образования республики, стажировки, профессиональной переподготовки, переподготовки специалистов</p>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Basis;
