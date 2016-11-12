import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

class App extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Home} />
				<Route path='/page' component={Page} />
			</Router>
		);
	}
}

const Home = () => <h1>Hello from Home!</h1>;
const Page = () => <h1>This is a blank page.</h1>;

export default App;