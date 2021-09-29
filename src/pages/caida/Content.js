import React, { Component } from 'react';

class Content extends Component {
	render() {
		return (
			<div className="caida__content-wrapper">
				<div className="row">
	            	<p className="u-content-wrapper__p">
	            		The Center for Applied Internet Data Analysis (CAIDA) was interested in creating new interfaces for two of their research initiatives. One initiative, the CAIDA Resource Catalog, required an interface that allowed users to query multiple databases of research assets, and another initiative, Internet Outage Detection and Analysis (IODA), that upgraded the visual interface codebase to a more modern architecture, while updating some features. I was tasked with designing and implementing these interfaces as a UX/UI Designer and Developer, as well as coding some new features in a third website, the prior iteration of the IODA interface.
	            	</p>
					<p className="u-content-wrapper__p">My design and implementation process for either project entailed:</p>
					<p className="u-content-wrapper__p"><strong>Research</strong></p>
					<ul className="caida__content-wrapper__ul">
						<li>conducting stakeholder interviews</li>
						<li>reviewing available web analytics</li>
						<li>interviewing future end-users</li>
					</ul>
					<p className="u-content-wrapper__p"><strong>Design</strong></p>
					<ul className="caida__content-wrapper__ul">
						<li>Generating Information Architecture documentation</li>
						<li>Creating a Sitemap to organize content and internal linking</li>
						<li>Building a low-fidelity interactive prototype using Axure RP, a UX tool</li>
						<li>Designing high-fidelity mock-ups of each template page using Adobe Photoshop</li>
					</ul>
					<p className="u-content-wrapper__p"><strong>Development</strong></p>
					<ul className="caida__content-wrapper__ul">
						<li>Coding the website to match the prototype and mock-up, as well as all functionality/data retrieval</li>
						<li>Adding common functions used to an independent library of re-usable components</li>
						<li>Managing coding the project with Github projects for task tracking</li>
						<li>Conducting user interviews to determine priority of features/requests in future iterations</li>
					</ul>
					<p className="u-content-wrapper__p">
						If you want to learn more about my time at CAIDA, you can check out my resumé and GitHub in the footer. Get in touch with me via the form below for specific questions.
					</p>
		        </div>
			</div>
		);
	}
}

export default Content;
