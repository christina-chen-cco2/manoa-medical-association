import React from 'react';
import { Container, Header, Table, Input, Form } from 'semantic-ui-react';

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
        </Container>
    );
}

export default UserProfile;
