import React, { Component } from 'react';
import {Swipeable} from 'react-swipeable';

import Card from './Card';

import CarouselContainer from './../styled/CarouselContainer';
import CarouselSlot from './../styled/CarouselSlot';
import Wrapper from './../styled/Wrapper';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      position: 0,
      sliding: false,
      direction: 'next',
      currentCard: null
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

  doSliding(direction, position){
    this.setState({
      sliding: true,
      position,
      direction
    });

    setTimeout(()=> {
      this.setState({
        sliding:false
      })
    }, 50);
  }

  getOrder(cardIndex) {
    const {position, cards} = this.state;
    const numCards = cards.length || 1;

    if (cardIndex - position < 0){
      return numCards - Math.abs(cardIndex - position);
    }

    return cardIndex - position;
  }

  handleSwipe(isNext){
    if (isNext) {
      this.nextCard();
    } else {
      this.prevCard();
    };
  };

  nextCard(){
    const {position, cards} = this.state;
    const numCards = cards.length || 1;
    console.log('next')

    this.doSliding('next', position === numCards - 1 ? 0 : position + 1);
  }

  prevCard() {
    const {position, cards} = this.state;
    const numCards = cards.length || 1;

    this.doSliding('prev', position === 0 ? numCards - 1 : position - 1);
  }

  setCurrentCard(card){
    this.setState({currentCard: card});
    console.log(this.state.currentCard);
  }


  render(){
    return(
      <div>
        <h1> This is the deck component </h1>
        <Swipeable
          onSwipedLeft={ () => this.handleSwipe(true) }
          onSwipedRight={ () => this.handleSwipe() }>
          <Wrapper>
            <CarouselContainer
              sliding={this.state.sliding}
              direction={this.state.direction}>
                    {this.state.cards.map((card, index) => (
                          <CarouselSlot key={index} order={this.getOrder(index)}><Card key={index} num={card} onClick={() => console.log("currentCard", card)}/></CarouselSlot>
                      ))
                    }
            </CarouselContainer>
          </Wrapper>
        </Swipeable>
      </div>
    )
  }
}

export default Deck;
