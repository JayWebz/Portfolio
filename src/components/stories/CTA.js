import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Story extends Component {
  componentDidMount() {
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
          <AnchorLink href={this.props.href} 
                className="btn btn--white btn--animated"
                offset={() => -50}
          >
            {this.props.buttonText} &#187;
          </AnchorLink>
        </div>
      </div>
    );
	}
}

export default Story;