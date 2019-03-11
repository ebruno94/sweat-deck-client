import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';

import {AppStyle} from './css/app';
import Deck from './components/Deck';
import Welcome from './components/Welcome';
import Register from './components/Register';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      signedIn: false,
      currentUser: null,
    }
    this.handleRegistration = this.handleRegistration.bind(this);
  }

  handleRegistration(newUser){
    axios.post('/users', {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      age: newUser.age,
      email: newUser.email,
      password: newUser.password,
      admin: false,
      workoutRecord: []
    }).then((res) => {
      console.log('User added successfully', newUser.firstName)
    }).catch( e => console.log('Something went wrong', e));
  }

  render() {
    return (
      <div>
        <Router>
          <div style={AppStyle.container}>
            <Route exact path='/' component={Welcome}></Route>
            <Route exact path='/deck' component={Deck}></Route>
            <Route exact path='/register' render={() => <Register onRegister={this.handleRegistration}/>}></Route>
          </div>
        </Router>
        <div style={AppStyle.footer}>
          Copyright © 2019 www.mysweatdeck.com  All Rights Reserved
        </div>
      </div>
    );
  }
}

export default App;
