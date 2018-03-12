/* eslint-disable */
import React from 'react';
import { Icon } from 'semantic-ui-react'

const Footer = () => {
  return (
    <div id='footer'>
      <div id='border' />
      <p className='ООО'>
        <a href='https://vk.com/44zakupki223'><Icon link color={'blue'} size={'big'} name='vk' /></a>
        <a href='https://www.youtube.com/'><Icon link color={'red'} size={'big'} name='youtube' /></a>ООО "Результат" 2018 ©
        <a href='https://www.instagram.com/'><Icon link color={'pink'} size={'big'} name='instagram' /></a>
        <a href='https://www.skype.com/en/'><Icon link color={'blue'} size={'big'} name='skype' /></a>
      </p>
    </div>
  );
};

export default Footer;
