import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class MenuExampleMenus extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item name='About us' active={activeItem === 'About us'} onClick={this.handleItemClick}>
          О нас
        </Menu.Item>
        <Menu.Item name='For business' active={activeItem === 'For business'} onClick={this.handleItemClick}>
          Для заказчиков
        </Menu.Item>
        <Menu.Item name='For suppliers' active={activeItem === 'For suppliers'} onClick={this.handleItemClick}>
          Для поставщиков
        </Menu.Item>
        <Menu.Item name='SDO' active={activeItem === 'SDO'} onClick={this.handleItemClick}>
        СДО
        </Menu.Item>
        <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}>
          Контакты
        </Menu.Item>
      </Menu>
    );
  }
}
