import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div className="App">
        <form onSubmit={ this.props.getUser }>
          <input type='text' placeholder='Enter a username' name='name' />
          <button>Search</button>
        </form>
      </div>
    );
  }
};

export default Form;

// <form onKeyUp={ this.props.getUser }>
