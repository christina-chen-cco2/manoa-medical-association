import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Form, Button, Container } from 'semantic-ui-react';

const Login = () => {

  return (
    <Container style={{ width: '75%' }}>
      <Form>
        <Form.Field>
          <label>Email Address</label>
          <input placeholder='Email Address'/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder='Password'/>
        </Form.Field>
        <Button floated='right' type='submit'>Login</Button>
        <br/><br/>
        <a style={{ float: 'right' }}>Create a Patient Account</a>
        <br/><br/>
        <a style={{ float: 'right' }}>Create a Physician Account</a>
      </Form>
    </Container>
  );
}

export default Login;
