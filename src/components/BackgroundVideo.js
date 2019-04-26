import React, { Component } from 'react';

class BackgroundVideo extends Component {
	render() {
		return(
			<div className="bg-video">
	            <video className="bg-video__content" autoPlay muted={true} loop={true}>
	              	<source src={this.props.videoMp4} type="video/mp4"/>
	              	<source src={this.props.videoWebm} type="video/webm"/>
	                Your browser is not supported for this video!
	            </video>
          </div>
		);
	}
}

export default BackgroundVideo;