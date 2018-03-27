import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Container } from 'semantic-ui-react';
import img from '../assets/images/bussiness3.png';

const ContainerExampleContainer = () => (
  <div>
    <Container>
      <div id='sdo'>
        <div id='SDO' />
      <div className='sdoT'>
      <h1 className='sdoF'>Система дистанционного обучения</h1>
      <p>Дистанционное обучение по очному курсу повышения квалификации <br />с выдачей удостоверения о повышении квалификации или по программе <br />профессиональной переподготовки с выдачей диплома о <br />профессиональной переподготовке.</p>
      <p>Наш курс разработан экспертами-практиками в <br />сфере госзакупок с опытом более 8 лет. <br />Лекции адаптированы к самым актуальным изменениям <br />в законодательстве и судебной практики.</p>
      <p>Курс предназначен как для тех, кто уже освоил основы госзаказа и <br />желает двигаться дальше, так и для новичков!</p>
      </div>
    <div id='VerticalLine3' />
    <NavLink className='Button_5' href='/SistemsDO' to='/SistemsDO#up'>Подробнее</NavLink>
      </div>
    </Container>
    <img className='icon3' alt='Картинка' src='images/bussiness3.png' />
  </div>
);

export default ContainerExampleContainer;
