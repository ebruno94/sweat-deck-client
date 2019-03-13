import React, {Component} from 'react';
import {ButtonStyle} from './../css/button';
import {Link} from 'react-router-dom';

class Button extends Component {
  constructor(props){
    super(props);
    this.state = {
      linkTo: this.props.linkTo,
      isHovered: false,
      buttonName: this.props.buttonName,
      type: this.props.type,
      buttonFor: this.props.buttonFor
    }
    this.buttonHoverToggle = this.buttonHoverToggle.bind(this);
  };

  buttonHoverToggle(){
    const {isHovered} = this.state;
    this.setState({isHovered: !isHovered});
  }

  render(){
    const { linkTo, isHovered, buttonName, type, buttonFor } = this.state;
    const { buttonFunc } = this.props;
    var display;

    if (linkTo){
      display =
      <Link style={{display: 'block', textDecoration: 'none', width: '150px', margin: 'auto'}} to={`${linkTo}`}>
        <button type='button' style={(isHovered) ? ButtonStyle.mainHover : ButtonStyle.main} onMouseEnter={this.buttonHoverToggle} onMouseLeave={this.buttonHoverToggle}>{buttonName}</button>
      </Link>
    } else if (type === 'submit'){
      display =
      <button type='submit' style={(isHovered) ? ButtonStyle.mainHover : ButtonStyle.main} onMouseEnter={this.buttonHoverToggle} onMouseLeave={this.buttonHoverToggle}>{buttonName}</button>
    } else if (buttonFor === 'timer'){
      display = <button type='button'
        style={(isHovered) ? ButtonStyle.timerHover : ButtonStyle.timer}
        onMouseEnter={this.buttonHoverToggle}
        onMouseLeave={this.buttonHoverToggle}
        onClick={buttonFunc}>{buttonName}</button>
    } else if (buttonName === 'finish'){
      display = <button type='button'
        style={(isHovered) ? ButtonStyle.doneHover  : ButtonStyle.done}
        onMouseEnter={this.buttonHoverToggle}
        onMouseLeave={this.buttonHoverToggle}
        onClick={buttonFunc}>{buttonName}</button>
    }else if (buttonName === 'YES'){
      display = <button type='button'
        style={(isHovered) ? ButtonStyle.yesHover  : ButtonStyle.yes}
        onMouseEnter={this.buttonHoverToggle}
        onMouseLeave={this.buttonHoverToggle}
        onClick={buttonFunc}>{buttonName}</button>
    } else if (buttonName === 'NO'){
      display = <button type='button'
        style={(isHovered) ? ButtonStyle.noHover  : ButtonStyle.no}
        onMouseEnter={this.buttonHoverToggle}
        onMouseLeave={this.buttonHoverToggle}
        onClick={buttonFunc}>{buttonName}</button>
    }else {
      display = <button type='button'
        style={(isHovered) ? ButtonStyle.mainHover : ButtonStyle.main}
        onMouseEnter={this.buttonHoverToggle}
        onMouseLeave={this.buttonHoverToggle}
        onClick={buttonFunc}>{buttonName}</button>
    }

    return (
      <div style={{display: 'inline'}}>
        {display}
      </div>
    )
  }
}

export default Button;
