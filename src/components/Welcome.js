import React from 'react';

import FancyLink from './FancyLink';
import SignIn from './SignIn';
import Timer from './Timer';

const mainLogo = require('./../assets/white_logo_transparent.png');

const Welcome = (props) => {
  return (
    <div>
      <img src={mainLogo} alt='Sweat Deck Logo' style={{display: 'block', margin: 'auto', marginTop: '20px', marginBottom: '15px', height: '330px', width: '330px'}}/>
      <SignIn {...props} onSignIn={props.onSignIn}/>
      <div style={{marginTop: '85px'}}>
        <FancyLink linkTo='/register' linkName='REGISTER'/>
      </div>
    </div>
  )
}

export default Welcome;
