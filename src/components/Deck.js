import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

import Card from './Card';
import {CarouselStyle} from './../css/carousel';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      position: 0,
      sliding: false,
      direction: 'next',
      currentCardIndex: 0,
    }
    this.handleCardChange = this.handleCardChange.bind(this);
  };

  componentDidMount(){
    // Create API call here to fill Deck.
    let newDeck = [];
    for (let i = 0; i <= 53; i++){
      newDeck.push(i);
    };
    this.setState({cards: newDeck});
  }

  handleCardChange(i){
    let card = this.state.cards[i];
    this.setState({currentCardIndex: card})
  }

  render(){
    return(
      <div style={CarouselStyle.carousel}>
        <h1> This is the deck component </h1>
          <Carousel
            slideIndex={this.state.currentCardIndex}
            wrapAround={true}
            withoutControls={true}
            slideWidth={0.9}
            cellAlign="center"
            transitionMode="scroll"
            animation="zoom"
            afterSlide={currentIndex => this.handleCardChange(currentIndex)}
          >
          {this.state.cards.map((card, i) => {
            return (
              <Card style={{width: '200px'}}
                key={i} num={card}/>
            )
          })}
        </Carousel>
        {this.state.currentCardIndex}
      </div>
    )
  }
}

export default Deck;
