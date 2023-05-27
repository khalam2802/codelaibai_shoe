import React, { Component } from "react";
import ItemShoe from "./ItemShoe";

export default class ListShoe extends Component {
  renderListShoe = () => {
    return this.props.list.map((item, index) => {
      return <ItemShoe
      handleViewDetail={this.props.handleViewDetail} 
      key={index} 
      data={item}
      handleBuyShoe={this.props.handleBuy}
      ></ItemShoe>;
    });
  };
  render() {
    return <div className="row">{this.renderListShoe()}</div>;
  }
}
