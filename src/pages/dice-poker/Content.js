import React, { Component } from 'react';

class Content extends Component {
	render() {
		return (
			<div className="dice-poker__content-wrapper">
				<div className="row"> 
	            	<p class="u-content-wrapper__p">
	            		Python Poker Parlor is a python-driven application where users can play dice poker. 
	            		It features interactive dice rolling, a UI created with Python, and high score tracking. 
	            		e game feels reminiscent of an MS-DOS game using bright 8-bit colors and a sans-serif font. 
	            	</p>
	            	<div className="u-content-wrapper__img">
	            		<img src={`${process.env.PUBLIC_URL}/images/DicePoker_1.png`} alt="dice held with rules"/>
	            	</div>
	            	<p class="u-content-wrapper__p">
	            		The game uses a small graphics library that is perfect for creating basic shapes and 
	            		inputs and is built on Python3.  The die interface and button are built as common objects 
	            		later evoked in a compartmentalized GUI file. The poker hand and poker app functionality 
	            		are separated into unique files and are evoked by an introductory file that loads on 
	            		initialization. 
	            	</p>
	            	<div className="u-content-wrapper__img">
	            		<img src={`${process.env.PUBLIC_URL}/images/DicePoker_2.jpg`} alt="scored roll with label on bottom"/>
	            	</div>
	            	<p class="u-content-wrapper__p">
	            		The app has separation of concerns keeping functionality and UI independent of each other. 
	            		After each round, the game will check for a high score, and writes the new high score to 
	            		an external file. 
	            	</p>
	            	<div className="u-content-wrapper__img">
	            		<img src={`${process.env.PUBLIC_URL}/images/DicePoker_3.png`} alt="enter high score"/>
		        	</div>
		        </div>
			</div>
		);
	}
}

export default Content;
