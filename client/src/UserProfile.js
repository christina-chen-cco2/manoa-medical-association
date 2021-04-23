import React from 'react';
import { Container, Header, Table } from 'semantic-ui-react';

const UserProfile = () => {
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
                <Table.Row>
                    <Table.Cell>
                        <Header as='h4'>Medical Record</Header>
                    </Table.Cell>
                    <Table.Cell textAlign='right'>
                        {medicalRecord}
                    </Table.Cell>
                </Table.Row>
            </Table>
        </Container>
    );
}

export default UserProfile;
