import React from 'react';

class User extends React.Component {
  render() {
    return (
      <div className="App">
        <p>{this.props.name}</p>
        <p>{this.props.location}</p>
        <p>{this.props.followers}</p>
        <p>{this.props.repos}</p>
        <p>{this.props.gists}</p>
        <img src={this.props.avatar} alt=''/>
        <p>{this.props.projects}</p>
        <p>{this.props.repoDesription}</p>
      </div>
    );
  }
};

export default User;
