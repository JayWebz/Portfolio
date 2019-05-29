import React, { Component } from 'react';
import Testimonial from './Testimonial';
import CTA from './CTA';

class Story extends Component {
  constructor(props) {
    super(props);
    this.handleComponentType = this.handleComponentType.bind(this);
  }

  handleComponentType() {
    if (this.props.componentType === 'testimonial') {
      return <Testimonial 
                headline="42% increase in website conversions"
                text='Working with Jon was (and continues to be) an outstanding experience. Since relaunching our website with his design ideas, services and recommendations, South Coast Surety has eperience a 42% increase in website conversions.'
                name="PJ Eichten"
                title="Director of Digital Marketing"
                company="South Coast Surety"
              />
    } else if (this.props.componentType === 'CTA') {
      return  <CTA buttonText="Get in touch"
                href="#contact"
                text=""
                heading="Hi, my name is Jon. I create websites and web applications. I'm available for contract work, so if you'd like to build something,"/>
    }
  }

  render() {
		return(
			<div className="story">
        {this.handleComponentType()}
      </div>
    );
	}
}

export default Story;