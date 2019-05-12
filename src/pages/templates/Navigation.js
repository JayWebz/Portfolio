import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
	render() {
		return (
			<div className="navigation">
  				<input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
  
				<label for="navi-toggle" className="navigation__button">
				    <span className="navigation__icon">&nbsp;</span>
				</label>
  
  				<div className="navigation__background">&nbsp;</div>

				<nav className="navigation__nav">
				    <ul className="navigation__list">
				      	<li className="navigation__item">
				      		<Link className="navigation__link" to="/">
				      			Homepage
			      			</Link>
		      			</li>
				      	<li className="navigation__item">
				      		<Link className="navigation__link" to="/countdown">
				      			Countdown Trivia Game
			      			</Link>
		      			</li>
				      	<li className="navigation__item">
				      		<Link className="navigation__link" to="/iplayyoulisten">
				      			iPlayYouListen Spotify Playlist Builder
			      			</Link>
		      			</li>
				    	<li className="navigation__item">
				    		<Link className="navigation__link" to="/dice-poker">
				    			Interactive Dice Poker
			    			</Link>
		    			</li>
				    	<li className="navigation__item">
				    		<Link className="navigation__link" to="/buzztime">
				    			Buzztime
			    			</Link>
		    			</li>
		    			<li className="navigation__item">
				    		<Link className="navigation__link" to="/south-coast-surety">
				    			South Coast Surety
			    			</Link>
		    			</li>
		    			<li className="navigation__item">
				    		<Link className="navigation__link" to="/mira-costa-college-dance">
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