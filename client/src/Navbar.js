import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Dropdown, Container, Icon, Header, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <Container fluid style={{ paddingBottom: '5vh' }}>
      <Container attached='top' fluid>
        <Message>
       <Header textAlign='centered'><Icon name='heartbeat' color='red'/>View Your Medical Information From Anywhere and Anytime</Header>
        </Message>
        </Container>
        <div className='shadow'>
      <Menu borderless inverted widths={7} attached='bottom' size='large'>
        <Menu.Item name='Home' as={Link} to='/' position='right'/>
        <Dropdown simple item text='Signup'>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to='/patient-signup' text='Patient'/>
            <Dropdown.Item as={Link} to='/physician-signup' text='Physician'/>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item name='Login' as={Link} to='/login'/>
        <Menu.Item name='Profile' as={Link} to='/my-profile'/>
        <Menu.Item name='Search Records' as={Link} to='/record-search'/>
        <Dropdown simple item text='Access Records'>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to='/patient-record-access' text='Patient'/>
            <Dropdown.Item as={Link} to='/physician-record-access' text='Physician'/>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown simple item text='Upload Records'>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to='/patient-record-upload' text='Patient'/>
            <Dropdown.Item as={Link} to='/physician-record-upload' text='Physician'/>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
      </div>
    </Container>
  );
}

export default Navbar;
