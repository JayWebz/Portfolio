import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			event: '',
			isChecked: true
		};
		this.toggleMenu = this.toggleMenu.bind(this);
		this.toggleCheckbox = this.toggleCheckbox.bind(this);
	}

	toggleCheckbox(event) {
		event.target.checked === true ? this.setState({ isChecked: false }) : this.setState({ isChecked: true });
		this.setState({ event: event.target.checked });
	}

	toggleMenu(event) {
		this.setState({ 
			isChecked: !this.state.isChecked ,
			event: !this.state.event
		});
		this.toggleCheckbox(event);
	}

	render() {
		return (
			<div className="navigation">
  				<input type="checkbox" onChange={this.toggleCheckbox} className="navigation__checkbox" id="navi-toggle"/>
  
				<label for="navi-toggle" className="navigation__button">
				    <span className="navigation__icon">&nbsp;</span>
				</label>
  
  				<div className="navigation__background">&nbsp;</div>

				<nav className="navigation__nav">
				    <ul className="navigation__list">
				      	<li className="navigation__item">
				      		<Link className="navigation__link" to="/" onClick={() => this.toggleMenu()}>
				      			Homepage
			      			</Link>
		      			</li>
				      	<li className="navigation__item">
				      		<Link className="navigation__link" to="/countdown" onClick={() => this.toggleMenu()}>
				      			Countdown Trivia Game
			      			</Link>
		      			</li>
				      	<li className="navigation__item">
				      		<Link className="navigation__link" to="/iplayyoulisten" onClick={() => this.toggleMenu()}>
				      			iPlayYouListen Spotify Playlist Builder
			      			</Link>
		      			</li>
				    	<li className="navigation__item">
				    		<Link className="navigation__link" to="/dice-poker" onClick={() => this.toggleMenu()}>
				    			Interactive Dice Poker
			    			</Link>
		    			</li>
				    	<li className="navigation__item">
				    		<Link className="navigation__link" to="/buzztime" onClick={() => this.toggleMenu()}>
				    			Buzztime
			    			</Link>
		    			</li>
		    			<li className="navigation__item">
				    		<Link className="navigation__link" to="/south-coast-surety" onClick={() => this.toggleMenu()}>
				    			South Coast Surety
			    			</Link>
		    			</li>
		    			<li className="navigation__item">
				    		<Link className="navigation__link" to="/mira-costa-college-dance" onClick={() => this.toggleMenu()}>
				    			Mira Costa College Dance
			    			</Link>
		    			</li>
				    </ul>
				</nav>
			</div>
		);
	}
}

export default Navigation;