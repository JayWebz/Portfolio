import React, { Component } from 'react';
import SecondaryHeader from '../../../components/headers/SecondaryHeader';
import StarburstBackground from '../../../components/starburst/StarburstBackground';
import Form from '../../../components/form/Form';
import Story from '../../../components/stories/Story';

class Orgs extends Component {
	render() {
		return(
			<div className="section-contact">
				<div className="row">
					<div className="col-1-of-1">
			            <Story componentType="testimonial" />
			        </div>
		        </div>
				<div className="row">	
					<StarburstBackground />
					<Form />
				</div>
			</div>
		);
	}
}

export default Orgs;