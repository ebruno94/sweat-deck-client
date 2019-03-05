import React from 'react';

import Button from './Button';

const mainLogo = require('./../assets/white_logo_transparent.png');

const Welcome = () => {
  return (
    <div>
      <img src={mainLogo} alt='Sweat Deck Logo' style={{display: 'block', margin: 'auto', marginTop: '50px', marginBottom: '60px', height: '330px', width: '330px'}}/>
      <Button linkTo='deck' buttonName='LAUNCH'/>
    </div>
  )
}

export default Welcome;
