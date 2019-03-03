import React from 'react';

import CardOutline from './../styled/CardOutline.js';
import CardBody from './../styled/CardBody.js';
import CardHeader from './../styled/CardHeader.js';

const Card = (props) => {
  return(
    <div>
      <img src={props.imgUrl} alt="random" style={{display: "block", margin: "auto"}}/>
    </div>
  )
}

// Card.propTypes = {
//   num: PropTypes.number
// }

export default Card
