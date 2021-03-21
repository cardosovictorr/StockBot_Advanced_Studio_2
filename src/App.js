import React from 'react';
import './App.css';
import Home from './pages/Home.js'
import Services from './pages/Services.js'
import AboutUs from './pages/AboutUs.js'
import NavBarCustom from './components/NavBarCustom.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css'
//import { Button, Navbar } from 'react-bootstrap'

function App() {
  return (
    <>
      <Router>
        <NavBarCustom />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/about-us' exact component={AboutUs} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
