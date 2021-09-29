import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/style.css';

if (window.location.pathname !== "/.well-known/pki-validation/053933CDC3FA6B5501AEB52C6B945C47.txt") {
    ReactDOM.render(<App />, document.getElementById('root'));
}


// import React from 'react';
// import ReactDOM from 'react-dom';
// //import App from './App';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Home from './pages/home/Home';
// import './css/style.css';

// ReactDOM.render(
// 	<Router>
// 	<div>
// 		<Route path="/" component={Home} />
// 	</div>
// 	</Router>
// 	, document.getElementById('root'));
