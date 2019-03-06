import React from 'react';

import Button from './Button';
import SignIn from './SignIn';

const mainLogo = require('./../assets/white_logo_transparent.png');

const Welcome = () => {
  return (
    <div>
      <img src={mainLogo} alt='Sweat Deck Logo' style={{display: 'block', margin: 'auto', marginTop: '20px', marginBottom: '15px', height: '330px', width: '330px'}}/>
      <SignIn/>
      <Button linkTo='deck' buttonName='LAUNCH'/>
    </div>
  )
}

export default Welcome;
