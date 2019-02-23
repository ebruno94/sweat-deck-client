import React from 'react';
import {cardStyle} from './../css/card-style'

export default function Card(props){
  return(
    <div>
      <div style={cardStyle.card}>
        <div style={cardStyle.header}>
        </div>
        <div style={cardStyle.body}>
          {props.num}
        </div>
      </div>
    </div>
  )
}

// Card.propTypes = {
//   num: PropTypes.number
// }