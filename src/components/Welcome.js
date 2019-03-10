import React from 'react';

import Button from './Button';
import FancyLink from './FancyLink';
import SignIn from './SignIn';

const mainLogo = require('./../assets/white_logo_transparent.png');

const Welcome = () => {
  return (
    <div>
      <img src={mainLogo} alt='Sweat Deck Logo' style={{display: 'block', margin: 'auto', marginTop: '20px', marginBottom: '15px', height: '330px', width: '330px'}}/>
      <SignIn/>
      <Button linkTo='/deck' buttonName='LAUNCH'/>
      <FancyLink linkTo='/register' linkName='REGISTER'/>
    </div>
  )
}

export default Welcome;
