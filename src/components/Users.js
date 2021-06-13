import React, { Component } from 'react'
import { connect } from 'react-redux'

class Users extends Component {
  render() {
    const users = this.props.users.map(user => (
       <li key={user.username}>{user.username}</li>
    ))
  
    return (
      <div>
        <ul>
          {this.props.userCount} {this.props.userCount === 1 ? "User!" : "Users!"}
          <ul>
            {users}
          </ul>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {users: state.users, userCount: state.users.length}
}

export default connect(mapStateToProps)(Users)
