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

const Home = () => <h1>Hello from Home!</h1>;
const Page = () => <h1>This is a blank page.</h1>;
const NotFound = () => <h1>404 Error: Page not found.</h1>;
const Nav = () => (
	<div>
		<Link to='/'>Home</Link>&nbsp;
		<Link to='/page'>Page</Link>
	</div>
);
const Container = (props) => <div><Nav />{props.children}</div>;

export default App;