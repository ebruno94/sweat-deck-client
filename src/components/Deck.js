import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import axios from 'axios';

import Card from './Card';
import {CarouselStyle} from './../css/carousel';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      currentCardIndex: 0,
    }
    this.handleCardChange = this.handleCardChange.bind(this);
  };

  componentDidMount(){
    // Create API call here to fill Deck.
    axios.get('/cards').then(res => {
      if (res.data && this.state.cards.length === 0){
        let sortedCards = res.data.map((card) => card.imgUrl).sort((a,b) => parseInt(a.slice(86,88)) - parseInt(b.slice(86,88)));
        this.setState({cards: sortedCards})
      }
    }).catch((e) => console.log(e));
  }

  handleCardChange(i){
    this.setState({currentCardIndex: i})
  }

  render(){
    return(
      <div style={CarouselStyle.carousel}>
        <h1> This is the deck component </h1>
          <Carousel
            slideIndex={parseInt(this.state.currentCardIndex)}
            wrapAround={true}
            withoutControls={true}
            slideWidth={0.9}
            cellAlign="center"
            afterSlide={currentIndex => this.handleCardChange(currentIndex)}
          >
          {this.state.cards.map((card, i) => {
            return (
              <Card key={i} imgUrl={card}/>
            )
          })}
        </Carousel>
        {this.state.currentCardIndex}
      </div>
    )
  }
}

export default Deck;
