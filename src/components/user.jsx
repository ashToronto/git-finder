import React from 'react';

class User extends React.Component {
  render() {
    return (<div className="card border-primary mb-3">
      <div className="card-header">{this.props.name}</div>
      <div className="card-body">
      <div className="row">
      <div className="col-md-3">
      <img className="img-thumbnail avatar" src={this.props.avatar} alt=''/>
      </div>
      <div className="col-md-9">
      <span className="badge badge-dark">followers {this.props.followers}</span>
      <span className="badge badge-primary">following {this.props.following}</span>
      <span className="badge badge-success">repos {this.props.repos}</span>
      <span className="badge badge-info">gists {this.props.gists}</span>
      <br></br>
        <ul className="list-group-item">
        <p>{this.props.location}</p>
        <p>member since {this.props.memberSince}</p>
        </ul>
      </div>
    </div>
    </div>

    </div>);
  }
};

export default User;
