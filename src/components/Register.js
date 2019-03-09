import React, {Component} from 'react';
import {AppStyle} from './../css/app.js';
import Button from './Button';

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
      <div style={AppStyle.form}>
        <form onSubmit={this.handleSubmission}>
          <div>
            <input
              type='text'
              id='firstName'
              placeholder='John / Jane'
              onChange={this.handleFirstName} />
          </div>
          <div>
            <input
              type='text'
              id='lastName'
              placeholder='Doe'
              onChange={this.handleLastName} />
          </div>
            <div>
            <input
              type='text'
              id='email'
              placeholder='example1234@email.com'
              onChange={this.handleEmail}/>
          </div>
          <div>
            <input
              type='password'
              id='password'
              placeholder='Must be 6 - 12 characters'
              onChange={this.handlePassword} />
          </div>
          <div>
            <input
              type='password'
              id='confirmation'
              placeholder='Confirm Password'
              onChange={this.handlePasswordConfirmation} />
          </div>
        </form>
      </div>
    )

  }
}

export default Register;
