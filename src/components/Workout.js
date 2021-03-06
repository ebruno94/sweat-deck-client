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
      workoutStart: false,
      workoutFinish: false,
      saveClicked: false,
      notSaveClicked: false,
      time: '',
    }
    this.handleWorkoutStart = this.handleWorkoutStart.bind(this);
    this.handleWorkoutFinish = this.handleWorkoutFinish.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleNotSave = this.handleNotSave.bind(this);
  };

  handleWorkoutStart(){
    this.setState({workoutStart: true})
  }

  handleWorkoutFinish(m, s) {
    this.setState({workoutFinish: true, workoutStart: false, time: `${m} mins. ${s} secs.`});
  };

  handleSave(){
    this.setState({saveClicked: true});
    this.props.onSave(this.state.time);
    setTimeout(this.props.onSaveUnSave, 2000);
  }

  handleNotSave(){
    this.setState({notSaveClicked: true});
    setTimeout(this.props.onSaveUnSave, 2000);
  }

  render() {
    let display;
    let topMessage;
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
      display = <Timer onWorkoutStart={this.handleWorkoutStart} onWorkoutFinish={this.handleWorkoutFinish}/>
    }

    if (this.state.workoutStart && !this.state.workoutFinish){
      topMessage = 'CRUSH THIS CARD!'
    } else if (!this.state.workoutStart && !this.state.workoutFinish){
      topMessage = 'Start the timer below to begin!'
    } else if (!this.state.workoutStart && this.state.workoutFinish){
      topMessage = 'Workout Finished!'
    }

    return (
      <div>
        <div style={AppStyle.message}>{topMessage}</div>
        <img src={this.props.currentCard.imgUrl} alt='Current Card' style={cardStyle}/>
        <div style={timerStyle}>
          {display}
        </div>
      </div>
    )
  }
}

export default Workout;
