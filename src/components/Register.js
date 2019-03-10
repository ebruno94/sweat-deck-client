import React, {Component} from 'react';
import {AppStyle} from './../css/app.js';
import Button from './Button';
import FancyLink from './FancyLink';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      password: '',
      validEmail: false,
      validPassword: false,
    }
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handlePasswordConfirmation = this.handlePasswordConfirmation.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  };

  handleSubmission(e) {
    e.preventDefault();
  };

  handleFirstName(e){
    this.setState({firstName: e.target.value});
  };

  handleLastName(e){
    this.setState({lastName: e.target.value});
  };

  handleEmail(e){
    this.setState({email: e.target.value});
  };

  handlePassword(e){
    this.setState({password: e.target.value});
  };

  handlePasswordConfirmation(e){
    if (e.target.value === this.state.newUser.password){
      this.setState({validPassword: true})
    };
  };

  render(){
    return(
      <div style={AppStyle.regForm}>
        <form onSubmit={this.handleSubmission}>
          <h2 style={{marginBottom: '0px'}}> PLEASE FILL OUT THE FORM BELOW </h2>
          <hr style={{...AppStyle.line, marginBottom: '10px'}}/>
          <label>First Name</label>
          <div>
            <input
              style={AppStyle.input}
              type='text'
              id='firstName'
              placeholder='John / Jane'
              onChange={this.handleFirstName} />
          </div>
          <br/>
          <label>Last Name</label>
          <div>
            <input
              style={AppStyle.input}
              type='text'
              id='lastName'
              placeholder='Doe'
              onChange={this.handleLastName} />
          </div>
          <br/>
          <label>E-MAIL ADDRESS</label>
          <div>
            <input
              style={AppStyle.input}
              type='text'
              id='email'
              placeholder='example1234@email.com'
              onChange={this.handleEmail}/>
          </div>
          <br/>
          <label>PASSWORD</label>
          <div>
            <input
              style={AppStyle.input}
              type='password'
              id='password'
              placeholder='Must be 6 - 12 characters'
              onChange={this.handlePassword} />
          </div>
          <br/>
          <label>CONFIRM PASSWORD</label>
          <div>
            <input
              style={AppStyle.input}
              type='password'
              id='confirmation'
              placeholder='Confirm Password'
              onChange={this.handlePasswordConfirmation} />
          </div>
          <hr style={{...AppStyle.line, marginBottom: '0px', marginTop: '15px'}}/>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{margin: 'auto'}}>
              <FancyLink linkTo='/' linkName='RETURN'/>
            </div>
            <div style={{margin: 'auto'}}>
              <Button buttonName='REGISTER' type='submit'/>
            </div>
          </div>
        </form>
      </div>
    )

  }
}

export default Register;
