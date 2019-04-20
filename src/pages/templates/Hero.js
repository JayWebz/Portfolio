import React, { Component } from 'react';

class Hero extends Component {
	render() {
		return(
			<div className="section-hero" style={this.props.style}>
				<h1 className="section-hero__heading heading-primary">{this.props.heading}</h1>
				<img className="section-hero__devices" src={this.props.image} alt={this.props.alt} />
			</div>
		);
	}
}

export default Hero;