import React from 'react';

class User extends React.Component {
  render() {
    return (<div className="App">
      <p>{this.props.name}</p>
      <p>{this.props.location}</p>
      <p>followers {this.props.followers}</p>
      <p>following {this.props.following}</p>
      <p>member since {this.props.memberSince}</p>
      <p>repos {this.props.repos}</p>
      <p>gists {this.props.gists}</p>
      <img src={this.props.avatar} alt=''/>
    </div>);
  }
};

export default User;
