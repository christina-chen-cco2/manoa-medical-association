import React,{Component} from 'react';
import { Grid, Image, Button, Icon, Message, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Landing extends Component {

  render() {

    return (
        <Grid container rows='4'>
          <Grid.Row centered>
            <Message>
              <Message.Header>LOGO GOES HERE</Message.Header>
              <p>
                Logo is under construction
              </p>
            </Message>
          </Grid.Row>
          <Grid.Row centered>
            <Button color='green' animated='fade' size='big' as={Link} to='/login'>
              <Button.Content visible>
                <Icon name='sign in' inverted size='large'/>
                SIGN IN
              </Button.Content>
              <Button.Content hidden >CLICK TO SIGN IN</Button.Content>
            </Button>
            <Button color='blue' animated='fade' size='big' as={Link} to='/patient-signup'>
              <Button.Content visible>
                <Icon name='add user' color='white' size='large'/>
                SIGN UP
              </Button.Content>
              <Button.Content hidden>CLICK TO SIGN UP</Button.Content>
            </Button>
          </Grid.Row>
          <Grid.Row centered>
            <Modal trigger={
            <Button color='purple' animated='fade' size='big'>
              <Button.Content visible>
                <Icon name='id badge outline' color='white' size='big'/>
                ABOUT THE APP
              </Button.Content>
              <Button.Content hidden >CLICK TO LEARN MORE ABOUT THE APP</Button.Content>
            </Button>}>
              <Modal.Header>THIS PAGE IS UNDER CONSTRUCTION</Modal.Header>
              <Modal.Content image>
                <Modal.Description>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </Grid.Row>
        </Grid>
    );
  }
}

export default Landing;
