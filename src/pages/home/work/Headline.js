import React, { Component } from 'react';
import Link from 'react-router-dom';

class Headline extends Component {
	render() {
		return (
			<div className="section-work__headline">
				<p>
					Hi, my name is Jon. I create websites and web applications. I'm available for contract work, so if you'd like to build something, 
					<Link to="#contact">
						get in touch
					</Link>
				</p>
			</div>
		);
	}
}

export default Headline;