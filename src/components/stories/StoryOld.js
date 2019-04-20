import React, { Component } from 'react';
import Button from '../Button';
import Testimonial from './Testimonial';

class Story extends Component {
  componentDidMount() {
    const textArray = this.props.text.split('');
    const textCode = [];
    for (let i = 0; i < textArray.length; i++) {
      if (textArray[i] === ' ') {
        textCode.push(<span className="feature-box__letter--space">{textArray[i]}</span>)
      } else {
        textCode.push(<span className="feature-box__letter">{textArray[i]}</span>);
      }
    } 
    return textCode;
  }
  render() {
		return(
			<div className="story" style={this.props.paddingStyle}>
        <div className="story__text-container" style={this.props.style}>
          <h3 className="heading-tertiary">{this.props.heading}</h3>
          <p className="story__text">{this.componentDidMount()}</p>
          <Button href="#" buttonText={this.props.buttonText}/>
        </div>
      </div>
    );
	}
}

export default Story;