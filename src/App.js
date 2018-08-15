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
        repos: '',
        gists: '',
        avatar: ''
    }
  }

  getUser = (e) => {
    e.preventDefault();
    const name = e.target.value
    fetch(`https://api.github.com/users/${name}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
          name: data.name,
          location: data.location,
          followers: data.followers,
          repos: data.public_repos,
          gists: data.public_gists,
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
           repos={this.state.repos}
           gists={this.state.gists}
           avatar={this.state.avatar}
           />
      </div>
    );
  }
}

export default App;
