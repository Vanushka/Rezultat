import React from 'react';
import Header from './Header';
import SimpleSlider from './SimpleSlider';
import AboutUs from './AboutUs';
import ContainerExample from './forCustomers';
import ContainerExampleFluid from './forSuppliers';
import ContainerExampleContainer from './SDO';
import NameForm from './Contacts';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <div id='Home' />
      <Header />
      <SimpleSlider />
      <AboutUs />
      <ContainerExample />
      <ContainerExampleFluid />
      <ContainerExampleContainer />
      <NameForm />
      <Footer />
    </div>
  );
};

export default App;
