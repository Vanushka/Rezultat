import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../components/App';
import ButtonExamplePositive from '../components/ButtonExamplePositive';


const Root = () => {
  return (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/" component={ButtonExamplePositive} />
      </div>
    </Router>
  );
};

export default Root;
