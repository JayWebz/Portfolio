import React, { Component } from 'react';

class Content extends Component {
	render() {
		return (
			<div className="countdown__content-wrapper">
				<div className="row"> 
	            	<p class="u-content-wrapper__p">
	            		Countdown Trivia Game is a responsive JavaScript variation of one of the trivia games that 
	            		Buzztime airs on its network. The game delivers 3 general knowledge multiple-choice trivia 
	            		questions before delivering a leaderboard. Two other AI scores are randomly generated in a 
	            		defined range to portray competition. 
	            	</p>
	            	<div className="u-content-wrapper__img">
	            		<img src={`${process.env.PUBLIC_URL}/images/Countdown_1.jpg`} alt="question populated"/>
	            	</div>
	            	<p class="u-content-wrapper__p">
	            		Event listeners track user input for questions and logs the score displayed on the countdown 
	            		timer. A user is able to change their answer up until the timer runs out.  
	            	</p>
	            	<div className="u-content-wrapper__img">
	            		<img src={`${process.env.PUBLIC_URL}/images/Countdown_2.jpg`} alt="answer selected, clues displayed, timer not 0"/>
	            	</div>
	            	<p class="u-content-wrapper__p">
	            		The game architecture uses the module pattern with private and public methods broken into 
	            		a UI controller, a Score controller, and a common controller to link the two together. It 
	            		also uses a 3rd-party API to populate trivia questions, answers, and clues.
	            	</p>
	            	<div className="u-content-wrapper__img">
	            		<img src={`${process.env.PUBLIC_URL}/images/Countdown_3.jpg`} alt="scoreboard"/>
		        	</div>
		        </div>
			</div>
		);
	}
}

export default Content;
