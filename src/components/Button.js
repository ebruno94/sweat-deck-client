import React, {Component} from 'react';
import {ButtonStyle} from './../css/button';
import {Link} from 'react-router-dom';

class Button extends Component {
  constructor(props){
    super(props);
    this.state = {
      linkTo: this.props.linkTo,
      isHovered: false,
      name: this.props.buttonName,
      currentClassName: ButtonStyle.main
    }
    this.buttonHoverToggle = this.buttonHoverToggle.bind(this);
  };

  buttonHoverToggle(){
    const {isHovered, currentClassName} = this.state;
    this.setState({isHovered: !isHovered});
  }

  render(){
    const { linkTo, isHovered, name, currentClassName } = this.state;

    return (
      <div>
        <Link style={{display: 'block', textDecoration: 'none', width: '150px', margin: 'auto'}} to={`/${linkTo}`}>
          <button type='button' style={(isHovered) ? ButtonStyle.mainHover : ButtonStyle.main} onMouseEnter={this.buttonHoverToggle} onMouseLeave={this.buttonHoverToggle}>{name}</button>
        </Link>
      </div>
    )
  }
}

export default Button;
