import React, {Component} from 'react';

import {AppStyle} from './../css/app.js';

class SignIn extends Component {
  render() {
    return(
      <div style={AppStyle.form}>
        <form>
          <div>
            <input style={AppStyle.input} type='text' name='email' placeholder='Enter E-mail address'/>
          </div>
          <hr style={AppStyle.line}/>
          <div>
            <input style={AppStyle.input} type='password' name='password' placeholder='enter password'/>
          </div>
        </form>
      </div>
    )
  };
};

export default SignIn;
