import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './assets/scss/main.scss';


import Root from './config/Root';

ReactDOM.hydrate(
  <AppContainer>
    <Root />
  </AppContainer>,
  document.getElementById('root'),
);
