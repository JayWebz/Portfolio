import React, { Component } from 'react';
import Button from '../Button';
import Testimonial from './Testimonial';
import CTA from './CTA';

class Story extends Component {
  constructor(props) {
    super(props);
    this.handleComponentType = this.handleComponentType.bind(this);
  }

  handleComponentType() {
    if (this.props.componentType === 'testimonial') {
      return <Testimonial text="Lorem ipsum dolor sit ametlicabo impedit blanditiis hic eaque funullapore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio deserunt delectus minima facere aperiam nemo asperiores in nesciunt cupiditate repellat ipsa nihil ipsum, ab earum tenetur distinctio iure? Sunt, ab!"/>
    } else if (this.props.componentType === 'CTA') {
      return  <CTA buttonText="Get in touch" text=""
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