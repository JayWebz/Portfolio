import React, { Component } from 'react';

class Starburst extends Component {
	render() {
		return(
			<div className={"starburst-container " + this.props.starburstClass} style={this.props.starburstPosition}>
				<div className="starburst" style={this.props.starburstRotation}>
					<div className="starburst__rect starburst__rect--horiz">
						<div className="starburst__ext starburst__ext--top">
							<div className="starburst__rect-tip starburst__rect-tip--top1"></div>
							<div className="starburst__rect-tip starburst__rect-tip--top2"></div>
						</div>
						<div className="starburst__ext starburst__ext--bottom">
							<div className="starburst__rect-tip starburst__rect-tip--bottom1"></div>
							<div className="starburst__rect-tip starburst__rect-tip--bottom2"></div>
						</div> 
						<div className="starburst__ext starburst__ext--right">
							<div className="starburst__rect-tip starburst__rect-tip--right1"></div>
						</div>
						<div className="starburst__ext starburst__ext--left">
							<div className="starburst__rect-tip starburst__rect-tip--left1"></div>
						</div>
					</div>
					 <div className="starburst__rect starburst__rect--vert">
						 <div className="starburst__ext starburst__ext--top">
							<div className="starburst__rect-tip starburst__rect-tip--top1"></div>
							<div className="starburst__rect-tip starburst__rect-tip--top2"></div>
						</div>
						<div className="starburst__ext starburst__ext--bottom">
							<div className="starburst__rect-tip starburst__rect-tip--bottom1"></div>
							<div className="starburst__rect-tip starburst__rect-tip--bottom2"></div>
						</div>
						<div className="starburst__ext starburst__ext--right">
							<div className="starburst__rect-tip starburst__rect-tip--right1"></div>
						</div>
						<div className="starburst__ext starburst__ext--left">
							<div className="starburst__rect-tip starburst__rect-tip--left1"></div>
						</div>
					</div> 
					<div className="starburst__circle" style={this.props.circleStyle}></div>
				</div>
			</div>
		);
	}
}

export default Starburst;