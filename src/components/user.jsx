import React from 'react';

class User extends React.Component {
  render() {
    return (
      <div className="App">
        <h3>User details</h3>
        <p>{this.props.name}</p>
        <p>{this.props.location}</p>
        <p>{this.props.followers}</p>
      </div>
    );
  }
};

export default User;
