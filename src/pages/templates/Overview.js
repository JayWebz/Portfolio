import React, { Component } from 'react';
import SecondaryHeader from '../../components/headers/SecondaryHeader';

class Overview extends Component {
	render() {
		return(
			<div className="section-overview">
				<div className="row">
	            	<div className="section-overview__col-1">
	            		<SecondaryHeader headline="Overview"/>
	            		<h3 className="heading-tertiary u-margin-bottom-sml">{this.props.overview}</h3>
	            	</div>
		            <div className="col-1-of-3">
		            	<div className="section-overview__col-3">
	            			<SecondaryHeader headline="Role"/>
	            			<h3 className="heading-tertiary">{this.props.myRole}</h3>
	            		</div>
		            </div>
		            <div className="col-1-of-3">
		            	<div className="section-overview__col-3">
	            			<SecondaryHeader headline="Context"/>
	            			<h3 className="heading-tertiary">{this.props.context}</h3>
	            		</div>
		            </div>
		            <div className="col-1-of-3">
		            	<div className="section-overview__col-3">
	            			<SecondaryHeader headline="Year"/>
	            			<h3 className="heading-tertiary">{this.props.year}</h3>
	            		</div>
		            </div>
	      		</div>
			</div>
		);
	}
}

export default Overview;