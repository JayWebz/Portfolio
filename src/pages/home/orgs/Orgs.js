import React, { Component } from 'react';
import SecondaryHeader from '../../../components/headers/SecondaryHeader';
import BackgroundVideo from '../../../components/BackgroundVideo';
import Showcase from '../../../components/Showcase';

class Orgs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			backgroundImage: 'https://thumbs.dreamstime.com/b/hungry-fat-cat-portrait-beautiful-obese-kitty-garden-spring-looking-extremely-59829345.jpg'
		};
	}
	render() {
		return(
			<div className="section-orgs">
				<BackgroundVideo videoMp4= {process.env.PUBLIC_URL + "/images/video.m4v"} 
				videoWebm = {process.env.PUBLIC_URL + "/images/video.webm"} />
				<SecondaryHeader headline="organizations I've collaborated with" />
				<div className="row">
					<div className="col-1-of-3">
			            <Showcase imagePath="/images/Buzztime.png"
			            		alt="NTN Buzztime, Inc."
			            		header="NTN Buzztime, Inc."
			            		href="/buzztime"
			            		description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, recusandae, voluptates! Molestias, porro ullam quia. Dignissimos alias aut ducimus, nisi nam atque, modi ex suscipit quasi accusantium explicabo vitae reprehenderit."/>	
			        </div>
			        <div className="col-1-of-3">
			            <Showcase imagePath="/images/SouthCoastSurety.png"
			            		alt="NTN Buzztime, Inc."
			            		header="NTN Buzztime, Inc."
			            		href="/south-coast-surety"
			            		description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, recusandae, voluptates! Molestias, porro ullam quia. Dignissimos alias aut ducimus, nisi nam atque, modi ex suscipit quasi accusantium explicabo vitae reprehenderit."/>	
			        </div>
			        <div className="col-1-of-3">
			            <Showcase imagePath="/images/MiraCostaCollege.png"
			            		alt="NTN Buzztime, Inc."
			            		header="NTN Buzztime, Inc."
			            		href="mira-costa-college-dance"
			            		description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, recusandae, voluptates! Molestias, porro ullam quia. Dignissimos alias aut ducimus, nisi nam atque, modi ex suscipit quasi accusantium explicabo vitae reprehenderit."/>	
			        </div>
		        </div>
			</div>
		);
	}
}

export default Orgs;