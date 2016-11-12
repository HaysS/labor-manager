import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

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

const Home = () => <div className="left-col column"><h1>Hello from Home!</h1></div>;
const Page = () => <div className="left-col column"><h1>This is a blank page.</h1></div>;
const NotFound = () => <div className="left-col column"><h1>404 Error: Page not found.</h1></div>;
const Nav = () => (
	<header>
		<div className="header-content">
			<h1 className="left-col column">Dating App</h1>
			<nav className="right-col column">
				<Link to='/'>Home</Link><p> | </p>
				<Link to='/page'>Page</Link>
			</nav>
		</div>
	</header>
);
const Container = (props) => <div className="wrapper"><Nav /><div className="main-content">{props.children}</div></div>;

export default App;