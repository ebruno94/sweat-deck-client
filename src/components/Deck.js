import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import axios from 'axios';

import Card from './Card';
import Button from './Button';

import {CarouselStyle} from './../css/carousel';
import {AppStyle} from './../css/app';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      currentCardIndex: 0,
      autoplayToggle: false,
      currentCard: {},
    }
    this.handleRandomButton = this.handleRandomButton.bind(this);
    this.handleCurrentCard = this.handleCurrentCard.bind(this);
  };

  componentDidMount(){
    // Create API call here to fill Deck.
    axios.get('/cards').then(res => {
      if (res.data && this.state.cards.length === 0){
        let sortedCards = res.data.map(card => ({id: card._id, imgUrl: card.imgUrl})).sort((a,b) => parseInt(a.imgUrl.slice(86,88)) - parseInt(b.imgUrl.slice(86,88)))
        this.setState({cards: sortedCards, currentCard: res.data[0]})
      }
    }).catch((e) => console.log(e));
  }


  handleRandomButton(){
    var {cards, currentCardIndex} = this.state
    var random = Math.floor(Math.random() * 26);
    var randomStartingIndex = currentCardIndex + random;
    var startingIndex = (randomStartingIndex > 52) ? randomStartingIndex % 52 : randomStartingIndex;
    console.log(`CurrentIndex: ${currentCardIndex} Random ${random}, randStartIn ${randomStartingIndex}, startinIn ${startingIndex}`);
    this.setState({autoplayToggle: true, currentCardIndex: startingIndex})
    setTimeout(() => {
      this.setState({autoplayToggle: false});
    }, 1500);
  }

  async handleCurrentCard(i){
    var {cards} = this.state;
    const card = await axios.get(`/cards/${cards[i].id}`);
    console.log(card.data)

    try {
      this.setState({currentCard: card.data, currentCardIndex: i});
    } catch (e) {
      console.log('something went wrong');
    }
  }

  render(){
    const displayBottom = (!this.state.autoplayToggle) ? <div style={{display:'flex', justifyContent: 'center', marginTop: '110px'}}>
      <div style={{margin: 'auto'}}>
        <Button buttonName="RANDOM" buttonFunc={this.handleRandomButton}/>
      </div>
      <div style={{margin: 'auto'}}>
        <Button buttonName="CONFIRM" linkTo='start'/>
      </div>
    </div>
    :
    <div style={{... AppStyle.message, marginTop: '125px'}}> PLEASE WAIT... </div>

    const displayTop = (this.state.autoplayToggle) ? 'PICKING RANDOMLY' : 'SELECT A CARD'
    const displaySub = (this.state.autoplayToggle) ? 'Make sure you warm up first' : '(Please swipe left or right to navigate through the deck)'

    return(
      <div>
        <div style={AppStyle.message}>{displayTop}</div>
        <div style={AppStyle.subtitle}>{displaySub}</div>
        <div style={CarouselStyle.carousel}>
          <Carousel
            slideIndex={this.state.currentCardIndex}
            wrapAround={true}
            withoutControls={true}
            slideWidth={0.9}
            speed={500}
            cellAlign="center"
            animation={(!this.state.autoplayToggle) ? "zoom" : {}}
            easing="easeLinear"
            autoplay={this.state.autoplayToggle}
            autoplayInterval={10}
            afterSlide={currentIndex => this.handleCurrentCard(currentIndex)}
          >
            {this.state.cards.map((card, i) => {
              return (
                <Card key={card.id} imgUrl={card.imgUrl} index={i}/>
              )
            })}
          </Carousel>
        </div>
        {displayBottom}
      </div>
    )
  }
}

export default Deck;
