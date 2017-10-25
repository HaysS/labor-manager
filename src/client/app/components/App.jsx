import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Home from './Home.jsx';

class App extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={Container}>
					<IndexRoute component={Home} />
					<Route path='/page' component={Page} />
					<Route path='*' component={NotFound} />
				</Route>
			</Router>
		);
	}
}

const Page = () => <div className="column"><h1>This is a blank page.</h1></div>;
const NotFound = () => <div className="column"><h1>404 Error: Page not found.</h1></div>;
const Nav = () => (
	<header>
		<div className="header-content">
			<h1 className="left-col column">Grambler</h1>
			<nav className="right-col column">
				<Link to='/'>Home</Link><p> | </p>
				<Link to='/page'>Page</Link>
			</nav>
		</div>
	</header>
);
const Container = (props) => <div className="wrapper"><Nav /><div className="main-content">{props.children}</div></div>;

export default App;