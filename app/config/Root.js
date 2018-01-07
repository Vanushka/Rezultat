import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MenuExampleMenus from '../components/MenuExampleMenus';

const Root = () => {
  return (
    <Router>
      <Route path="/" component={MenuExampleMenus} />
    </Router>
  );
};

export default Root;
