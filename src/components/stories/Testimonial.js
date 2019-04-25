import React, { Component } from 'react';

class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: ""
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);

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

  updateDimensions() {
    this.setState({
        width: window.innerWidth
    });
  }

  componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
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
          {
            this.state.width > 640 
            ? <img className="story__content-logo" src={process.env.PUBLIC_URL + '/images/SCS_logoLong.png'} alt="SouthCoastSurety" /> 
            : <img className="story__content-logo" src={process.env.PUBLIC_URL + '/images/SouthCoastSurety.png'} alt="SouthCoastSurety" />
          }
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