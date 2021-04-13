import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Form, Button, Container, Divider, Header, Input, Modal} from 'semantic-ui-react';

const PhysicianSignup = () => {
  const req = {};
  const setFirstName = (value) => { req.firstName = value; console.log(req.firstName); console.log(value)};
  const setLastName = (value) => { req.lastName = value; };
  const setNpi = (value) => { req.npi = value; };
  const setEmail = (value) => { req.email = value; };
  const setPassword = (value) => { req.password = value; };

  const sendReq = () => fetch('/physician-signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req)
  })
  .then((response) => {
    localStorage.setItem('token', response.token);
  });

  return (
    <Container style={{ width: '75%' }}>
      <Header textAlign='center' as='h2'>Create a Physician Account</Header>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <Input placeholder='First Name' onChange={(event, data) => setFirstName(data.value)}/>
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <Input placeholder='Last Name' onChange={(event, data) => setLastName(data.value)}/>
        </Form.Field>
        <Form.Field>
          <label>National Provider Identifier (NPI)</label>
          <Input placeholder='National Provider Identifier (NPI)' onChange={(event, data) => setNpi(data.value)}/>
        </Form.Field>
        <Divider section/>
        <Form.Field>
          <label>Email Address</label>
          <Input placeholder='Email Address' onChange={(event, data) => setEmail(data.value)}/>
        </Form.Field>
        <Form.Field>
          <label>Create Password</label>
          <Input placeholder='Password' onChange={(event, data) => setPassword(data.value)}/>
        </Form.Field>
        <Button floated='right' type='submit' fluid onClick={sendReq}>Create Account</Button>
      </Form>

    </Container>
  );
}

export default PhysicianSignup;
