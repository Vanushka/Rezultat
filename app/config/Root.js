import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../components/App';
import About from '../components/About';

const Root = () => {
  return (
    <Router>
      <div>
        <Route exact='true' path='/' component={App} />,
        <Route exact='true' path='/about' component={About} />
      </div>
    </Router>
  );
};

export default Root;
