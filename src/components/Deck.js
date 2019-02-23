import React, { Component } from 'react';

import Card from './Card';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      currentCard: {
        
      }
    }
  };
  
  componentDidMount(){
    // Create API call here to fill Deck.
    let newDeck = [];
    for (let i = 0; i <= 53; i++){
      newDeck.push(i);
    };
    this.setState({cards: newDeck});
  }
  
  render(){
    return(
      <div>
        <h1> This is the deck component </h1>
        {this.state.cards.map((card) =>
            <Card num={card}/>
        )}
      </div>
    )
  }
}

export default Deck;