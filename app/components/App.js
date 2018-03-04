import React from 'react';
import Header from './Header';
import SimpleSlider from './SimpleSlider';
import AboutUs from './AboutUs';
import ContainerExample from './forCustomers';
import ContainerExampleFluid from './forSuppliers';
import ContainerExampleContainer from './SDO';
import ContainerExampleAlignment from './Contacts';

const App = () => {
  return (
    <div>
      <Header />
      <SimpleSlider />
      <AboutUs />
      <ContainerExample />
      <ContainerExampleFluid />
      <ContainerExampleContainer />
      <ContainerExampleAlignment />
    </div>
  );
};

export default App;
