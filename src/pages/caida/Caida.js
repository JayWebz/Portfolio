import React, { Component } from 'react';
import Button from '../../components/Button';
import Hero from '../templates/Hero';
import Overview from '../templates/Overview';
import Content from './Content';
import Form from '../../components/form/Form';

class Caida extends Component {
	render() {
		let heroGradient = {backgroundImage: 'linear-gradient(to right top, #617486 0%, #2c3e50 67%, #0D2032 100%)'};
		return (
			<div className="caida">
				<Hero heading="CAIDA"
					alt="CAIDA"
					image={`${process.env.PUBLIC_URL}/images/CAIDA_Devices.png`}
					style={heroGradient}/>
				<Overview overview="At the Center for Applied Internet Data Analysis (CAIDA), I Designed and Developed two data-driven applications from
ideation to launch; one that detects and visualizes macroscopic
internet outages in near-realtime and one that serves as a
resource catalog to help search and filter through research
assets, e.g. datasets, published papers, software, etc."
						myRole="UI/UX Designer & Developer"
						context="Full Time"
						year="2019 - Present"/>
				<div className="caida__content">
					<Content />
					<div className="caida__links">
						<Button buttonText="View CAIDA Resource Catalog" href="https://catalog.caida.org/"/>
						<Button buttonText="View IODA Website" href="https://v2.ioda.caida.org"/>
					</div>
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

export default Caida;
