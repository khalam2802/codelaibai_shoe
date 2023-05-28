import React, { Component } from "react";

export default class ItemShoe extends Component {
  render() {
    let {data,handleViewDetail,handleAddToCart}=this.props
    let { image, name, price } = data;
    return (
      <div className="col-6 py-4">
        <div className="card text-left h-100 border-danger">
          <img className="card-img-top" src={image} alt />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{price}</p>
          </div>
          <button onClick={() => { 
            handleViewDetail(data)
           }}
           className="btn btn-primary">
        
            Xem chi tiết <i class="fa fa-search"></i>
          </button>
          <button onClick={() => { 
            handleAddToCart(data)
           }} className="btn btn-danger">Thêm</button>
        </div>
      </div>
    );
  }
}
