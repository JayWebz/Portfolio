import React, { Component } from 'react';

class Story extends Component {
  componentDidMount() {
    if(this.props.text1 !== "") {
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
      <div className="story__testimonial">
        <figure className="story__shape">
          <img src={process.env.PUBLIC_URL + "/images/SCS_PJ.jpg"} alt="person on a tour" className="story__img" />
          <figcaption className="story__caption">
            {this.props.name}
          </figcaption>
        </figure>
        <div className="story__content">
          <img className="story__content-logo" src={process.env.PUBLIC_URL + "/images/SCS_logoLong.png"} alt="South Coast Surety Logo"/>
          <h3 className="heading-tertiary">{this.props.headline}</h3>
          <p className="story__content-text">{this.props.text}</p>
          <p className="story__content-author">
            <span className="story__content-author-name">{this.props.name},</span> 
            <span className="story__content-author-title">{this.props.title},</span> 
            <span className="story__content-author-company">{this.props.company}</span>
          </p>
        </div>
      </div>
    );
	}
}

export default Story;