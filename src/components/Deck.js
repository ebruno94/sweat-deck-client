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
    this.handleIndexChange = this.handleIndexChange.bind(this);
    this.handleRandomButton = this.handleRandomButton.bind(this);
    this.handleCurrentCard = this.handleCurrentCard.bind(this);
  };

  componentDidMount(){
    // Create API call here to fill Deck.
    axios.get('/cards').then(res => {
      if (res.data && this.state.cards.length === 0){
        let sortedCards = res.data.map(card => ({id: card._id, imgUrl: card.imgUrl})).sort((a,b) => parseInt(a.imgUrl.slice(86,88)) - parseInt(b.imgUrl.slice(86,88)))
        this.setState({cards: sortedCards})
      }
    }).catch((e) => console.log(e));
  }

  handleIndexChange(i){
    this.setState({currentCardIndex: i})
  }

  handleRandomButton(){
    this.setState({autoplayToggle: true})

    var {cards, currentCardIndex} = this.state
    var randomSeconds = (Math.floor(Math.random() * 5) + 1) * 1000;
    var randomIndex = Math.floor(Math.random() * 52)
    setTimeout(() => {
      this.setState({currentCardIndex: randomIndex, autoplayToggle: false})
    }, randomSeconds);
  }

  async handleCurrentCard(){
    var {cards, currentCardIndex} = this.state
    const card = await axios.get(`/cards/${cards[currentCardIndex].id}`)
    console.log(card.data);

    try {
      this.setState({currentCard: card.data});
    } catch (e) {
      console.log('something went wrong');
    }
  }


  render(){
    const display = (!this.state.autoplayToggle) ? <div style={{display:'flex', justifyContent: 'center'}}>
      <div style={{margin: 'auto'}}>
        <Button buttonName="RANDOM" buttonFunc={this.handleRandomButton}/>
      </div>
      <div style={{margin: 'auto'}}>
        <Button buttonName="SELECT" buttonFunc={this.handleCurrentCard}/>
      </div>
    </div>
    :
    <div style={AppStyle.message}> PICKING A CARD... </div>

    return(
      <div style={CarouselStyle.carousel}>
        <Carousel
          slideIndex={parseInt(this.state.currentCardIndex)}
          wrapAround={true}
          withoutControls={true}
          slideWidth={0.7}
          speed={250}
          cellAlign="center"
          transitionMode="scroll"
          animation={(!this.state.autoplayToggle) ? "zoom" : ""}
          easing="easeLinear"
          autoplay={this.state.autoplayToggle}
          autoplayInterval={10}
          pauseOnHover={false}
          afterSlide={currentIndex => {
            this.handleIndexChange(currentIndex)}}
        >
          {this.state.cards.map((card, i) => {
            return (
              <Card key={card.id} imgUrl={card.imgUrl} index={i}/>
            )
          })}
        </Carousel>
        {display}
      </div>
    )
  }
}

export default Deck;
