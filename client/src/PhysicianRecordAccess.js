import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Container, Header, Form, Menu, Table, TextArea, Divider} from 'semantic-ui-react';

const PhysicianRecordAccess = () => {

  let activeItem = 'Examinations';
  const setActiveTab = (name) => { activeItem = name; console.log(activeItem) };

  return (
    <Container>
      <Header as='h2' textAlign='center'>Person 1 Name</Header>
      <br/>
      <Table striped>
        <Table.Row>
          <Table.Cell>
            <Header as='h4'>Social Security Number</Header>
          </Table.Cell>
          <Table.Cell textAlign='right'>
            123-45-6789
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h4'>Date of Birth</Header>
          </Table.Cell>
          <Table.Cell textAlign='right'>
            01/01/2021
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h4'>Address</Header>
          </Table.Cell>
          <Table.Cell textAlign='right'>
            1234 Abcd Street Apt 809
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h4'>Insurance ID</Header>
          </Table.Cell>
          <Table.Cell textAlign='right'>
            123456789
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h4'>Email Address</Header>
          </Table.Cell>
          <Table.Cell textAlign='right'>
            abcxyz123789@gmail.com
          </Table.Cell>
        </Table.Row>
      </Table>
      <br/>
      <Menu tabular>
        <Menu.Item
          position='right'
          name='Examinations'
          active={activeItem === 'Examinations'}
          onClick={(event, data) => setActiveTab(data.name)}/>
        <Menu.Item
          name='Vaccinations'
          active={activeItem === 'Vaccinations'}
          onClick={(event, data) => setActiveTab(data.name)}/>
        <Menu.Item
          name='Notes'
          active={activeItem === 'Notes'}
          onClick={(event, data) => setActiveTab(data.name)}/>
      </Menu>
      <br/>
      <Container>
        <Header as='h4' textAlign='right'>December 09, 1987</Header>
        <Form>
          <TextArea placeholder='Notes'/>
        </Form>
        <Divider/>
        <Header as='h4' textAlign='right'>July 09, 1987</Header>
        <Form>
          <TextArea placeholder='Notes'/>
        </Form>
      </Container>
    </Container>
  );
}

export default PhysicianRecordAccess;
