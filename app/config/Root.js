import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import App from '../components/App';
import Basis from '../components/Basis';
import Structure from '../components/Structure';
import Documents from '../components/Documents';
import Leadership from '../components/Leadership';
import About from '../components/About';
import Customers from '../components/Customers';
import Suppliers from '../components/Suppliers';
import SistemsDO from '../components/SistemsDO';

const Root = () => {
  return (
    <Routes location='hash'>
      <div>
        <Route exact strict path='/' component={App} />
        <Route exact path='/Basis' component={Basis} />
        <Route exact path='/Structure' component={Structure} />
        <Route exact path='/Documents' component={Documents} />
        <Route exact path='/Leadership' component={Leadership} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Customers' component={Customers} />
        <Route exact path='/Suppliers' component={Suppliers} />
        <Route exact path='/SistemsDO' component={SistemsDO} />
      </div>
    </Routes>
  );
};

export default Root;
