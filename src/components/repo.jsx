import React from 'react';

class Repo extends React.Component {
  render() {
    return (<div className="card">
      {
        this.props.repoInfo.map((repo, key) => (<ul>
        <div className="card">
        <div className="row">
        <div className="col-md-7">
          <strong>{repo.name}</strong>: {repo.description}
        </div>

        <div className="col-md-3">
          <span className="badge badge-dark">forks: {repo.forks}</span>
          <span className="badge badge-success">stars: {repo.stargazers_count}</span>
          <span class="badge badge-primary">Watchers: {repo.watchers_count}</span>
          </div>

          <div className="col-md-2">
          <a href={repo.html_url}>
            <button className="btn btn-dark">
              Repo Page
            </button>
          </a>
          </div>

        </div>
        </div>
        </ul>))
      }
    </div>);
  }
};

export default Repo;
