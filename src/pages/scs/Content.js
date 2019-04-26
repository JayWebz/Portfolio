import React, { Component } from 'react';

class Content extends Component {
	render() {
		return (
			<div className="scs__content-wrapper">
				<div className="row"> 
	            	<p class="u-content-wrapper__p">
	            		South Coast Surety needed a new website to replace it’s outdated and confusing surety 
	            		bond website. They wanted something simple that users could feel confident navigating 
	            		since the content itself is complicated enough. 
	            	</p>
	            	<div className="u-content-wrapper__img">
	            		<img src={`${process.env.PUBLIC_URL}/images/SCS_1.jpg`} alt="[app with search results and playlist populated]"/>
	            	</div>
	            	<p class="u-content-wrapper__p">
	            		Together, with a back-end developer, we completely rebuilt the site into simple pages 
	            		that simplify the top of the sales funnel and make it easy for users to get their 
	            		information submitted. Filtered pages to find bonds based on state, industry, or 
	            		type along with easy to navigate multi-page forms on landing pages help bring new 
	            		life into an outdated website. 
	            	</p>
	            	<div className="u-content-wrapper__img">
	            		<img src={`${process.env.PUBLIC_URL}/images/SCS_2.png`} alt="[Spotify login screen]"/>
	            	</div>
	            	<p class="u-content-wrapper__p">
	            		South Coast Surety’s website is built using a custom wordpress child-theme based 
	            		on the Avada theme. Custom page templates with dynamic information allow a user to 
	            		receive the same experience no matter the bond they seek or from where they are 
	            		seeking it. Scalable page templates combined with organized sass for styling helps 
	            		to optimize speed and manage easily the codebase.
	            	</p>
		        </div>
			</div>
		);
	}
}

export default Content;
