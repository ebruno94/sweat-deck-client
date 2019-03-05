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
    }
    this.buttonHoverToggle = this.buttonHoverToggle.bind(this);
  };

  buttonHoverToggle(){
    const {isHovered} = this.state;
    this.setState({isHovered: !isHovered});
  }

  render(){
    const { linkTo, isHovered, name } = this.state;
    const { buttonFunc } = this.props;
    var display;

    if (name === 'LAUNCH'){
      display =
      <Link style={{display: 'block', textDecoration: 'none', width: '150px', margin: 'auto'}} to={`/${linkTo}`}>
        <button type='button' style={(isHovered) ? ButtonStyle.mainHover : ButtonStyle.main} onMouseEnter={this.buttonHoverToggle} onMouseLeave={this.buttonHoverToggle}>{name}</button>
      </Link>
    } else {
      display = <button type='button'
        style={(isHovered) ? ButtonStyle.mainHover : ButtonStyle.main}
        onMouseEnter={this.buttonHoverToggle}
        onMouseLeave={this.buttonHoverToggle}
        onClick={buttonFunc}>{name}</button>
    }

    return (
      <div style={{display: 'inline'}}>
        {display}
      </div>
    )
  }
}

export default Button;
