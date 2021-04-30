import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Container, Header, Table, Input, Form, Button} from 'semantic-ui-react';


const UserProfile = () => {
    const [activeTab, setActiveTab] = useState('User Profile');
    const [activePane, setActivePane] = useState(UserProfile);

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
                        <Input placeholder='Social Security Number'/>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>
                        <Header as='h4'>Date of Birth</Header>
                    </Table.Cell>
                    <Table.Cell textAlign='right'>
                        <Input placeholder='Date of Birth'/>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>
                        <Header as='h4'>Address</Header>
                    </Table.Cell>
                    <Table.Cell textAlign='right'>
                        <Input placeholder='Address'/>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>
                        <Header as='h4'>Insurance ID</Header>
                    </Table.Cell>
                    <Table.Cell textAlign='right'>
                        <Input placeholder='Insurance ID'/>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>
                        <Header as='h4'>Email Address</Header>
                    </Table.Cell>
                    <Table.Cell textAlign='right'>
                        <Input placeholder='Email Address'/>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>
                        <Header as='h4'>Medical Record</Header>
                    </Table.Cell>
                    <Table.Cell textAlign='right'>
                        <Form><Input placeholder='Medical Record'/></Form>
                    </Table.Cell>
                </Table.Row>
            </Table>
            <Button onClick={() => setProfileEdit()}>{profileEditButton}</Button>
        </Container>
    );
}

export default UserProfile;
