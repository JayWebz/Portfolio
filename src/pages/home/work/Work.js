import React, { Component } from 'react';
import Card from '../../../components/Card';
import SecondaryHeader from '../../../components/headers/SecondaryHeader';
import Story from '../../../components/stories/Story';

class Work extends Component {
	render() {
		return(
			<div className="section-work">
				<div className="row">
					<div className="col-1-of-1">
			            <Story componentType="CTA" />	
			        </div>
		        </div>
				<SecondaryHeader headline="My recent work"/>
				<div className="row">
		            <div className="col-1-of-3">
		              	<Card background={ {backgroundImage: `url(${process.env.PUBLIC_URL}/images/countdown.jpg)`} } 
		              		projectTitle="Countdown Trivia Game"
		              		skills="HTML / Javascript"
		              		description="A timed trivia game that delivers three random questions and scores based on speed."
		              		cardCount="1"
		              		tools="HTML/CSS, Javascript, Open Trivia Question API, Surge Web Deployment"
		              		href="/countdown"
		              	/>
		            </div>
		            <div className="col-1-of-3">
		              	<Card background={ {backgroundImage: `url("${process.env.PUBLIC_URL}/images/IPYL_background.jpg")`} }  
		              		projectTitle="iPlayYouListen Spotify Playlist Builder"
		              		skills="ReactJS"
		              		description="A Web App designed to build custom spotify playlists and save them directly into your Spotify account."
		              		cardCount="2"
		              		tools="ReactJS, Spotify API, SASS, Surge Web Deployment"
		              		href="/iplayyoulisten"
		              	/>
		            </div>
		            <div className="col-1-of-3">
		              	<Card background={ {backgroundImage: `url("${process.env.PUBLIC_URL}/images/DicePoker.jpg")`} }  
		              		projectTitle="Interactive Dice Poker"
		              		skills="Python"
		              		description="A poker game with a graphical user interface that simulates dice rolls and tracks high scores."
		              		cardCount="3"
		              		tools="Python3, Tkinter-based graphics package"
		              		href="/dice-poker" 
		              	/>
		            </div>
	      		</div>
			</div>
		);
	}
}

export default Work;