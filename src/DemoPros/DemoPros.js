import React, { Component } from "react";
import UserInfo from "./UserInfo";

export default class DemoPros extends Component {
  state = {
    username: "alice",
  };
  // state ở đâu thì setState tại đó
  handleChangeName= () => {
    // toogle
    let name = this.state.username == "alice" ? "bob" :"alice"
    this.setState({username: name})
    }
  render() {
    return (
      <div>
        <h2>DemoPros</h2>
         <h1><UserInfo name={this.state.username} handleClick={this.handleChangeName}></UserInfo></h1>

      </div>
    );
  }
}
