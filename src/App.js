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

  getUser = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value
    console.log(name)
  }

  render() {
    const { user } = this.state.user;
    return (
      <div className="App">
        <form onSubmit={ this.getUser }>
          <input type='text' placeholder='Enter a username' name='name' />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default App;
