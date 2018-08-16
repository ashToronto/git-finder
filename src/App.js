import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form'
import User from './components/user'
import Button from './components/button'
import Repo from './components/repo'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        name: '',
        location: '',
        followers: '',
        repos: '',
        gists: '',
        avatar: '',
        projects: '',
        repoDescription: '',
        repoWatchers: '',
        repoForks: ''
    }
  }

  getUser = (e) => {
    e.preventDefault();
    // const name = e.target.value
    const name = e.target.elements.name.value
    fetch(`https://api.github.com/users/${name}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
          name: data.name,
          location: data.location,
          followers: data.followers,
          repos: data.public_repos,
          gists: data.public_gists,
          avatar: data.avatar_url,
          projects: data.repos_url,
    });
      console.log(data)
  });
}

getRepo = (e) => {
  e.preventDefault();
  // const name = e.target.value
  const name = e.target.elements.userName.value
  fetch(`https://api.github.com/users/${name}/repos`)
  .then(res => res.json())
  .then(data => {
    this.setState({
      repoDescription: data[0].description,
  });
    console.log(data)
  });
}

  render() {
    return (
      <div className="App">
         <Form getUser={this.getUser} />
         <div>
         <User
           name={this.state.name}
           location={this.state.location}
           followers={this.state.followers}
           repos={this.state.repos}
           gists={this.state.gists}
           avatar={this.state.avatar}
           projects={this.state.projects}
           />
         </div>
         <div>
           <Button getRepo={this.getRepo}/>
           <Repo
             repoDescription={this.state.repoDescription}
             />
         </div>
      </div>
    );
  }
}

export default App;
