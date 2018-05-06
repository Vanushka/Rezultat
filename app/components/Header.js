/* eslint-disable */
import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import 'react-router-dom';
import img from '../assets/images/logo_1.png';
import InputExampleActionDropdown from './InputExampleActionDropdown';

export default class Header extends Component {
  render() {
    return (
      <div id='header' className='HeaderClone'>
        <NavLink smooth to='/#Home' title='Главная' href='/#Home'><img className='icon' alt='Картинка' src='images/logo_1.png' /></NavLink>
        <div className='Link'>
          <div>
            <ul>
              <li>
                <Dropdown id='Dropdown' className='TextD' text='Сведения об образовательной организации' simple item>
                  <Dropdown.Menu>
                    <NavLink className={location.hash == "#up1" ? "activeD" : "item"} to='/Basis#up1' >Основные сведения</NavLink>
                    <NavLink className={location.hash == "#up2" ? "activeD" : "item"} to='/Structure#up2' >Структура и органы усправления</NavLink>
                    <NavLink className={location.hash == "#up3" ? "activeD" : "item"} to='/Leadership#up3' >Руководство</NavLink>
                    <NavLink className={location.hash == "#up4" ? "activeD" : "item"} to='/Education#up4' >Образование</NavLink>
                    <NavLink className={location.hash == "#up5" ? "activeD" : "item"} to='/Documents#up5' >Документы</NavLink>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <div id='VerticalLineHeader' />
              <li>
                <NavLink className={location.hash == "#AboutUs" ? "active" : ""} id='LinkInside' smooth to='/#AboutUs' >О нас</NavLink>
              </li>
              <li>
                <NavLink className={location.hash == "#ForCustomers" ? "active" : ""} id='LinkInside' smooth to='/#ForCustomers' >Для заказчиков</NavLink>
              </li>
              <li>
                <NavLink className={location.hash == "#ForSuppliers" ? "active" : ""} id='LinkInside' smooth to='/#ForSuppliers' >Для поставщиков</NavLink>
              </li>
              <li>
                <NavLink className={location.hash == "#SDO" ? "active" : ""} id='LinkInside' smooth to='/#SDO' >СДО</NavLink>
              </li>
              <li>
                <NavLink className={location.hash == "#Contact" ? "active" : ""} id='LinkInside' smooth to='/#Contact' >Контакты</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div><InputExampleActionDropdown /></div>
      </div>
    );
  }
}
