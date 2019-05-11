import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
	render() {
		return (
			<div class="navigation">
  				<input type="checkbox" class="navigation__checkbox" id="navi-toggle"/>
  
				<label for="navi-toggle" class="navigation__button">
				    <span class="navigation__icon">&nbsp;</span>
				</label>
  
  				<div class="navigation__background">&nbsp;</div>

				<nav class="navigation__nav">
				    <ul class="navigation__list">
				      	<li class="navigation__item">
				      		<Link class="navigation__link" to="/">
				      			Homepage
			      			</Link>
		      			</li>
				      	<li class="navigation__item">
				      		<Link class="navigation__link" to="/countdown">
				      			Countdown Trivia Game
			      			</Link>
		      			</li>
				      	<li class="navigation__item">
				      		<Link class="navigation__link" to="/iplayyoulisten">
				      			iPlayYouListen Spotify Playlist Builder
			      			</Link>
		      			</li>
				    	<li class="navigation__item">
				    		<Link class="navigation__link" to="/dice-poker">
				    			Interactive Dice Poker
			    			</Link>
		    			</li>
				    	<li class="navigation__item">
				    		<Link class="navigation__link" to="/buzztime">
				    			Buzztime
			    			</Link>
		    			</li>
		    			<li class="navigation__item">
				    		<Link class="navigation__link" to="/south-coast-surety">
				    			South Coast Surety
			    			</Link>
		    			</li>
		    			<li class="navigation__item">
				    		<Link class="navigation__link" to="/mira-costa-college-dance">
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