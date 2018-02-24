import React, { Component } from 'react';
import img from '../assets/images/logo_1.png';
import InputExampleActionDropdown from './InputExampleActionDropdown';

export default class Header extends Component {
  render() {
    return (
      <div id='header' className='HeaderClone'>
        <a href='#Home'><img className='icon' alt='Картинка' src='images/logo_1.png' /></a>
        <div className='Link'>
          <div>
            <ul>
              <li>
                <a className='LinkInside' href='#AboutUs2'>О нас</a>
              </li>
              <li>
                <a className='LinkInside' href='#ForCustomers2'>Для заказчиков</a>
              </li>
              <li>
                <a className='LinkInside' href='#ForSuppliers2'>Для поставщиков</a>
              </li>
              <li>
                <a className='LinkInside' href='#SDO2'>СДО</a>
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
