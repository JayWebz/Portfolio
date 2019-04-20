import React, { Component } from 'react';
import SecondaryHeader from './headers/SecondaryHeader';

class Overview extends Component {
	render() {
		return(
			<div className="section-overview">
				<div className="row">
		            <div className="col-1-of-1">
		            	<div className="section-overview__col-1">
		            		<SecondaryHeader headline="Overview"/>
		            		<p className="section-overview__col-text u-margin-bottom-sml">{this.props.overview}</p>
		            	</div>
		            </div>
		            <div className="col-1-of-3">
		            	<div className="section-overview__col-3">
	            			<SecondaryHeader headline="Role"/>
	            			<p className="section-overview__col-text">{this.props.role}</p>
	            		</div>
		            </div>
		            <div className="col-1-of-3">
		            	<div className="section-overview__col-3">
	            			<SecondaryHeader headline="Context"/>
	            			<p className="section-overview__col-text">{this.props.context}</p>
	            		</div>
		            </div>
		            <div className="col-1-of-3">
		            	<div className="section-overview__col-3">
	            			<SecondaryHeader headline="Year"/>
	            			<p className="section-overview__col-text">{this.props.year}</p>
	            		</div>
		            </div>
	      		</div>
			</div>
		);
	}
}

export default Overview;