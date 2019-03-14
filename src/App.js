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
      currentUser: {},
      cards: []
    }
    this.handleRegistration = this.handleRegistration.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  };

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
  };

  handleSignIn(user){
    let newUser = user;
    if (this.state.cards.length === 0){
      axios.get('/startup').then(res => {
        console.log(res.message)
      }).catch(e => console.log(e));      
    }

    axios.get('/cards').then(res => {
      if (res.data && this.state.cards.length === 0){
        let sortedCards = res.data.map(card => ({id: card._id, imgUrl: card.imgUrl})).sort((a,b) => parseInt(a.imgUrl.slice(86,88)) - parseInt(b.imgUrl.slice(86,88)))
        this.setState({cards: sortedCards});
      };
    }).catch((e) => console.log(e));
    this.setState({signedIn: true, currentUser: newUser})
  };

  render() {
    return (
      <div>
        <Router>
          <div style={AppStyle.container}>
            <Route exact path='/' render={(props)=> <Welcome {...props} onSignIn={this.handleSignIn}/>}></Route>
            <Route exact path='/deck' render={(props)=> <Deck {...props} cards={this.state.cards} currentUser={this.state.currentUser} />}></Route>
            <Route exact path='/register' render={() => <Register onRegister={this.handleRegistration}/>}></Route>
          </div>
        </Router>
        <div style={AppStyle.footer}>
          Copyright © 2019 www.mysweatdeck.com  All Rights Reserved
        </div>
      </div>
    );
  };
};

export default App;
