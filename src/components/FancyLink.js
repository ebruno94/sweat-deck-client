import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class FancyLink extends Component {
  constructor(props){
    super(props);
    this.state = {
      linkTo: this.props.linkTo,
      isHovered: false,
      linkName: this.props.linkName,
    };
    this.hoverToggle = this.hoverToggle.bind(this);
  };

  hoverToggle(){
    const {isHovered} = this.state;
    this.setState({isHovered: !isHovered});
  }

  render(){
    const { linkTo, isHovered, linkName } = this.state;
    const normal = {
      display: 'block',
      width: '150px',
      margin: 'auto',
      marginTop: '20px',
      color: 'white',
      textDecoration: 'none',
      textAlign: 'center',
      fontSize: '20px',
      letterSpacing: '3px',
      fontFamily: 'BebasBook',
      padding: '0px'
    }

    const hover = {
      ...normal,
      color: 'black',
      textShadow: '0px 0px 20px white'
    }

    return(
      <div>
        <Link style={(isHovered) ? hover : normal} to={linkTo} onMouseEnter={this.hoverToggle} onMouseLeave={this.hoverToggle}>{linkName}</Link>
      </div>
    );
  };
};

export default FancyLink;
