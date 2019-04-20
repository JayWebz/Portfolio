import React, { Component } from 'react';

class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {
			programRun: false
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.props.onClick(this.state.onClick);
		//console.log(this.state.programRun);
	}

  	render() {
		return(
			<div>
        		<a onClick={this.handleClick} href={this.props.href} className="btn btn--white btn--animated">
            		{this.props.buttonText} &#187;
        		</a>
      		</div>
    	);
	}
}

export default Button;