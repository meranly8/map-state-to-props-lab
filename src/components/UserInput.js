import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserInput extends Component {

  state = {
    username: '',
    hometown: ''
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.dispatch({type: 'ADD_USER', user: this.state})
    this.setState({
      username: '',
      hometown: ''
    })
  }

  render() {
    return(
      <form onSubmit={this.handleOnSubmit}>
        <p>
          <input
            id="username"
            onChange={this.handleInputChange}
            placeholder="username"
            value={this.state.username}
          />
        </p>
        <p>
          <input
            id="hometown"
            onChange={this.handleInputChange}
            placeholder="hometown"
            value={this.state.hometown}
          />
        </p>
        <input type="submit" />
      </form>
    )
  }
}

export default connect()(UserInput);
