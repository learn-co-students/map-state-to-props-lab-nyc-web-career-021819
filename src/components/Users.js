import React, { Component } from 'react';
import { connect } from 'react-redux'
import { v4 } from 'uuid'

class Users extends Component {

  renderUsers() {
    return this.props.users.map(user => <li key={ v4() }>{user.username} is from {user.hometown}</li>)
  }

  render() {
    console.log(this.props.users);
    return (
      <div>
        {this.props.userCount === 1 ? 'There is 1 user!' : `There are ${this.props.userCount} users!`}
        <br/>
        Users:
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
