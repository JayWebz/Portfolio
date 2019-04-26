import React, { Component } from 'react';

class Content extends Component {
	render() {
		return (
			<div className="scs__content-wrapper">
				<div className="row"> 
	            	<p class="u-content-wrapper__p">
	            		The Mira Costa College Dance Department was looking for a website to be able to 
	            		both sell tickets for upcoming shows and feature courses offered by the department. 
	            		They wanted something that could be accessible by all device types that didn’t 
	            		downplay aesthetics. 
	            	</p>
	            	<div className="u-content-wrapper__img">
	            		<img src={`${process.env.PUBLIC_URL}/images/MCC_1.jpg`} alt="[app with search results and playlist populated]"/>
	            	</div>
	            	<p class="u-content-wrapper__p">
	            		Our team set out to do just that. We created a single-page html website that featured 
	            		staff, upcoming shows, and information about the department. 
	            	</p>
	            	<div className="u-content-wrapper__img">
	            		<img src={`${process.env.PUBLIC_URL}/images/MCC_2.jpg`} alt="[Spotify login screen]"/>
	            	</div>
	            	<p class="u-content-wrapper__p">
	            		The website we built used JQuery to create dynamic interaction on the page 
	            		like smooth-scrolling and image carousels and plays with CSS fixed and relative 
	            		positioning to keep the user interested as they scroll through the website.
	            	</p>
	            	<div className="u-content-wrapper__img">
	            		<img src={`${process.env.PUBLIC_URL}/images/MCC_3.jpg`} alt="[Spotify login screen]"/>
	            	</div>
		        </div>
			</div>
		);
	}
}

export default Content;
