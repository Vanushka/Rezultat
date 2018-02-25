import React from 'react';
import { Button, Form, Container, Divider } from 'semantic-ui-react';

const ContainerExampleAlignment = () => (
  <div id='Contacts'>
    <Container textAlign='justified'>
      <Divider />
      <h1>Контакты</h1>
    </Container>
    <Form>
      <Form.Field>
        <input placeholder='ФИО' />
      </Form.Field>
      <Form.Field>
        <input placeholder='E-mail' />
      </Form.Field>
      <Form.Field>
        <input placeholder='+7(' />
      </Form.Field>
      <Form.Field>
        <Form.Radio label='Заказчик' control='input' value='ruby' type='radio' name='htmlRadios' />
        <Form.Radio label='Поставщик' control='input' value='ruby' type='radio' name='htmlRadios' />
      </Form.Field>
      <Button className='Button_2' type='submit'>Отправить</Button>
    </Form>
  </div>
);

export default ContainerExampleAlignment;
