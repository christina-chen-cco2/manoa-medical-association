import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Container, Header, Menu, Table, Button, Card, Input} from 'semantic-ui-react';

const PhysicianRecordAccess = () => {

  const pastExamPaneContent = (
    <Container style={{ overflowY: 'auto', paddingRight: '2%', height: '50vh' }}>
      <Header as='h2' textAlign='center'>Past Examinations</Header>
      <Card raised fluid style={{ marginBottom: '3%' }}>
        <Table striped>
          <Table.Row>
            <Table.Cell>
              <Header as='h4'>Date Conducted</Header>
            </Table.Cell>
            <Table.Cell textAlign='right'>
              December 09, 1987
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4'>Reason</Header>
            </Table.Cell>
            <Table.Cell textAlign='right'>
              Runny Nose
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell colSpan='2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Table.Cell>
          </Table.Row>
        </Table>
      </Card>
      <Card raised fluid style={{ marginBottom: '3%' }}>
        <Table striped>
          <Table.Row>
            <Table.Cell>
              <Header as='h4'>Date Conducted</Header>
            </Table.Cell>
            <Table.Cell textAlign='right'>
              December 09, 1987
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4'>Reason</Header>
            </Table.Cell>
            <Table.Cell textAlign='right'>
              Runny Nose
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell colSpan='2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Table.Cell>
          </Table.Row>
        </Table>
      </Card>
    </Container>
  );

  const upcomingExamPaneContent = (
    <Container style={{ overflowY: 'auto', paddingRight: '2%', height: '50vh' }}>
      <Header as='h2' textAlign='center'>Upcoming Examinations</Header>
      <Card raised fluid style={{ marginBottom: '3%' }}>
        <Table striped>
          <Table.Row>
            <Table.Cell>
              <Header as='h4'>Date to Conduct</Header>
            </Table.Cell>
            <Table.Cell textAlign='right'>
              December 09, 1987
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4'>Reason</Header>
            </Table.Cell>
            <Table.Cell textAlign='right'>
              Runny Nose
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell colSpan='2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Table.Cell>
          </Table.Row>
        </Table>
      </Card>
    </Container>
  );

  const [activeTab, setActiveTab] = useState('Examinations');
  const [activePane, setActivePane] = useState(upcomingExamPaneContent);

  const [subItemLabel, setSubItemLabel] = useState('Upcoming Examinations');
  const [subItemActive, setSubItemActive] = useState(true);

  const [ssn, setSSN] = useState('123-45-6789');
  const [dob, setDOB] = useState('01/01/2021');
  const [address, setAddress] = useState('1234 Abcd Street Apt 809');
  const [insuranceId, setInsuranceId] = useState('123456789');
  const [email, setEmail] = useState('abcxyz123789@gmail.com');
  const [profileEditButton, setProfileEditButton] = useState('Edit');

  const [tempSSN, setTempSSN] = useState(ssn);
  const [tempDOB, setTempDOB] = useState(dob);
  const [tempAddress, setTempAddress] = useState(address);
  const [tempInsuranceId, setTempInsuranceId] = useState(insuranceId);
  const [tempEmail, setTempEmail] = useState(email);

  const setActiveItem = (tabName) => {
    setActiveTab(tabName);
    setSubItemLabel('');
    if (tabName === 'Examinations') {
      setActiveSubItem('Examinations');
    } else if (tabName === 'Vaccinations') {

    } else if (tabName === 'Notes') {

    }
    setActiveSubItem('Examinations');
  };

  const setActiveSubItem = (tabName) => {
    let paneContent;
    if (tabName === 'Examinations') {
      if (subItemLabel === 'Upcoming Examinations') {
        setSubItemLabel('Past Examinations');
        setSubItemActive(false);
        paneContent = pastExamPaneContent;
      } else {
        setSubItemLabel('Upcoming Examinations');
        setSubItemActive(true);
        paneContent = upcomingExamPaneContent;
      }
    } else if (tabName === 'Vaccinations') {

    } else if (tabName === 'Notes') {

    }
    setActivePane(paneContent);
  }

  const setProfileEdit = () => {
    if (profileEditButton === 'Edit') {
      setProfileEditButton('Save');
      setSSN(<Input fluid size='small' defaultValue={tempSSN} onChange={(event, data) => setTempSSN(data.value)}/>);
      setDOB(<Input fluid size='small' defaultValue={tempDOB} onChange={(event, data) => setTempDOB(data.value)}/>);
      setAddress(<Input fluid size='small' defaultValue={tempAddress} onChange={(event, data) => setTempAddress(data.value)}/>);
      setInsuranceId(<Input fluid size='small' defaultValue={tempInsuranceId} onChange={(event, data) => setTempInsuranceId(data.value)}/>);
      setEmail(<Input fluid size='small' defaultValue={tempEmail} onChange={(event, data) => setTempEmail(data.value)}/>);
    } else {
      setProfileEditButton('Edit');
      setSSN(tempSSN);
      setDOB(tempDOB);
      setAddress(tempAddress);
      setInsuranceId(tempInsuranceId);
      setEmail(tempEmail);
    }
  }

  return (
    <Container>
      <Header as='h2' textAlign='center'>Person 1 Name</Header>
      <Table striped compact>
        <Table.Row>
          <Table.Cell>
            <Header as='h4'>Social Security Number</Header>
          </Table.Cell>
          <Table.Cell textAlign='right'>
            {ssn}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h4'>Date of Birth</Header>
          </Table.Cell>
          <Table.Cell textAlign='right'>
            {dob}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h4'>Address</Header>
          </Table.Cell>
          <Table.Cell textAlign='right'>
            {address}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h4'>Insurance ID</Header>
          </Table.Cell>
          <Table.Cell textAlign='right'>
            {insuranceId}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h4'>Email Address</Header>
          </Table.Cell>
          <Table.Cell textAlign='right'>
            {email}
          </Table.Cell>
        </Table.Row>
      </Table>
      <Button onClick={() => setProfileEdit()}>{profileEditButton}</Button>
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
      <Button toggle active={subItemActive} onClick={() => setActiveSubItem(activeTab)}>{subItemLabel}</Button>
      {activePane}
    </Container>
  );
}

export default PhysicianRecordAccess;
