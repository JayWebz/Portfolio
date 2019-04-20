import React, { Component } from 'react';
import Header from './header/Header';
import Work from './work/Work';
import Orgs from './orgs/Orgs';
import Contact from './contact/Contact';
import Footer from '../templates/Footer';

class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<Work />
				<Orgs />
				<Contact />
				<Footer />
			</div>
		);
	}
}

export default Home;
