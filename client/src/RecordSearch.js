import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Input, Header, Grid, Card, Label, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const RecordSearch = () => {

    const rows = [];
    let row = [];
    for (let i = 1; i <= 7; i++) {
      for (let j = 1; j <= 3; j++) {
        row.push(
          <Grid.Column>
            <Card raised as={Link} to='/record-access'>
              <Label corner='right' size='small'><Icon name='eye' /></Label>
              <Card.Content textAlign='center'>
                <Card.Header>Person {3 * (i - 1 ) + j} Name</Card.Header>
              </Card.Content>
              <Card.Content extra textAlign='right'>
                <Card.Description>
                  <Header as='h4' textAlign='left'>SSN</Header>
                  123-45-6789
                </Card.Description>
              </Card.Content>
              <Card.Content extra textAlign='right'>
                <Card.Description>
                  <Header as='h4' textAlign='left'>DOB</Header>
                  01/01/2021
                </Card.Description>
              </Card.Content>
              <Card.Content extra textAlign='right'>
                <Card.Description>
                  <Header as='h4' textAlign='left'>Email</Header>
                  abcdxyz123789@gmail.com
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        );
      }
      rows.push(<Grid.Row>{row}</Grid.Row>);
      row = [];
    }

  return (
    <Container>
      <Header textAlign='center' as='h2'>Search Medical Records</Header>
      <br/><br/>
      <Input fluid icon='search' placeholder='Search' size='large'/>
      <p style={{ fontSize: '12px' }}>Search by name, SSN, DOB, or email.</p>
      <br/>
      <Grid relaxed columns={3} style={{ overflowY: 'scroll', height: '60vh' }}>
        {rows.map(row => { return row; })}
      </Grid>
    </Container>
  );
}

export default RecordSearch;
