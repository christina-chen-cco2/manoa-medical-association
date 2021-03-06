import axios from 'axios';
import React,{Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Header, Container, Button} from 'semantic-ui-react';

class PhysicianRecordUpload extends Component {

  //no file selected
  state = {
    selectedFile: null
  };

  //select file
  onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {

    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
        "myFile",
        this.state.selectedFile,
        this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  };

  // File content to be displayed after file upload is complete
  fileData = () => {

    if (this.state.selectedFile) {

      return (
          <div>
            <h2>File Details:</h2>

            <p>File Name: {this.state.selectedFile.name}</p>


            <p>File Type: {this.state.selectedFile.type}</p>


            <p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>

          </div>
      );
    } else {
      return (
          <div>
            <br />
            <h4>Choose before Pressing the Upload button</h4>
          </div>
      );
    }
  };

  render() {

    return (
        <Container textAlign='center'>
          <Header textAlign='center' as='h2'>Upload Physician Medical Record</Header>
          <br></br>
          <p>
            Click on the "Browse" button to browse for medical record:
          </p>
          <input type="file" style={{ color: 'gray', border: '1px solid gainsboro', borderRadius: '15px', padding: '15px' }} onChange={this.onFileChange} />
          <br/><br/>
          <Button onClick={this.onFileUpload}>
            Upload
          </Button>
          {this.fileData()}
        </Container>
    );
  }
}

export default PhysicianRecordUpload;
