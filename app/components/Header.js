import React, { Component } from 'react';
import img from '../assets/images/logo_1.png';
import InputExampleActionDropdown from './InputExampleActionDropdown';

export default class Header extends Component {
  render() {
    return (
      <div id='header' className='HeaderClone'>
        <img a='#Home' className='icon' alt='Картинка' src='images/logo_1.png' />
        <div className='Link'>
          <div>
            <ul>
              <li>
                <a className='LinkInside' href='#ContainerEx'>О нас</a>
              </li>
              <li>
                <a className='LinkInside' href='#forCustomers'>Для заказчиков</a>
              </li>
              <li>
                <a className='LinkInside' href='#Suppliers'>Для поставщиков</a>
              </li>
              <li>
                <a className='LinkInside' href='#SDO'>СДО</a>
              </li>
              <li>
                <a className='LinkInside' href='#Contacts'>Контакты</a>
              </li>
            </ul>
            <a className='Button_1' href="#callbackwidget">Заказать звонок</a>
          </div>
        </div>
        <div><InputExampleActionDropdown /></div>
      </div>
    );
  }
}
