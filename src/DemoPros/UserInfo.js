import React, { Component } from 'react'

export default class UserInfo extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>UserInfo</h2>
        <p>Username:{this.props.name}</p>
        <button onClick={this.props.handleClick} className="btn btn-success">Change name to Bob</button>
        
      </div>
    )
  }
}
