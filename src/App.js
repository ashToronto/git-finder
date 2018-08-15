import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form'
import User from './components/user'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        name: '',
        location: '',
        followers: '',
        avatar: ''
    }
  }

  getUser = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value
    fetch(`https://api.github.com/users/${name}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
          name: data.name,
          location: data.location,
          followers: data.followers,
          avatar: data.avatar_url
    });
      console.log(data)
  });
}

  render() {
    return (
      <div className="App">
         <Form getUser={this.getUser} />
         <User
           name={this.state.name}
           location={this.state.location}
           followers={this.state.followers}
           avatar={this.state.avatar}
           />
      </div>
    );
  }
}

export default App;
