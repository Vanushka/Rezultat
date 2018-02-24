import React from 'react';
import Home from './Home';
import Header from './Header';
import SimpleSlider from './SimpleSlider';
import AboutUs2 from './AboutUs2';
import AboutUs from './AboutUs';
import ForCustomers2 from './forCustomers2';
import ContainerExample from './forCustomers';
import ForSuppliers2 from './forSuppliers2';
import ContainerExampleFluid from './forSuppliers';
import SDO2 from './SDO2';
import ContainerExampleContainer from './SDO';
import ContainerExampleAlignment from './Contacts';

const App = () => {
  return (
    <div>
      <Home />
      <Header />
      <SimpleSlider />
      <AboutUs2 />
      <AboutUs />
      <ForCustomers2 />
      <ContainerExample />
      <ForSuppliers2 />
      <ContainerExampleFluid />
      <SDO2 />
      <ContainerExampleContainer />
      <ContainerExampleAlignment />
    </div>
  );
};

export default App;
