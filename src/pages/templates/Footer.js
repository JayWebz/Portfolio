import React, { Component } from 'react';

class Footer extends Component {
	render() {
		let year = new Date().getFullYear();
		return(
			<div className="footer">
				<div className="row">
					<div className="col-1-of-2">
						<h4 className="footer__header">About me</h4>

						<div className="footer__about">
							<img src={process.env.PUBLIC_URL + "/images/SCS_PJ.jpg"} alt="Bio Picture"/>

							<p>My name is Jon and I am a full-time Web Developer based in Vista, CA. 
							I specialize in creating dynamic and beautiful web pages and apps using the 
							latest technologies and tools. I have been in the field for around 8 years, 
							and still get excited about new projects and learning new things. I’m a developer, 
							a designer, a thinker, a creative, and have an eye for detail. Check out 
							my GitHub or message me to see what I’ve been up to lately.</p>
						</div>
					</div>
					<div className="col-1-of-2">
						<h4 className="footer__header">Professional Resources</h4>
						<div className="footer__links">
							<div className="footer__links-single">
								<a href="" target="_blank">
									<img src={process.env.PUBLIC_URL + "/images/footer/profile.png"} alt="Resumé"/>
								</a>
								<p>Resumé</p>
							</div>
							<div className="footer__links-single">
								<a href="https://github.com/JayWebz" target="_blank">
									<img src={process.env.PUBLIC_URL + "/images/footer/github.png"} alt="GitHub"/>
								</a>
								<p>GitHub</p>
							</div>
							<div className="footer__links-single">
								<a href="https://www.linkedin.com/in/jonweber09/" target="_blank">
									<img src={process.env.PUBLIC_URL + "/images/footer/linkedin.png"} alt="LinkedIn"/>
								</a>
								<p>LinkedIn</p>
							</div>
						</div>
						<div className="footer__badges">
							<img src={process.env.PUBLIC_URL + "/images/footer/html5.png"} alt="HTML5 Badge"/>
							<img src={process.env.PUBLIC_URL + "/images/footer/css3.png"} alt="CSS3 Badge"/>
							<img src={process.env.PUBLIC_URL + "/images/footer/js6.png"} alt="Javascript 6 Badge"/>
						</div>
						<p className="footer__copyright">© {year} Jonathan Weber. All rights reserved</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;