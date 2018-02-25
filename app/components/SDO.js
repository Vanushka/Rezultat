import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import img from '../assets/images/bussiness3.png';

const ContainerExampleContainer = () => (
  <div id='sdo'>
    <div id='SDO' />
    <Container>
      <h1 className='sdoF'>Система дистанционного обучения</h1>
      <p>Дистанционное обучение по очному курсу повышения квалификации <br />с выдачей удостоверения о повышении квалификации или по программе <br />профессиональной переподготовки с выдачей диплома о <br />профессиональной переподготовке.</p>
      <p>Наш курс разработан экспертами-практиками в <br />сфере госзакупок с опытом более 8 лет. <br />Лекции адаптированы к самым актуальным изменениям <br />в законодательстве и судебной практики.</p>
      <p>Курс предназначен как для тех, кто уже освоил основы госзаказа и <br />желает двигаться дальше, так и для новичков!</p>
    </Container>
    <div id='VerticalLine3' />
    <img className='icon3' alt='Картинка' src='images/bussiness3.png' />
    <Link className='Button_5' to={{ pathname: '/SistemsDO' }}>Подробнее...</Link>
  </div>
);

export default ContainerExampleContainer;
