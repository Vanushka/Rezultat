/* eslint-disable */
import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Header';
import Footer from './Footer';

const About = () => {
  return (
    <div>
      <div id='ab' />
      <Header />
      <div id='about'>
      <Container text className='AboutContainer'>
        <h1 as='h2'>О нас</h1>
        <p>"Результат" видит свою миссию в надежном, эффективном и своевременном решении возникающих вопросов Наших клиентов.</p>
        <p>Стратегической целью является становление ООО "Результат" лидером рынка на территории Российской Федерации, рост эффективности деятельности, реализация современных технологий в повседневной деятельности.</p>
        <p>"Результат" располагает квалифицированным персоналом и отлаженными бизнес процессами. Осуществляет свою деятельность в более 60 регионах Российской Федерации. В настоящее время компания активно реализует масштабные проекты по освоению новых территорий и смежных направлений.</p>
        <p>"Результат" - надежный партнер Вашего бизнеса, способный разрешать сложные ситуации. Компания входит в 100 лучших образовательных организаций России.</p>
      </Container>
      </div>
      <Footer />
    </div>
  );
};

export default About;
