import React, { Component } from 'react';
import Button from '../Button';

class Story extends Component {
  componentDidMount() {
    console.log(this.props);
    if(this.props.text !== "") {
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
  }
  
  render() {
		return(
			<div className="story__CTA" style={this.props.paddingStyle}>
        <div className="story__text-container" style={this.props.style}>
          <h3 className="heading-tertiary u-margin-bottom-sml">{this.props.heading}</h3>
          <p className="story__text">{this.props.text}</p>
          <Button href="#" buttonText={this.props.buttonText}/>
        </div>
      </div>
    );
	}
}

export default Story;