import React, {Component} from 'react';
import axios from 'axios';

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
      email: '',
      confirmPassword: '',
      validEmail: true,
      validPassword: true,
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
    const {firstName, lastName, age, email, password, confirmPassword, validEmail, validPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState({validPassword: false});
    } else {
      this.setState({validPassword: true});
    };
    // email not found sends 404 means email not used
    axios.get(`/users/email/${email}`).then(res => {
      this.setState({validEmail: false});
    }).catch((e) => {
      this.setState({validEmail: true});
      if (validEmail && validPassword){
        this.props.onRegister({
          firstName: firstName[0].toUpperCase() + firstName.slice(1),
          lastName: lastName[0].toUpperCase() + lastName.slice(1),
          age,
          email: email.toLowerCase(),
          password,
          admin: false,
          workoutRecord: []
        })
        this.setState({registrationSuccess: true})
      }
    });
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
    this.setState({confirmPassword: e.target.value});
  };

  render(){
    let display;

    if (!this.state.registrationSuccess){
      let divBreaker = {
        marginBottom: '12px',
      }

      let errorMessage = '';
      let pwErrorMessage = '';
      if (!this.state.validEmail){
        errorMessage = <p style={{color: 'red', fontSize: '10px', marginTop: '5px', marginBottom: '0px'}}>E-mail already taken.</p>
        divBreaker = {marginBottom: '10px'};
      } else {
        divBreaker = {marginBottom: '12px'};
        errorMessage = ''
      }
      if (!this.state.validPassword){
        pwErrorMessage = <p style={{color: 'red', fontSize: '10px', marginTop: '2px', marginBottom: '2px'}}>Passwords don't match.</p>
        divBreaker = {marginBottom: '10px'};
      } else {
        divBreaker = {marginBottom: '12px'};
        pwErrorMessage = '';
      }

      display =
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
                style={(this.state.validEmail) ? AppStyle.input : AppStyle.inputError}
                type='text'
                id='email'
                placeholder='example1234@email.com'
                onChange={this.handleEmail}/>
                {errorMessage}
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
                style={(this.state.validPassword) ? AppStyle.input : AppStyle.inputError}
                type='password'
                id='confirmation'
                placeholder='Confirm Password'
                onChange={this.handlePasswordConfirmation} />
                {pwErrorMessage}
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
    } else {
      display =
        <div style={{...AppStyle.regForm, display: 'block', height: '300px', marginTop: '150px'}}>
          <h1>
            Registration Complete!
          </h1>
          <hr style={AppStyle.line}/>
          <h4>
            Please return to the homepage and sign in
          </h4>
          <Button buttonName='HOME' linkTo='/'/>
        </div>
    }

    return(
      <div>
        {display}
      </div>
    )

  }
}

export default Register;
