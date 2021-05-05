import React,{Component} from 'react';
import { Grid, Button, Icon, Modal, Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Landing extends Component {

  render() {

    return (
        <Grid container rows='4'>
          <Grid.Row centered>
            <Image size='big' centered src='/images/logo.png' />
          </Grid.Row>
          <Grid.Row centered>
            <div className='button'>
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
            <div className='button'>
              <Card>
            <Button color='blue' animated='fade' size='big' as={Link} to='/patient-signup'>
              <Button.Content visible>
                <Icon name='add user' size='large'/>
                SIGN UP
              </Button.Content>
              <Button.Content hidden>CLICK TO SIGN UP</Button.Content>
            </Button>
              </Card>
            </div>
          </Grid.Row>
          <Grid.Row centered>
            <div className='button'>
              <Card>
            <Modal trigger={
              <Button color='purple' animated='fade' size='big'>
                <Button.Content visible>
                  <Icon name='id badge outline'  size='big'/>
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
            </Card>
            </div>
          </Grid.Row>
        </Grid>
    );
  }
}

export default Landing;
