import React, {Component} from 'react';
import Login from './Login.jsx';

class Home extends Component {
	render() {
		return(
			<div className="column">
				<h1>Hello from Home!</h1>
				<Login />
			</div>);
	}
}

export default Home;