import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {}
    }
  }

  getUser = () => {
    const name = this.ref.name.value
    console.log(name)
  }

  render() {
    const { user } = this.state.user;
    return (
      <div className="App">
        <input type='text' placeholder='Enter a username' ref='name' />
        <button onClick={ this.getUser }></button>
      </div>
    );
  }
}

export default App;
