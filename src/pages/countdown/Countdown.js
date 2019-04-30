import React, { Component } from 'react';
import Button from '../../components/Button';
import Hero from '../templates/Hero';
import Overview from '../templates/Overview';
import Content from './Content';
import Form from '../../components/form/Form';

class Countdown extends Component {
	render() {
		let heroGradient = {backgroundImage: 'linear-gradient(to right top, #ED9D1f 0%, #FFE5BD 33%, #FFD798 67%)'}
		return (
			<div className="countdown">
				<Hero heading="Countdown Trivia Game" 
					alt="Countdown Trivia Game" 
					image={`${process.env.PUBLIC_URL}/images/Countdown_Devices.png`}
					style={heroGradient}/>
				<Overview overview="Challenge your mind and beat the clock in this 3-question trivia game built with Javascript."
						myRole="Web Developer"
						context="Personal Project"
						year="2019"/>
				<div className="countdown__content">
					<Content />
					<Button buttonText="Visit Website" href="http://countdown-trivia.surge.sh
.surge.sh/"/>
				</div>
				<div className="row">
					<div className="form-container" 
						style={{ backgroundImage: "linear-gradient(105deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 50%, transparent 50%), url(" + process.env.PUBLIC_URL + "/images/MilkyWay.jpg)" }}>
						<Form />
					</div>
				</div>
			</div>
		);
	}
}

export default Countdown;
