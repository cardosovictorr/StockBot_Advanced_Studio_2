import React from 'react';
import './App.css';
import NavBarCustom from './components/NavBarCustom.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
//import { Button, Navbar } from 'react-bootstrap'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <NavBarCustom />
          <Route path='/' exact />
        </Switch>
      </Router>

    </>
  );
}

export default App;
