import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Repo extends React.Component {
  render() {
    return (<BrowserRouter>
      <div className="App">
        {
          this.props.repoInfo.map((repo, key) => (<ul>
            <p>repository: {repo.name}</p>
            <p>repo description: {repo.description}</p>
            <p>forks: {repo.forks}</p>

            <a href={repo.html_url}>
              <button>
                {repo.html_url}
              </button>
            </a>

          </ul>))
        };
      </div>
    </BrowserRouter>);
  }
};

export default Repo;
