import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  mapUsers = () => {
  let userArray = this.props.users.map((user)=> {
      return <li>{user.username}</li>
    })
    return userArray
  }

  render() {
    return (
      <div>
      <h1>Total Users: {this.props.userCount}</h1>
        <ul>
          {this.mapUsers()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users, userCount: state.users.length}
}

export default connect(mapStateToProps) (Users)
