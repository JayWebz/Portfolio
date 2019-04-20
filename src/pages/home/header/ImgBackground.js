import React, { Component } from 'react';

class ImgBackground extends Component {
	render() {
		return (
			<div className="header__img-background" onMouseMove={this.props.onHover} 
				style={this.props.style}>	
			</div>
		);
	}
}

export default ImgBackground;