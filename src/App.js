import React, { Component } from 'react';
import './App.css';
import Form from './components/form'
import User from './components/user'
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
        repoInfo: [],
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
    })
    console.log(data)
    return fetch(`https://api.github.com/users/${name}/repos`)
    .then(response => response.json())
    .then(data2 => {
      this.setState({
        repoDescription: data2[0].description,
        repoInfo: data2
    });
      console.log(data2)
    });
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
           <Repo
             repoDescription={this.state.repoDescription}
             repoInfo={this.state.repoInfo}
             />
         </div>
      </div>
    );
  }
}

export default App;
