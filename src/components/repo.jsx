import React from 'react';

class Repo extends React.Component {
  render() {
    return (<div className="card">
      {
        this.props.repoInfo.map((repo, key) => (<ul>
          <p>repository: {repo.name}</p>
          <p>repo description: {repo.description}</p>
          <p>forks: {repo.forks}</p>
          <p>stars: {repo.stargazers_count}</p>

          <a href={repo.html_url}>
            <button>
              Repo Page
            </button>
          </a>

        </ul>))
      }
    </div>);
  }
};

export default Repo;
