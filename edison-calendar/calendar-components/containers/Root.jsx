import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Routes from '../routes';

const Root = () => ( // eslint-disable-line react/prop-types
    <Router>
      <Routes />
    </Router>
);

export default Root;
