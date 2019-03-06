import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {AppStyle} from './css/app';
import Deck from './components/Deck';
import Welcome from './components/Welcome';
import SignIn from './components/SignIn';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div style={AppStyle.container}>
            <Route exact path='/' component={Welcome}></Route>
            <Route exact path='/deck' component={Deck}></Route>
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
