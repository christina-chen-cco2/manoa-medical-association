import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Container, Header, Form, Menu, Table, TextArea, Divider} from 'semantic-ui-react';

const PhysicianRecordAccess = () => {

  const examPaneContent = (
    <Container style={{ overflowY: 'auto', paddingRight: '2%', height: '60vh' }}>
      <Header as='h2' textAlign='center'>Upcoming Examinations</Header>
      <Header as='h4'>Date to Conduct: December 09, 1987</Header>
      <Header as='h4'>Reason: Checkup</Header>
      <Form>
        <TextArea placeholder='Notes'/>
      </Form>
      <Header as='h4'>Date to Conduct: July 09, 1987</Header>
      <Header as='h4'>Reason: Runny Nose</Header>
      <Form>
        <TextArea placeholder='Notes'/>
      </Form>
      <br/><br/>
      <Divider hidden section/>
      <Header as='h2' textAlign='center'>Past Examinations</Header>
      <Header as='h4'>Date Conducted: December 09, 1987</Header>
      <Header as='h4'>Reason: Checkup</Header>
      <Form>
        <TextArea placeholder='Notes'/>
      </Form>
      <Header as='h4'>Date Conducted: July 09, 1987</Header>
      <Header as='h4'>Reason: Ear Infection</Header>
      <Form>
        <TextArea placeholder='Notes'/>
      </Form>
    </Container>
  )

  const [activeTab, setActiveTab] = useState('Examinations');
  const [activePane, setActivePane] = useState(examPaneContent);

  const setActiveItem = (tabName) => {
    setActiveTab(tabName);
    let paneContent;
    if (tabName === 'Examinations') {
      paneContent = examPaneContent;
    } else if (tabName === 'Vaccinations') {
      paneContent = (
        <Container style={{ overflowY: 'auto', paddingRight: '2%', height: '60vh' }}>
          <Header as='h4'>Vaccine: vaccinename1</Header>
          <Header as='h4'>Date Administered: September 29, 1978</Header>
          <Form>
            <TextArea placeholder='Notes'/>
          </Form>
          <Divider/>
          <Header as='h4'>Vaccine: vaccinename2</Header>
          <Header as='h4'>Date Administered: February 29, 1978</Header>
          <Form>
            <TextArea placeholder='Notes'/>
          </Form>
        </Container>
      )
    } else if (tabName === 'Notes') {

    }
    setActivePane(paneContent);
  };

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
          active={activeTab === 'Examinations'}
          onClick={(event, data) => setActiveItem(data.name)}/>
        <Menu.Item
          name='Vaccinations'
          active={activeTab === 'Vaccinations'}
          onClick={(event, data) => setActiveItem(data.name)}/>
        <Menu.Item
          name='Notes'
          active={activeTab === 'Notes'}
          onClick={(event, data) => setActiveItem(data.name)}/>
      </Menu>
      <br/>
      {activePane}
    </Container>
  );
}

export default PhysicianRecordAccess;
