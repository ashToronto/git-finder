import React from 'react';

class Repo extends React.Component {
  render() {
    return (
      <div className="App">
        <p>{this.props.repoDescription}</p>
        {this.props.repoInfo.map((repo, key) => (
          <ul>
            <p>repo description: {repo.description}</p>
          </ul>
        ))};
      </div>
    );
  }
};

export default Repo;
