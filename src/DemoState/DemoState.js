import React, { Component } from "react";

export default class DemoState extends Component {
  state = {
    soLuong: 1,
  };
  handleTang = () => {
    console.log("yes tăng");
    this.setState({
      soLuong: this.state.soLuong + 1,
    });
  };
  handleGiam = () => {
    console.log("yes giảm");
    this.setState({
      soLuong: this.state.soLuong - 1,
    });
  };

  render() {
    return (
      <div>
        <h2
        style={{
            color:"red",backgroundColor:"blue",
        }}>DemoState</h2>
        <button
          onClick={() => {
            this.handleGiam();
          }}
          className="btn-warning"
        >
          -
        </button>
        <span className="p-2">{this.state.soLuong}</span>
        <button
          onClick={() => {
            this.handleTang();
          }}
          className="btn-success"
        >
          +
        </button>
      </div>
    );
  }
}
