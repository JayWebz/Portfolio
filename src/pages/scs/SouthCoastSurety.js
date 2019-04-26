import React, { Component } from 'react';
import Button from '../../components/Button';
import Hero from '../templates/Hero';
import Overview from '../templates/Overview';
import Content from './Content';
import Form from '../../components/form/Form';

class SouthCoastSurety extends Component {
	render() {
		let heroGradient = {backgroundImage: 'linear-gradient(to right top, #032946 0%, #1D547E 33%, #367FB6 67%)'}
		return (
			<div className="scs">
				<Hero heading="South Coast Surety" 
					alt="South Coast Surety" 
					image={`${process.env.PUBLIC_URL}/images/DevicesSample.png`}
					style={heroGradient}/>
				<Overview overview="A custom-themed wordpress website with the primary purpose to generate leads and disseminate information about surety bonds."
						role="Web Designer/Developer"
						context="Freelance"
						year="2018"/>
				<div className="scs__content">
					<Content />
					<Button buttonText="Visit Website" href="https://www.southcoastsurety.com/"/>
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

export default SouthCoastSurety;
