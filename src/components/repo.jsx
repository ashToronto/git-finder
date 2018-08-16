import React from 'react';

class Repo extends React.Component {
  render() {
    return (
      <div className="App">
        <p>{this.props.repoDescription}</p>
      </div>
    );
  }
};

export default Repo;

// <form onKeyUp={ this.props.getUser }>
