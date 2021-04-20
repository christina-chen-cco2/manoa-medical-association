import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Dropdown, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <Container fluid style={{ paddingBottom: '5vh' }}>
      <Container attached='top' fluid style={{ height: '10vh', backgroundColor: 'cyan' }}>
        header, picture, or something
      </Container>
      <Menu borderless attached='bottom' size='large'>
        <Menu.Item name='Home' as={Link} to='/' position='right'/>
        <Dropdown simple item text='Signup'>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to='/patient-signup' text='Patient'/>
            <Dropdown.Item as={Link} to='/physician-signup' text='Physician'/>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown simple item text='Login'>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to='/patient-login' text='Patient'/>
            <Dropdown.Item as={Link} to='/physician-login' text='Physician'/>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown simple item text='User Profile'>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to='/patient-profile' text='Patient'/>
            <Dropdown.Item as={Link} to='/physician-profile' text='Physician'/>
          </Dropdown.Menu>
        </Dropdown>
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
    </Container>
  );
}

export default Navbar;
