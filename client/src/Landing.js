import React,{Component} from 'react';
import { Grid, Button, Icon, Modal, Card, Image, Header, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Landing extends Component {

  render() {

    return (
        <Grid container rows='3'>
          <Grid.Row centered>
            <Image size='big' centered src='/images/logo.png' />
          </Grid.Row>
          <Grid.Row centered>
            <div className='shadow'>
              <Card>
            <Button color='green' animated='fade' size='big' as={Link} to='/login'>
              <Button.Content visible>
                <Icon name='sign in' inverted size='large'/>
                SIGN IN
              </Button.Content>
              <Button.Content hidden >CLICK TO SIGN IN</Button.Content>
            </Button>
              </Card>
            </div>
          </Grid.Row>
          <Grid.Row centered>
            <div className='shadow'>
              <Card>
            <Modal trigger={
              <Button color='blue' animated='fade' size='big'>
                <Button.Content visible>
                  <Icon name='id badge outline'  size='big'/>
                  ABOUT THE APP
                </Button.Content>
                <Button.Content hidden >CLICK TO LEARN MORE ABOUT THE APP</Button.Content>
              </Button>}>
              <Modal.Content>
                <Modal.Description>
                  <Header as='h1' textAlign='center'>Have Instant Access to Your Medical Records!</Header>
                  <Image wrapped size='massive' src='/images/records.PNG' />
                  <Message>
                  <Message.Content>Many people can’t travel to a doctor’s office because of the current pandemic, but they may still need medical attention, review their medical records, or be informed on the types of examinations and shots that they need to take when they reach a certain age. A solution to this is to provide a medical database where patients can upload their medical records and access important information regarding their health, and it also allows physicians to easily manage and review their patient’s records while providing records of their own.
                  This application is intended to allow patients to view, access, and update their medical records without having to visit the doctor’s office or contact their doctors. These functionalities are made available through user accounts on the application.</Message.Content>
                  </Message>
                </Modal.Description>
              </Modal.Content>
            </Modal>
            </Card>
            </div>
          </Grid.Row>
        </Grid>
    );
  }
}

export default Landing;
