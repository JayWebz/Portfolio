import React, { Component } from 'react';
import SecondaryHeader from '../../../components/headers/SecondaryHeader';
import BackgroundVideo from '../../../components/BackgroundVideo';
import Showcase from '../../../components/Showcase';

class Orgs extends Component {
	render() {
		return(
			<div className="section-orgs">
				<BackgroundVideo videoMp4= {process.env.PUBLIC_URL + "/images/video.m4v"} 
				videoWebm = {process.env.PUBLIC_URL + "/images/video.webm"} />
				<SecondaryHeader headline="organizations I've collaborated with" />
				<div className="row">
					<div className="col-1-of-3">
			            <Showcase imagePath="/images/caida.png"
			            		alt="CAIDA"
			            		header="CAIDA"
			            		href="caida"
			            		description="Based at the San Diego Supercomputer Center at UCSD, the Center for Applied Internet Data Analysis conducts network research and builds research infrastructure to support large-scale collection, curation, and distribution of data to the scientific research community."/>	
			        </div>
					<div className="col-1-of-3">
			            <Showcase imagePath="/images/Buzztime.png"
			            		alt="NTN Buzztime, Inc."
			            		header="NTN Buzztime, Inc."
			            		href="/buzztime"
			            		description="NTN Buzztime, Inc. delivers entertainment and dining technology to bars and restaurants in North America; providing an entertainment and marketing services platform for hospitality venues that offers games, events, and entertainment experiences to customers."/>	
			        </div>
			        <div className="col-1-of-3">
			            <Showcase imagePath="/images/SouthCoastSurety.png"
			            		alt="South Coast Surety"
			            		header="South Coast Surety"
			            		href="south-coast-surety"
			            		description="South Coast Surety Insurance Services, Inc. operates as a surety bond producing agency primarily in California. It offers various surety bonds and related services for contractors, insurance brokers, and the general business community in the United States."/>	
			        </div>
			        {/*<div className="col-1-of-3">
			            <Showcase imagePath="/images/MiraCostaCollege.png"
			            		alt="Mira Costa College"
			            		header="Mira Costa College"
			            		href="mira-costa-college-dance"
			            		description="MiraCosta College is a public community college serving coastal North San Diego County in California. The Dance department engages students through diverse courses that focus on dance techniques, choreography, performance, and other scholarly practices."/>	
			        </div>*/}
		        </div>
			</div>
		);
	}
}

export default Orgs;