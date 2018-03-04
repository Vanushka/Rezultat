import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as alias } from 'react-router-hash-link';
import img from '../assets/images/logo_1.png';
import InputExampleActionDropdown from './InputExampleActionDropdown';
import style from '../assets/scss/style.scss';

export default class Header extends Component {
  render() {
    return (
      <div id='header' className='HeaderClone'>
        <div id='Home' />
        <alias to='/#Home' activeClassName='current' href='/#Home'><img className='icon' alt='Картинка' src='images/logo_1.png' /></alias>
        <div className='Link'>
          <div>
            <ul>
              <li>
                <NavLink className='LinkInside' smooth to='/about' exact activeClassName='current' href='/#AboutUs'>О нас</NavLink>
              </li>
              <li>
                <NavLink className='LinkInside' smooth to='/#ForCustomers' exact activeClassName='current' href='/#ForCustomers' >Для заказчиков</NavLink>
              </li>
              <li>
                <NavLink className='LinkInside' smooth to='/#ForSuppliers' exact activeClassName='current' href='/#ForSuppliers'>Для поставщиков</NavLink>
              </li>
              <li>
                <NavLink className='LinkInside' smooth to='/#SDO' exact activeClassName='current' href='/#SDO' >СДО</NavLink>
              </li>
              <li>
                <NavLink className='LinkInside' smooth to='/#Contacts' exact activeClassName='current' href='/#Contacts'>Контакты</NavLink>
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
