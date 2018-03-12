/* eslint-disable */
import React, { Component } from 'react';
import { Button, Form, Container } from 'semantic-ui-react';
import InputMask from 'react-input-mask';


export default class NameForm extends Component {

  render() {
    return (
  <div id='Contacts'>
    <div id='Contact' />
    <Container>
      <h1>Контакты</h1>
    </Container>
    <Form name='form' id='form' method="post">
      <Form.Field>
        <label htmlFor='username' type='text'>Имя</label>
        <input placeholder='Имя' name='name' required />
      </Form.Field>
      <Form.Field noValidate>
        <label htmlFor='email'>E-mail</label>
        <input name='email' type='email' placeholder='E-mail' id='email' required />
      </Form.Field>
      <Form.Field noValidate>
        <label htmlFor='phone'>Телефон</label>
        <InputMask name='phone' id='phone' type='tel' maskChar='' pattern='[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}' minlength='18' maxlength='18' placeholder='+7(' required />
      </Form.Field>
      <Form.Field>
        <label type='message'>Введите своё сообщение</label>
        <textarea name='message' id='message' type='message' placeholder='Сообщение' required />
      </Form.Field>
      <Button className='Button_2' type='submit' onsubmit="fnc()">Отправить</Button>
    </Form>
  </div>);
  }
}
