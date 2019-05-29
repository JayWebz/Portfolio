import React, { Component } from 'react';
import Button from './Button';

class Card extends Component {
	render() {
		return(
			<div className="card">
	            <div className="card__side card__side--front">
					<div className="card__picture card__picture--1" style={this.props.background}>
					&nbsp;
					</div>
					<h4 className="card__heading">
						<span className="card__heading-span card__heading-span--1">
							{this.props.projectTitle}
						</span>
					</h4>
					<div className="card__details">
						<ul>
							<li>{this.props.skills}</li>
							<li>{this.props.description}</li>
						</ul>
					</div>
				</div>
				<div className={`card__side card__side--back card__side--back-${this.props.cardCount}`}>
					<div className="card__cta">
						<div className="card__cta-details">
							<p className="card__cta-tools">
								Tools Used:
							</p>
							<ul className="card__cta-list">
								{this.props.tools.split(',').map((el, index) => <li key={index}>{el}</li>)}
							</ul>
							
						</div>
						<Button buttonText="View Case Study" href={this.props.href} />
					</div>
				</div>
	        </div>		
	    );
	}
}

export default Card;