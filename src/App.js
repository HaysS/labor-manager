import React, { Component } from 'react';
import firebase from 'firebase';

import logo from './logo.svg';
import './App.css';

import {provider, auth} from './client';

class App extends Component {

  async componentWillMount() {
    this.state = {
      user: null
    }

    const user = await auth().onAuthStateChanged();
    if(user) 
      this.setState({user})
  }

  async login() {
    const result = await auth().signInWithPopup(provider);
    this.setState({user: result.user});
  }

  async logout() {
    await auth().signOut()
    this.setState({user: null});
  }

  render() {
    const {user} = this.state

    return (
      <div className="App">
        <p>{user ? `Hi, ${user.displayName}!` : 'Hi!'}</p>
        <button onClick={this.login.bind(this)}>
          Login with Facebook
        </button>

        <button onClick={this.logout.bind(this)}>
          Logout
        </button> 
      </div>
    );
  }
}

export default App;
