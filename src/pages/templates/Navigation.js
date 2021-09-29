import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.checkbox = React.createRef();
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu(event) {
		this.checkbox.current.click();
	}

	render() {
		return (
			<div className="navigation">
  				<input type="checkbox" className="navigation__checkbox" ref={this.checkbox} id="navi-toggle"/>
				<label htmlFor="navi-toggle" className="navigation__button" >
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
							<Link className="navigation__link" to="/caida" onClick={() => this.toggleMenu()}>
								CAIDA
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
				    </ul>
				</nav>
			</div>
		);
	}
}

export default Navigation;
