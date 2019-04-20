import React, { Component } from 'react';
import HexBackgroundRow from './HexBackgroundRow';

class HexBackground extends Component {
	render() {
		return (
			<div className="header__hex-background" 
					onMouseMove={this.props.onHover} 
					style={this.props.style} >
				<HexBackgroundRow/>
			</div>
		);
	}
}

export default HexBackground;