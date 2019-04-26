import React, { Component } from 'react';
import SecondaryHeaderLetterOdd from './SecondaryHeaderLetterOdd';
import SecondaryHeaderLetterEven from './SecondaryHeaderLetterEven';
//{marginLeft: `${this.state.vertStrikethroughPosition}`} 

class SecondaryHeader extends Component {
	componentDidMount() {
		//console.log(this.props.headline);
		const headlineArray = this.props.headline.split('');
		const headlineCode = [];
		//console.log(headlineArray);
		for (let i = 0; i < headlineArray.length; i++) {
			if (i % 2 !== 0) {
				if(headlineArray[i] === ' ') {
					headlineCode.push(<SecondaryHeaderLetterEven letter={headlineArray[i]} spacing={{ width: '1rem', display: 'block' }}/>);
				} else {
					headlineCode.push(<SecondaryHeaderLetterEven letter={headlineArray[i]} />);
				}
				
			} else {
				if(headlineArray[i] === ' ') {
					headlineCode.push(<SecondaryHeaderLetterOdd letter={headlineArray[i]} spacing={{ width: '1rem', display: 'block' }}/>);
				} else {
					headlineCode.push(<SecondaryHeaderLetterOdd letter={headlineArray[i]} />);
				}
				
			}	
		}
		return headlineCode;
	}
	render() {
		return(
			<h2 className="heading-secondary u-margin-bottom-lrg">
				<div className="heading-secondary__strikethrough">
					<div className="heading-secondary__strikethrough-dot heading-secondary__strikethrough-dot--left"></div>
					<div className="heading-secondary__strikethrough-dot heading-secondary__strikethrough-dot--right"></div>
				</div>
				{this.componentDidMount()}
			</h2>
	    );
	}
}

export default SecondaryHeader;