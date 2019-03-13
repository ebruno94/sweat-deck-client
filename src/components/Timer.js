import React, {Component} from 'react';

import Button from './Button';

const timerStyle = {
  backgroundColor: 'black',
  color: 'white',
  height: '160px',
  border: '5px solid black',
  borderRadius: '0px 0px 15px 15px',
  boxShadow: '-2px 0px 5px black'
}

class Timer extends Component {
  constructor(props){
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0,
      isOn: false
    }
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer(){
    this.setState({
      isOn: true
    });
    this.timer = setInterval(() => {
      this.setState({seconds: this.state.seconds + 1})
      if (this.state.seconds === 60) {
        this.setState({seconds: 0, minutes: this.state.minutes + 1})
      }
    }, 1000);
  }

  stopTimer(){
    this.setState({isOn: false})
    clearInterval(this.timer)
  }

  resetTimer(){
    this.setState({minutes: 0, seconds: 0})
  }

  render() {
    let {minutes, seconds, isOn} = this.state;
    let start = (!isOn) ?
                <Button buttonFor='timer' buttonFunc={this.startTimer} buttonName='start'/> : null
    let stop = (isOn) ?
                <Button buttonFor='timer' buttonFunc={this.stopTimer} buttonName='stop'/> : null
    let reset = (!isOn) ?
                <Button buttonFor='timer' buttonFunc={this.resetTimer} buttonName='reset'/> : null
    let resume = (!isOn) ?
                <Button buttonFor='timer' buttonFunc={this.startTimer} buttonName='resume'/> : null

    return (
      <div style={timerStyle}>
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '0px'}}>
          <h1 style={{marginTop: '5px', marginBottom: '0px', fontSize: '60px', letterSpacing: '4px'}}> {(minutes < 10) ? "0" + minutes : minutes} : {(seconds < 10) ? "0" + seconds : seconds} </h1>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '0px'}}>
          <div style={{margin: 'auto'}}>
            {reset}
          </div>
          <div style={{margin: 'auto'}}>
            {resume}
            {stop}
          </div>
          <div style={{margin: 'auto'}}>
            {start}
          </div>
        </div>
      </div>
    )
  }
}

export default Timer;
