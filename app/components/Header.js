import React, { Component } from 'react';
import img from '../assets/images/logo.png';

export default class Header extends Component {
  render() {
    return (
      <div id='header'>
        <img className='icon' alt='Картинка' src='images/logo.png' />
        <div className='Link'>
          <div id='block'>
            <ul>
              <li>
                <a className='LinkInside' href='1'>О нас</a>
              </li>
              <li>
                <a className='LinkInside' href='2'>Для заказчиков</a>
              </li>
              <li>
                <a className='LinkInside' href='3'>Для поставщиков</a>
              </li>
              <li>
                <a className='LinkInside' href='3'>СДО</a>
              </li>
              <li>
                <a className='LinkInside' href='3'>Контакты</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
