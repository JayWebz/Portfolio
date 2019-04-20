import React, { Component } from 'react';
import Starburst from './Starburst';

class StarburstBackground extends Component {
	constructor(props) {
		super(props);
		this.state = {
			starburstTopRightColor: 'green',
			starburstTopRightPosRight: '0',
			starburstTopRightRotate: '45deg',
			starburstTopRightPosTop: '-9rem',
			starburstTopRightWidth: '10%',

			starburstMidLeftColor: 'purple',
			//starburstMidLeftPosLeft: '52rem',
			starburstMidLLeftPosTop: '54rem',
			starburstMidLeftRotate: '75deg',
			starburstMidLeftMaxWidth: '19rem',

			starburstTopLeftColor: 'gold',

			starburstBottomRightColor: 'red',
			starburstBottomRightPosRight: '25rem',
			starburstBottomRightPosTop: '73rem',
			starburstBottomRightRotate: '330deg'
		};
	}
	render() {
		return(
			<div>
				<Starburst className="top-right"
							circleStyle={ {backgroundColor: `${this.state.starburstTopRightColor}` } }
							starburstPosition={ {right: `${this.state.starburstTopRightPosRight}`,
												  top: `${this.state.starburstTopRightPosTop}`,
												  width: `${this.state.starburstTopRightWidth}`} }
							starburstRotation={ {transform: `rotate(${this.state.starburstTopRightRotate}) scale(0.3)` } }/>
				
				<Starburst className="top-left"
							circleStyle={ {backgroundColor: `${this.state.starburstMidLeftColor}` } }
							starburstPosition={ {top: `${this.state.starburstMidLLeftPosTop}`,
												maxWidth: `${this.state.starburstMidLeftMaxWidth}` } } 
							starburstRotation={ {transform: `rotate(${this.state.starburstMidLeftRotate}) scale(0.4)` } }/>
				
				<Starburst circleStyle={ {backgroundColor: `${this.state.starburstTopLeftColor}` } } 
							starburstRotation={ {transform: `rotate(${this.state.starburstTopRightRotate}) scale(0.6)` } }/>
				<Starburst className="bottom-right"
							circleStyle={ {backgroundColor: `${this.state.starburstBottomRightColor}` } }
							starburstPosition={ {right: `${this.state.starburstBottomRightPosRight}`,
												  top: `${this.state.starburstBottomRightPosTop}`,
												  width: `${this.state.starburstTopRightWidth}`} }
							starburstRotation={ {transform: `rotate(${this.state.starburstBottomRightRotate}) scale(0.8)` } }/>
				
			</div>
		);
	}
}

export default StarburstBackground;