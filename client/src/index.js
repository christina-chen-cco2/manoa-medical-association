import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import PhysicianSignup from "./PhysicianSignup";
import Navbar from "./Navbar";

ReactDOM.render(
  <Router>
    <Navbar/>
    <Switch>
      <Route exact path="/"/>
      <Route exact path="/physician-signup" component={PhysicianSignup}/>
      <Route exact path="/patient-signup"/>
      <Route exact path="/physician-login"/>
      <Route exact path="/patient-login"/>
      <Route exact path="/record-search"/>
      <Route exact path="/record-access"/>
      <Route exact path="/record-upload"/>
      <Route exact path="/my-profile"/>
    </Switch>
  </Router>,
  document.getElementById('root')
);

