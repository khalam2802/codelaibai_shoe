import React, { Component } from "react";

export default class EventHandling extends Component {
  handleSayHello = () => {
    console.log("Hello User");
  };
  handleSayHelloWithName = (username) =>{
    console.log(`hello ${username}`);

  }
  render() {
    return (
      <div>
        <h2>EventHandling</h2>
        <button onClick={this.handleSayHello} className="btn-success">
          SayHello
        </button>
        <br />
        {/* dùng arrow function đối với hàm có tham số */}
        <button onClick={()=>{
            this.handleSayHelloWithName("alice")
        }} className="btn-warning">say hello with name</button>
      </div>
    );
  }
}
