import React, { Component } from 'react';
import ContentBox from './ContentBox';
import HexBackground from './HexBackground';
import ImgBackground from './ImgBackground';


class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false,
			cX: 0,
			cY: 0,
			hexTransform: 'transform: translateX(0) translateY(0)',
			ImgTransform: 'background-position: 0 center',
		};
		this.onHover = this.onHover.bind(this);
	}

	onHover(event) {
		let xVal = event.clientX,
			yVal = event.clientY;
		this.setState({
			hover: true,
			cX: xVal,
			cY: yVal,
			hexTransform: 'translateX(-' + this.state.cX/170 + '%) translateY(-' + this.state.cY/170 + '%)',
			imgTransform: this.state.cX/100 + 40 + '% ' + this.state.cY/100 + 40 + '%'
		});
	}

	render() {
		return (
			<header className="header">
				<ContentBox />
				<HexBackground onHover={this.onHover} style={ {transform: `${this.state.hexTransform}` } }/>
				<ImgBackground onHover={this.onHover} style={ {backgroundPosition: `${this.state.imgTransform}`,
															   backgroundImage: `url(${process.env.PUBLIC_URL}/images/MilkyWay.jpg)` } }/>
			</header>
		);
	}
}

export default Header;