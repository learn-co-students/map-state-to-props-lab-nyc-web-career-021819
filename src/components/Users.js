import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  renderUsers = () => {
    // debugger
    return this.props.users.map(user => {
      return <li> {user.username}</li>
    })
  }

  render() {
    // debugger
    console.log(this.props)
    return (
      <div>
        <ul>
          Users!
          {this.renderUsers()}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps)(Users)
