import React, {Component} from 'react';
import axios from 'axios';

import {AppStyle} from './../css/app.js';
import Button from './Button';

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      emailFound: true,
    }
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }

  handleEmail(e){
    this.setState({email: e.target.value})
  }

  handlePassword(e){
    this.setState({password: e.target.value})
  }

  handleSubmission(e){
    e.preventDefault();
    axios.get(`/users/email/${this.state.email.toLowerCase()}`).then(res => {
      let user = res.data;
      this.setState({emailFound: true});
      if (res.data.password === this.state.password){
        this.props.onSignIn(user)
        this.setState({email: '', password: ''})
        setTimeout(() => this.props.history.push('/deck'), 500);
      } else if (res.status === 404){
        this.setState({email: '', password: '', emailFound: false});
      }
    }).catch((e) => {
      this.setState({email: '', password: '', emailFound: false});
    })
  }

  render() {
    let errorMessage = 'INVALID EMAIL / PASSWORD';
    return(
      <div>
        <div style={{display: 'flex', justifyContent: 'center', color: 'red'}}>
          {(!this.state.emailFound) ? errorMessage : ''}
        </div>
        <div style={(!this.state.emailFound) ? AppStyle.form : {...AppStyle.form, marginTop: '14px'}}>
          <form onSubmit={this.handleSubmission}>
            <div>
              <input
                required
                style={(this.state.emailFound) ? AppStyle.input : AppStyle.inputError}
                type='text'
                name='email'
                placeholder='Enter E-mail address'
                onChange={this.handleEmail}/>
            </div>
            <hr style={AppStyle.line}/>
            <div style={{marginBottom: '5px'}}>
              <input
                style={AppStyle.input}
                type='password'
                name='password'
                placeholder='enter password'
                onChange={this.handlePassword}/>
            </div>

            <Button buttonName='LAUNCH' type='submit'/>
          </form>
        </div>
      </div>
    )
  };
};

export default SignIn;
