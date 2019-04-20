import React, { Component } from 'react';
import Starburst from './Starburst';

class StarburstBackground extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDesktop: window.innerWidth > 1025,
			isMobile: window.innerWidth < 481,

			starburst_TopRight_Color: 'green',
			starburst_TopRight_PosRight: '55%',
			starburst_TopRight_Rotate: '45deg',
			starburst_TopRight_PosTop: '-10rem',
			starburst_TopRight_Float: 'right',

			// starburstMidLeftColor: 'purple',
			// starburstMidLeftPosLeft: '52rem',
			// starburstMidLLeftPosTop: '54rem',
			// starburstMidLeftRotate: '75deg',
			// starburstMidLeftMaxWidth: '19rem',

			// starburstTopLeftColor: 'gold',

			// starburstBottomRightColor: 'red',
			// starburstBottomRightPosRight: '25rem',
			// starburstBottomRightPosTop: '73rem',
			// starburstBottomRightRotate: '330deg'
		};
		this.handleResize = this.handleResize.bind(this);
	}

	componentDidMount() {
  		this.handleResize();
  		window.addEventListener('resize', this.handleResize);
	}

	componentWillUnmount() {
  		window.removeEventListener('resize', this.handleResize);
	}

	handleResize() {
		this.setState ({
			isDesktop: window.innerWidth > 1025,
			isMobile: window.innerWidth < 481
		});

		if (this.state.isDesktop) {
			this.setState ({
				starburst_TopRight_PosRight: '55%'
			});
		} else if (this.state.isMobile) {
			this.setState ({
				starburst_TopRight_PosRight: '-16rem'
			});
		} else {
			starburst_TopRight_PosRight: '-18%'
		}
	}

	render() {
		return(
			<div>
				<Starburst className="top-right"
							circleStyle={ {backgroundColor: `${this.state.starburst_TopRight_Color}` } }
							starburstPosition={ {float: `${this.state.starburst_TopRight_Float}`,
												marginTop: `${this.state.starburst_TopRight_PosTop}`,
												marginRight: `${this.state.starburst_TopRight_PosRight}`} }
							starburstRotation={ {transform: `rotate(${this.state.starburst_TopRight_Rotate}) scale(0.3)` } }/>
				
			</div>
		);
	}
}

export default StarburstBackground;