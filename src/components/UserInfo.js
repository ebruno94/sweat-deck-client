import React from 'react';

import Carousel from 'nuka-carousel';

import {AppStyle} from './../css/app';
import {CarouselStyle} from './../css/carousel';

import Button from './Button';


const UserInfo = (props) => {

  const handleLogout = () => {
      props.onLogout();
  };

  const label = {
    fontFamily: 'BebasBook',
    fontSize: '20px',
    marginTop: '0px',
    marginBottom: '0px',
    color: 'white'
  };

  let display;
  if (props.user.workoutRecord.length === 0){
    display =
    <div>
      <h1>YOU HAVE NO WORKOUTS RECORDED YET! </h1>
    </div>
  } else {
    display =
        <div style={{...CarouselStyle.carousel, width: '400px', height: '200px'}}>
          <Carousel
            wrapAround={true}
            withoutControls={true}
            slideWidth={0.9}
            speed={500}
            cellAlign='center'
            easing='easeLinear'
            >
            {props.user.workoutRecord.map((workout, i) => {
              return (
                <div>
                  <img style={{display: 'block', margin: 'auto', marginTop: '10px', boxShadow: '0px 0px 15px white', borderRadius: '20px', border: '2px solid black', marginBottom: '5px'}}src={workout.imgUrl} alt='card' height='200' width='150'/>
                  <div>
                    {workout.time}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
  }

  return (
    <div style={{...AppStyle.regForm, height: '525px', marginTop: '20px', display: 'block'}}>
      <div>
        <h3 style={{marginBottom: '5px', marginTop: '10px'}}> USER INFO </h3>
      </div>
      <hr style={{...AppStyle.line, marginBottom: '10px'}}/>
      <div style={{display: 'inline', marginRight: '25px'}}>
        <span style={label}>Name:</span> {props.user.firstName} {props.user.lastName}
      </div>
      <div style={{display: 'inline', marginLeft: '25px'}}>
        <span style={label}>Age:</span> {props.user.age}
      </div>
      <div style={{marginTop: '20px'}}>
        <span style={label}>Email:</span> {props.user.email}
      </div>
      <hr style={{...AppStyle.line, marginBottom: '10px'}}/>
      <div>
        <h3 style={{marginBottom: '0px', marginTop: '0px'}}> Workout History </h3>
      </div>
      <hr style={{...AppStyle.line, marginBottom: '0px'}}/>
      {display}
      <div style={{position: 'relative', float: 'right', right: '20px', top: '10px'}}>
        <Button buttonName='logout' buttonFor='timer' buttonFunc={handleLogout}/>
      </div>
    </div>
  )
}

export default UserInfo;
