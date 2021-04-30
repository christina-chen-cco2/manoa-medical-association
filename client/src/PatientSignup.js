import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Form, Button, Container, Divider, Header, Input } from 'semantic-ui-react';

const PatientSignup = () => {
  const req = {};
  const setFirstName = (value) => { req.firstName = value; };
  const setLastName = (value) => { req.lastName = value; };
  const setInsuranceID = (value) => {req.insuranceID = value};
  const setPhonenumber = (value) => {req.phonenumber = value};
  const setEmail = (value) => { req.email = value; };
  const setPassword = (value) => { req.password = value; };

  return (
      <Container>
        <Container>
          <Header textAlign='center' as='h2'>Create a Patient Account</Header>
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
              <label>Insurance ID</label>
              <Input placeholder='Insurance ID' onChange={(event, data) => setInsuranceID(data.value)}/>
            </Form.Field>
            <Divider section/>
            <Form.Field>
              <label>Phone number</label>
              <Input placeholder='Phone Number' onChange={(event, data) => setPhonenumber(data.value)}/>
            </Form.Field>
            <Form.Field>
              <label>Email Address</label>
              <Input placeholder='Email Address' onChange={(event, data) => setEmail(data.value)}/>
            </Form.Field>
            <Form.Field>
              <label>Create Password</label>
              <Input placeholder='Password' onChange={(event, data) => setPassword(data.value)}/>
            </Form.Field>
            <Button floated='right' type='submit' fluid onClick='' style={{ marginTop: '2vh' }}>Create Account</Button>
          </Form>
        </Container>
      </Container>
      );
  }


export default PatientSignup;
