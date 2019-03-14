import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import axios from 'axios';

import Card from './Card';
import Button from './Button';
import Workout from './Workout';
import UserInfo from './UserInfo';

import {CarouselStyle} from './../css/carousel';
import {AppStyle} from './../css/app';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      currentCardIndex: 0,
      autoplayToggle: false,
      currentCard: null,
      currentUser: {},
      cardSelected: false,
      displayUserInfo: false,
    }
    this.handleRandomButton = this.handleRandomButton.bind(this);
    this.handleCurrentCard = this.handleCurrentCard.bind(this);
    this.handleCardSelect = this.handleCardSelect.bind(this);
    this.handleWorkoutSave = this.handleWorkoutSave.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  };

  componentDidMount(){
    this.setState({cards: this.props.cards, currentCard: this.props.cards[0], currentUser: this.props.currentUser})
  };


  handleRandomButton(){
    var {currentCardIndex} = this.state
    var random = Math.floor(Math.random() * 26);
    var randomStartingIndex = currentCardIndex + random;
    var startingIndex = (randomStartingIndex > 52) ? randomStartingIndex % 52 : randomStartingIndex;
    this.setState({autoplayToggle: true, currentCardIndex: startingIndex})
    setTimeout(() => {
      this.setState({autoplayToggle: false});
    }, 1500);
    console.log(this.state.currentUser);
  };

  handleUserInfo(){
    this.setState({displayUserInfo: !this.state.displayUserInfo});
  }

  handleCardSelect(){
    const {cardSelected} = this.state
    this.setState({cardSelected: !cardSelected});
  };

  handleLogout(){
    setTimeout(() => this.props.history.push('/'), 500);
  }

  handleWorkoutSave(time){
    let {currentUser, currentCard} = this.state;
    let newRecord = {
      cardId: currentCard._id,
      time: time,
      imgUrl: currentCard.imgUrl
    };

    let newRecordArray = [...currentUser.workoutRecord]
    newRecordArray.push(newRecord);
    this.setState({
      currentUser: {
        ...currentUser,
        workoutRecord: newRecordArray
      }
    });

    axios.patch(`/users/${currentUser._id}`, {
      workoutRecord: currentUser.workoutRecord
    }).then((res)=>{
      console.log('Workout Saved');
    }).catch(e => console.log('Something went wrong', e));
  }

  async handleCurrentCard(i){
    var {cards} = this.state;
    const card = await axios.get(`/cards/${cards[i].id}`);

    try {
      this.setState({currentCard: card.data, currentCardIndex: i});
    } catch (e) {
      console.log('something went wrong', e);
    }
  };

  render(){

    const displayBottom = (!this.state.autoplayToggle) ? <div style={{display:'flex', justifyContent: 'center', marginTop: '110px'}}>
      <div style={{margin: 'auto'}}>
        <Button buttonName="RANDOM" buttonFunc={this.handleRandomButton}/>
      </div>
      <div style={{margin: 'auto'}}>
        <Button buttonName="CONFIRM" buttonFunc={this.handleCardSelect}/>
      </div>
    </div>
    :
    <div style={{...AppStyle.message, marginTop: '125px'}}> PLEASE WAIT... </div>

    const displayTop = (this.state.autoplayToggle) ? 'PICKING RANDOMLY' : 'SELECT A CARD'
    const displaySub = (this.state.autoplayToggle) ? 'Make sure you warm up first' : '(Please swipe left or right to navigate through the deck)'

    let display;

    if (!this.state.cardSelected){
      if (this.state.displayUserInfo){
        display =
              <div>
                <img style={(!this.state.displayUserInfo) ? AppStyle.userIcon : AppStyle.userIconClicked} onClick={() => this.handleUserInfo()} src="https://img.icons8.com/metro/26/000000/user-group-man-man.png" alt='User Icon'/>
                <UserInfo onLogout={this.handleLogout} user={this.state.currentUser}/>
              </div>
      } else {
        display =
            <div>
              <img style={(!this.state.displayUserInfo) ? AppStyle.userIcon : AppStyle.userIconClicked} onClick={() => this.handleUserInfo()} alt='User Icon' src="https://img.icons8.com/metro/26/000000/user-group-man-man.png"/>
              <div style={{...AppStyle.message, marginTop: '0px'}}>{displayTop}</div>
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
      }
    } else {
      display =
        <Workout onSave={this.handleWorkoutSave} onSaveUnSave={this.handleCardSelect} currentCard={this.state.currentCard}/>
    }

    return(
      <div>
        {display}
      </div>
    )
  }
}

export default Deck;
