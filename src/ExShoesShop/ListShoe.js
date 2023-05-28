import React, { Component } from "react";
import ItemShoe from "./ItemShoe";

export default class ListShoe extends Component {
  renderListShoe = () => {
    return this.props.list.map((item, index) => {
      return <ItemShoe
      handleViewDetail={this.props.handleViewDetail} 
      key={index} 
      data={item}
      handleAddToCart={this.props.handleAddToCart}
      ></ItemShoe>;
    });
  };
  render() {
    return <div className="row col-6">{this.renderListShoe()}</div>;
  }
}
