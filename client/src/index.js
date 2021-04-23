import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import './index.css';
import Navbar from "./Navbar";
import Landing from './Landing';
import PhysicianSignup from "./PhysicianSignup";
import RecordSearch from "./RecordSearch";
import PhysicianRecordAccess from "./PhysicianRecordAccess"
import PatientRecordAccess from "./PatientRecordAccess"
import PatientRecordUpload from "./PatientRecordUpload"
import PhysicianRecordUpload from "./PhysicianRecordUpload";

ReactDOM.render(
  <Router>
    <Navbar/>
    <Container style={{ width: '85vw' }}>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/physician-signup" component={PhysicianSignup}/>
        <Route exact path="/patient-signup"/>
        <Route exact path="/physician-login"/>
        <Route exact path="/patient-login"/>
        <Route exact path="/record-search" component={RecordSearch}/>
        <Route exact path="/patient-record-access" component={PatientRecordAccess}/>
        <Route exact path="/physician-record-access" component={PhysicianRecordAccess}/>
        <Route exact path="/patient-record-upload" component={PatientRecordUpload}/>
        <Route exact path="/physician-record-upload" component={PhysicianRecordUpload}/>
        <Route exact path="/my-profile"/>
      </Switch>
    </Container>
  </Router>,
  document.getElementById('root')
);

