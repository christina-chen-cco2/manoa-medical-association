import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';


class Signin extends React.Component {
  /** Render the signin form. */
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    // if correct authentication, redirect to page instead of login screen
/*    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    }*/
    // Otherwise return the Login form.
    const menuStyle = { paddingTop: '50px' };
    return (
        <div>
{/*
          <NavBar/>
*/}
          <div className='background1'>
            <Grid Container style={menuStyle}>
              <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
                <Grid.Column>
                  <Header as="h2" textAlign="center">
                    Login To Your Account
                  </Header>
                  <Form>
                  {/*<Form onSubmit={this.handleSubmit}>*/}
                    <Segment stacked>
                      <Form.Input
                          label="Email"
                          icon="user"
                          iconPosition="left"
                          name="email"
                          type="email"
                          placeholder="E-mail address"
                          /*onChange={this.handleChange}*/
                      />
                      <Form.Input
                          label="Password"
                          icon="lock"
                          iconPosition="left"
                          name="password"
                          placeholder="Password"
                          type="password"
                          /*onChange={this.handleChange}*/
                      />
                      <Form.Button content="Submit"/>
                    </Segment>
                  </Form>
                  <Message>
                    {/*<Link to="/patientsignup">Click here to Register</Link>*/}
                    <Button>Click here to Register</Button>
                  </Message>
{/*                  {this.state.error === '' ? (
                      ''
                  ) : (
                      <Message
                          error
                          header="Login was not successful"
                          content={this.state.error}
                      />
                  )}*/}
                </Grid.Column>
              </Grid>
            </Grid>
          </div>
        </div>
    );
  }
}

export default Signin;

/** Ensure that the React Router location object is available in case we need to redirect. */
Signin.propTypes = {
  location: PropTypes.object,
};
