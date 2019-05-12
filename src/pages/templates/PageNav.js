import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import SecondaryHeader from '../../components/headers/SecondaryHeader';

class PageNav extends Component {
	constructor(props) {
		super(props);
		this.state={
			linkPrev: '',
			linkNext: ''
		};
		this.updateURLs = this.updateURLs.bind(this);
	}

	componentDidMount() {
		this.unlisten = this.props.history.listen((location, action) => {
      		this.updateURLs()
    	});
    	this.updateURLs();
	}

	updateURLs() {
		switch (window.location.pathname) {
			case '/countdown' :
				this.setState({
					linkPrev: '/mira-costa-college-dance',
					linkNext: '/iplayyoulisten'
				});
				break; 
			case '/iplayyoulisten' :
				this.setState({
					linkPrev: '/countdown',
					linkNext: '/dice-poker'
				});
				break; 
			case '/dice-poker' :
				this.setState({
					linkPrev: '/iplayyoulisten',
					linkNext: '/buzztime'
				});
				break; 
			case '/buzztime' :
				this.setState({
					linkPrev: '/dice-poker',
					linkNext: '/south-coast-surety'
				});
				break; 
			case '/south-coast-surety' :
				this.setState({
					linkPrev: '/buzztime',
					linkNext: '/mira-costa-college-dance'
				});
				break; 
			case '/mira-costa-college-dance' :
			default:
				this.setState({
					linkPrev: '/south-coast-surety',
					linkNext: '/countdown'
				});
				break; 
		}
	}

	render() {
		return (
			this.props.history.location.pathname !== '/' ?
				<div className="pagenav">
					<Link className="pagenav__left" 
						to={this.state.linkPrev}
						onClick={this.updateURLs}>
						<div className="pagenav__arrow">
							<SecondaryHeader  headline="«"/>
						</div>
					</Link>
					<Link className="pagenav__right" 
						to={this.state.linkNext}
						onClick={this.updateURLs}>
						<div className="pagenav__arrow">
							<SecondaryHeader  headline="»"/>
						</div>
					</Link>
				</div>
			: null
		);
	}
}

export default withRouter(PageNav);