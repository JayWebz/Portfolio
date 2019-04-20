import React, { Component } from 'react';

class SecondaryHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false
		};
		this.handleHover = this.handleHover.bind(this);
	}
	handleHover() {
		this.setState({ hover: true });
		setTimeout(() => {
            this.setState({ hover: false })
        }, 3100);
	}
	render() {
		return(
			<div className="heading-secondary__letter-container">
				<div className="heading-secondary__vert-strikethrough">
					<div className="heading-secondary__strikethrough-vert-dot heading-secondary__strikethrough-vert-dot--top"></div>
					<div className="heading-secondary__strikethrough-vert-dot heading-secondary__strikethrough-vert-dot--bottom"></div>
				</div>		
				<span className={`heading-secondary__letter heading-secondary__letter--even ${this.state.hover ? "heading-secondary__letter--even-animate" : ""}`}
					onMouseEnter={this.handleHover}
					onMouseLeave={this.handleHover}
					style={this.props.spacing}>
					{this.props.letter}
				</span>
			</div>
	    );
	}
}

export default SecondaryHeader;