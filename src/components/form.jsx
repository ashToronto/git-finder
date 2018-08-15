import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div className="App">
        <form onKeyUp={ this.props.getUser }>
          <input type='text' placeholder='Enter a username' name='name' />
          
        </form>
      </div>
    );
  }
};

export default Form;
