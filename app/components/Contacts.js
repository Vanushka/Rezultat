/* eslint-disable */
import React, { Component } from 'react';
import { Button, Form, Container, Icon } from 'semantic-ui-react';
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
    const self = this
    fetch('http://localhost:3001/contact/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cState)
    }).then(function(res){
      return res.json();
    })
    .then(function(data){
      alert( data.msg )
      self.setState({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
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
      <h1 className='ContH1'>Контакты</h1>
      <div className='IconsContact' >
        <p ><Icon disabled color={'white'} size={'large'} name='mail' />&nbsp;&nbsp;rezultatc@gmail.com</p>
        <p ><Icon disabled color={'white'} size={'large'} name='phone' />&nbsp;&nbsp;+7 999 150-20-07</p>
        <p ><Icon disabled color={'white'} size={'large'} name='marker' />&nbsp;&nbsp;430003 Республика Мордовия,<br /> &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;г.Саранск, пр.Ленина 43</p>
      </div>
      <div className='Map'>
        <iframe title='maps' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2334.1470690014025!2d45.18684431598669!3d54.19517998016575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414408dd1415028d%3A0xa488d5495037c567!2z0L_RgC4g0JvQtdC90LjQvdCwLCA0Mywg0KHQsNGA0LDQvdGB0LosINCg0LXRgdC_LiDQnNC-0YDQtNC-0LLQuNGPLCA0MzAwMDM!5e0!3m2!1sru!2sru!4v1521986478791' />
      </div>
    <Form name='form' id='form' onSubmit={this.sendContact} >
      <Form.Input label={'Имя'} placeholder='Имя' name='name' value={name} onChange={this.handleInputChange} required />
      <Form.Input label={'E-mail'} placeholder='E-mail' name='email' type='email' value={email} onChange={this.handleInputChange} required />
      <Form.Input label={'Телефон'} mask='+7\(999)999-99-99' maskChar='' placeholder='+7(' name='phone' value={phone} onChange={this.handleInputChange} required />
      <Form.TextArea label={'Сообщение'} placeholder='Введите своё сообщение' name='message' value={message} onChange={this.handleInputChange} />
      <Button className='Button_2' type='submit'>Отправить</Button>
    </Form>
    </Container>
  </div>);
  }
}
