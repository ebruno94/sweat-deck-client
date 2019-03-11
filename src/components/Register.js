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
      age: 0,
      password: '',
      validEmail: false,
      validPassword: false,
      registrationSuccess: false
    }
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleBirthday = this.handleBirthday.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handlePasswordConfirmation = this.handlePasswordConfirmation.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  };

  handleSubmission(e) {
    e.preventDefault();
    const {firstName, lastName, age, password, validEmail } = this.state;
  };

  handleFirstName(e){
    this.setState({firstName: e.target.value});
  };

  handleLastName(e){
    this.setState({lastName: e.target.value});
  };

  handleBirthday(e){
    let today = new Date();
    let birthDate = new Date(e.target.value);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    this.setState({age});
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
    const divBreaker = {
      marginBottom: '11px',
    }

    return(
      <div style={AppStyle.regForm}>
        <form onSubmit={this.handleSubmission}>
          <h2 style={{marginBottom: '0px'}}> PLEASE FILL OUT THE FORM BELOW </h2>
          <hr style={{...AppStyle.line, marginBottom: '10px'}}/>
          <label>First Name</label>
          <div style={divBreaker}>
            <input
              required
              style={AppStyle.input}
              type='text'
              id='firstName'
              placeholder='John / Jane'
              onChange={this.handleFirstName} />
          </div>
          <label>Last Name</label>
          <div style={divBreaker}>
            <input
              required
              style={AppStyle.input}
              type='text'
              id='lastName'
              placeholder='Doe'
              onChange={this.handleLastName} />
          </div>
          <label>DATE OF BIRTH</label>
          <div style={divBreaker}>
            <input
              required
              style={AppStyle.input}
              type='date'
              id='birthday'
              onChange={this.handleBirthday}/>
          </div>
          <label>E-MAIL ADDRESS</label>
          <div style={divBreaker}>
            <input
              required
              style={AppStyle.input}
              type='text'
              id='email'
              placeholder='example1234@email.com'
              onChange={this.handleEmail}/>
          </div>
          <label>PASSWORD</label>
          <div style={divBreaker}>
            <input
              required
              style={AppStyle.input}
              type='password'
              id='password'
              placeholder='Must be 6 - 12 characters'
              onChange={this.handlePassword} />
          </div>
          <label>CONFIRM PASSWORD</label>
          <div style={divBreaker}>
            <input
              required
              style={AppStyle.input}
              type='password'
              id='confirmation'
              placeholder='Confirm Password'
              onChange={this.handlePasswordConfirmation} />
          </div>
          <hr style={{...AppStyle.line, marginBottom: '0px', marginTop: '15px'}}/>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{margin: 'auto'}}>
              <FancyLink linkTo='/' linkName='NEVERMIND, RETURN'/>
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
