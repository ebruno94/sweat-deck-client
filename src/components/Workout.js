import React from 'react';

import Timer from './Timer';

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


const Workout = (props) => {
  return (
    <div>
      <div style={AppStyle.message}>Start the timer below to begin!</div>
      <img src={props.currentCard.imgUrl} alt='Current Card' style={cardStyle}/>
      <Timer/>
    </div>
  )
}

export default Workout;
