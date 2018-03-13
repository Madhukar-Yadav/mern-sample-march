import React, { Component } from 'react';
import './customers.css';

class users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({users}, () => console.log('users fetched...', users)));
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        <ul>
        {this.state.users.map(users => 
          <li key={users.id}>{users.username} -> {users.password}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default users;
