import React from 'react';

import CardOutline from './../styled/CardOutline.js';
import CardBody from './../styled/CardBody.js';
import CardHeader from './../styled/CardHeader.js';

export default function Card(props){
  return(
    <div>
      <CardOutline>
        <CardHeader>
        </CardHeader>
        <CardBody>
          {props.num}
        </CardBody>
      </CardOutline>
    </div>
  )
}

// Card.propTypes = {
//   num: PropTypes.number
// }