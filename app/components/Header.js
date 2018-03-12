import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import 'react-router-dom';
import img from '../assets/images/logo_1.png';
import InputExampleActionDropdown from './InputExampleActionDropdown';

export default class Header extends Component {
  render() {
    return (
      <div id='header' className='HeaderClone'>
        <NavLink smooth to='/#Home' activeClassName='current' href='/#Home'><img className='icon' alt='Картинка' src='images/logo_1.png' /></NavLink>
        <div className='Link'>
          <div>
            <ul>
              <li>
                <NavLink className='LinkInside' smooth to='/#AboutUs' activeClassName='selected' href='/#AboutUs' hash='/#AboutUs'>О нас</NavLink>
              </li>
              <li>
                <NavLink className='LinkInside' smooth to='/#ForCustomers' activeClassName='selected' href='/#ForCustomers' >Для заказчиков</NavLink>
              </li>
              <li>
                <NavLink className='LinkInside' smooth to='/#ForSuppliers' activeClassName='selected' href='/#ForSuppliers'>Для поставщиков</NavLink>
              </li>
              <li>
                <NavLink className='LinkInside' smooth to='/#SDO' activeClassName='selected' href='/#SDO' >СДО</NavLink>
              </li>
              <li>
                <NavLink className='LinkInside' smooth to='/#Contact' activeClassName='selected' href='/#Contact'>Контакты</NavLink>
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
