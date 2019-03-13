import React from 'react';

import Button from './Button';

import {AppStyle} from './../css/app';

const SaveQuestion = (props) => {
  return (
    <div>
      <h2 style={{...AppStyle.message, marginTop: '3px', marginBottom: '4px'}}> Great work! </h2>
      <h3 style={{...AppStyle.subtitle, textAlign: 'center'}}> Would you like to save this to your workout History?</h3>
      <div style={{display: 'flex', justifyContent: 'center', marginBottom: '0px'}}>
        <div style={{margin: 'auto'}}>
          <Button buttonName='NO' buttonFunc={props.onNotSave}/>
        </div>
        <div style={{margin: 'auto'}}>
          <Button buttonName='YES' buttonFunc={props.onSave}/>
        </div>
      </div>
    </div>
  )
}

export default SaveQuestion;
