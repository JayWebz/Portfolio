import React, { Component } from 'react';
import Button from './Button';

class Showcase extends Component {
  render() {
		return(
      <div className="showcase">
        <img className="showcase__logo" src={process.env.PUBLIC_URL + this.props.imagePath} alt={this.props.alt}/>
        <h3 className="heading-tertiary u-margin-bottom-sml">{this.props.heading}</h3>
        <p className="showcase__text u-margin-bottom-sml">
          {this.props.description}
        </p>
        <Button buttonText="My Function" href={this.props.href}/>
      </div>
    );
	}
}

export default Showcase;