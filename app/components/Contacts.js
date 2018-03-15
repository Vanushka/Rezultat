/* eslint-disable */
import React, { Component } from 'react';
import { Button, Form, Container } from 'semantic-ui-react';
import InputMask from 'react-input-mask';

export default class NameForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  }

  sendContact = () => {
    const cState = this.state
    const bodyStr = JSON.stringify(cState)
    console.log(bodyStr)
    fetch(`http://localhost:3001/contact`, {
      method: 'POST',
      body: bodyStr,
      headers: {
        "Content-Type": "application/json"
      },
      mode: 'no-cors',
    })
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      alert( JSON.stringify( data ) )
    })
    .catch(function(res){
      console.log(res)
    });
  }
  handleInputChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }
  render() {
    const {name, email, phone, message} = this.state
    return (
  <div id='Contacts'>
    <div id='Contact' />
    <Container>
      <h1>Контакты</h1>
    </Container>
    <Form name='form' id='form' onSubmit={this.sendContact}>
      <Form.Input className='' label={'Имя'} placeholder='Имя' name='name' value={name} onChange={this.handleInputChange} required />
      <Form.Input label={'E-mail'} placeholder='E-mail' name='email' value={email} onChange={this.handleInputChange} required />
      <Form.Input label={'Телефон'} mask='+7\(999)999-99-99' maskChar='' placeholder='+7(' placeholder='Телефон' name='phone' value={phone} onChange={this.handleInputChange} required />
      <Form.TextArea label={'Сообщение'} placeholder='Введите своё сообщение' name='message' value={message} onChange={this.handleInputChange} />
      <Button className='Button_2' type='submit'>Отправить</Button>
    </Form>
  </div>);
  }
}
