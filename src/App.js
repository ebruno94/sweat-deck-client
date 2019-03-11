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

  }

  render() {
    return (
      <div>
        <Router>
          <div style={AppStyle.container}>
            <Route exact path='/' component={Welcome}></Route>
            <Route exact path='/deck' component={Deck}></Route>
            <Route exact path='/register' render={() => <Register/>}></Route>
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
