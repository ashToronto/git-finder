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
        following: '',
        memberSince: '',
        repos: '',
        gists: '',
        avatar: '',
        profile: '',
        repoInfo: [],
        isHidden: false
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
          following: data.following,
          memberSince: data.created_at,
          repos: data.public_repos,
          gists: data.public_gists,
          avatar: data.avatar_url,
          profile: data.html_url,
          isHidden: true
    })
    console.log(data)
    return fetch(`https://api.github.com/users/${name}/repos`)
    .then(response => response.json())
    .then(data2 => {
      this.setState({
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
           {this.state.isHidden ?
         <User
           name={this.state.name}
           location={this.state.location}
           followers={this.state.followers}
           following={this.state.following}
           memberSince={this.state.memberSince}
           repos={this.state.repos}
           gists={this.state.gists}
           avatar={this.state.avatar}
           profile={this.state.profile}
           />
         : null}
         </div>
         <div>
           <Repo
             repoInfo={this.state.repoInfo}
             />
         </div>
      </div>
    )
  }
}

export default App;
