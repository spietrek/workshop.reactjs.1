import React, { Fragment } from 'react';
import './App.css';
import AppRoutes from './AppRoutes';

const App = props => (
  <Fragment>
    <AppRoutes {...props} />
  </Fragment>
);

export default App;
