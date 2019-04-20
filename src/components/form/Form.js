import React, { Component } from 'react';
import FormContent from './FormContent';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDesktop: true,
			isMobile: false
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

	}
	
	render() {
		return(
            <div>
            	{this.state.isDesktop ? (
						<div className="form-container" style={{ backgroundImage: "linear-gradient(105deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 50%, transparent 50%), url(" + process.env.PUBLIC_URL + "/images/MilkyWay.jpg)" }}><FormContent /></div>
					) : (
						this.state.isMobile ? (
							<div className="form-container" style={{ backgroundImage: "linear-gradient(105deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%, transparent 100%), url(" + process.env.PUBLIC_URL + "/images/MilkyWay.jpg)" }}><FormContent /></div>
						) : (
							<div className="form-container" style={{ backgroundImage: "linear-gradient(105deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 67%, transparent 67%), url(" + process.env.PUBLIC_URL + "/images/MilkyWay.jpg)" }}><FormContent /></div>
						)
					)
				}
            </div>
	    );
	}
}

export default Form;