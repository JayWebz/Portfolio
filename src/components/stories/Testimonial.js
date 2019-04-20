import React, { Component } from 'react';

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
      <div className="story__testimonial">
        <figure className="story__shape">
          <img src={process.env.PUBLIC_URL + "/images/SCS_PJ.jpg"} alt="person on a tour" className="story__img" />
          <figcaption className="story__caption">
            PJ Eichten
          </figcaption>
        </figure>
        <div className="story__text-container">
          <h3 className="heading-tertiary">Lorem ipsum dolor sit ametlicabo impedit blanditiis hic eaque funullapore.</h3>
          <p className="story__text">{this.props.text}</p>
        </div>
      </div>
    );
	}
}

export default Story;