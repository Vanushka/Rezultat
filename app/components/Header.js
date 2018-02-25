import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/logo_1.png';
import InputExampleActionDropdown from './InputExampleActionDropdown';

export default class Header extends Component {
  render() {
    return (
      <div id='header' className='HeaderClone'>
        <Link to='/' hash='#Home'><img className='icon' alt='Картинка' src='images/logo_1.png' /></Link>
        <div className='Link'>
          <div>
            <ul>
              <li>
                <Link className='LinkInside' activeClassName='active' to='/#AboutUs' hash='#AboutUs'>О нас</Link>
              </li>
              <li>
                <Link className='LinkInside' activeClassName='active' to='/#ForCustomers' hash='#ForCustomers' >Для заказчиков</Link>
              </li>
              <li>
                <Link className='LinkInside' activeClassName='active' to='/#ForSuppliers' hash='#ForSuppliers'>Для поставщиков</Link>
              </li>
              <li>
                <Link className='LinkInside' activeClassName='active' to='/#SDO' hash='#SDO' >СДО</Link>
              </li>
              <li>
                <Link className='LinkInside' activeClassName='active' to='/#Contacts' hash='#Contacts'>Контакты</Link>
              </li>
            </ul>
            <a className='Button_1' href='#callbackwidget'>Заказать звонок</a>
          </div>
        </div>
        <div><InputExampleActionDropdown /></div>
      </div>
    );
  }
}
