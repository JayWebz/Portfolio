import React, { Component } from 'react';
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
					<Form />
				</div>
			</div>
		);
	}
}

export default Orgs;