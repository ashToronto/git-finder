import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <div className="App">
        <form onSubmit={ this.props.getRepo }>
          <input type='text' placeholder='Enter a username' name='userName' />
          <button>Profile</button>
        </form>
      </div>
    );
  }
};

export default Button;

// <form onKeyUp={ this.props.getUser }>
