import React, {Component} from 'react';

import Timer from './Timer';
import SaveQuestion from './SaveQuestion';

import {AppStyle} from './../css/app';

const cardStyle = {
  display: "block",
  margin: "auto",
  boxShadow: "0px 0px 25px white",
  borderRadius: "31px 31px 31px 31px",
  border: "1px solid black",
  marginTop: "15px",
  marginBottom: "15px"
}

const timerStyle = {
  backgroundColor: 'black',
  color: 'white',
  height: '160px',
  border: '5px solid black',
  borderRadius: '0px 0px 15px 15px',
  boxShadow: '-2px 0px 5px black',
}


class Workout extends Component{
  constructor(props){
    super(props);
    this.state = {
      workoutFinish: false,
      saveClicked: false,
      notSaveClicked: false,
    }
    this.handleWorkoutFinish = this.handleWorkoutFinish.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleNotSave = this.handleNotSave.bind(this);
  };

  handleWorkoutFinish() {
    this.setState({workoutFinish: true});
  };

  handleSave(){
    this.setState({saveClicked: true});
    setTimeout(this.props.onSaveUnSave, 2000);
  }

  handleNotSave(){
    this.setState({notSaveClicked: true});
    setTimeout(this.props.onSaveUnSave, 2000);
  }

  render() {
    let display;
    if (this.state.workoutFinish){
      if (!this.state.saveClicked && !this.state.notSaveClicked){
        display = <SaveQuestion onNotSave={this.handleNotSave} onSave={this.handleSave}/>
      }
      if (this.state.saveClicked){
        display =
        <div>
          <h2 style={{...AppStyle.message, marginTop: '3px', marginBottom: '4px'}}> Workout Saved! </h2>
          <h3 style={{...AppStyle.subtitle, textAlign: 'center'}}> Redirecting...</h3>
        </div>
      }
      if (this.state.notSaveClicked){
        display =
        <div>
          <h2 style={{...AppStyle.message, marginTop: '3px', marginBottom: '4px'}}> Workout NOT Saved! </h2>
          <h3 style={{...AppStyle.subtitle, textAlign: 'center'}}> Redirecting...</h3>
        </div>
      }

    } else {
      display = <Timer onWorkoutFinish={this.handleWorkoutFinish}/>
    }

    return (
      <div>
        <div style={AppStyle.message}>{(!this.state.workoutFinish) ? 'Start the timer below to begin!' : 'Workout finished!'}</div>
        <img src={this.props.currentCard.imgUrl} alt='Current Card' style={cardStyle}/>
        <div style={timerStyle}>
          {display}
        </div>
      </div>
    )
  }
}

export default Workout;
