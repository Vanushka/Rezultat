import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import App from '../components/App';
import About from '../components/About';
import Customers from '../components/Customers';
import Suppliers from '../components/Suppliers';
import SistemsDO from '../components/SistemsDO';

const Root = () => {
  return (
    <Routes location='hash'>
      <div>
        <Route exact strict path='/' component={App} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Customers' component={Customers} />
        <Route exact path='/Suppliers' component={Suppliers} />
        <Route exact path='/SistemsDO' component={SistemsDO} />
      </div>
    </Routes>
  );
};

export default Root;
