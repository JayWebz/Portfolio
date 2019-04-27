import React, { Component } from 'react';

class Content extends Component {
	render() {
		return (
			<div className="scs__content-wrapper">
				<div className="row"> 
	            	<p class="u-content-wrapper__p">
	            		iPlayYouListen is a responsive single-page web application that allows a 
	            		user with a Spotify account to build their own playlists to save to their 
	            		Spotify account without using the official app. A simple experience showcases 
	            		data efficiently, while providing an easy to use and eye-pleasing interface. 
	            	</p>
	            	<div className="u-content-wrapper__img">
	            		<img src={`${process.env.PUBLIC_URL}/images/IPYL_1.jpg`} alt="app with search results and playlist populated"/>
	            	</div>
	            	<p class="u-content-wrapper__p">
	            		The app is broken into six different components that all link together. 
	            		The search bar relies on state changes to know what to search for on submit, 
	            		connects with the Spotify API to create an access token upon successful login, 
	            		and displays the props that return from Spotify in the search results. The search 
	            		results are composed using a track component, which populates tracks into a track 
	            		listing. 
	            	</p>
	            	<div className="u-content-wrapper__img">
	            		<img src={`${process.env.PUBLIC_URL}/images/IPYL_2.jpg`} alt="Spotify login screen"/>
	            	</div>
	            	<p class="u-content-wrapper__p">
	            		Two track listings are used inside of both the search results and playlist components, 
	            		which communicate with each other when tracks are added from one side to the other. 
	            		When a playlist is ready to save, an array of the track URIs is submitted to Spotify 
	            		along with the playlist name and saved to that users account.
	            	</p>
	            	<div className="u-content-wrapper__img">
	            		<img src={`${process.env.PUBLIC_URL}/images/IPYL_3.jpg`} alt="app with playlist generated"/>
		        	</div>
		        </div>
			</div>
		);
	}
}

export default Content;
