import React from 'react';

const cardStyle = {
  display: "block",
  margin: "auto",
  boxShadow: "0px 0px 25px white",
  borderRadius: "31px 31px 31px 31px",
  border: "1px solid black",
  marginTop: "15px",
  marginBottom: "15px"
}

const Card = (props) => {
  return(
    <div>
      <img src={props.imgUrl} alt='card' style={cardStyle}/>
    </div>
  )
}

// Card.propTypes = {
//   num: PropTypes.number
// }

export default Card
