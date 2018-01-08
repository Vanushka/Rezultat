import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/Header';
import MenuExampleMenus from '../components/MenuExampleMenus';
import ContainerExampleAlignment from '../components/ContainerExampleAlignment';

const Root = () => {
  return (
    <Router>
      <div>
        <Route path="/" component={Header} />
        <Route path="/" component={MenuExampleMenus} />
        <Route path="/" component={ContainerExampleAlignment} />
      </div>
    </Router>
  );
};

export default Root;
