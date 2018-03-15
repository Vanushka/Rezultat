/* eslint-disable */
import React from 'react';
import { Icon } from 'semantic-ui-react'

const Footer = () => {
  return (
    <div id='footer'>
      <div id='border' />
      <p className='ООО'>
        <a  target='_blank' href='https://vk.com/44zakupki223'><Icon link color={'blue'} size={'big'} name='vk' /></a>
        <a  target='_blank' href='https://www.youtube.com/'><Icon link color={'red'} size={'big'} name='youtube' /></a>ООО "Результат" © 2018
        <a  target='_blank' href='https://www.instagram.com/rezultatc/'><Icon link color={'pink'} size={'big'} name='instagram' /></a>
        <a  target='_blank' href='https://www.facebook.com/groups/1233831096713868/'><Icon link color={'#41599d'} size={'big'} name='facebook' /></a>
      </p>
    </div>
  );
};

export default Footer;
