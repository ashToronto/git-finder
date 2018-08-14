import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form'

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
    fetch(`https://api.github.com/users/${name}`)
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render() {
    const { user } = this.state.user;
    return (
      <div className="App">
         <Form getUser={this.getUser} />
      </div>
    );
  }
}

export default App;
