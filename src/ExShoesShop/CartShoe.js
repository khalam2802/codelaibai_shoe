import React, { Component } from "react";

export default class CartShoe extends Component {
  render() {
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>

                  <td>
                    <img style={{width:70}} src={item.image} alt="" />
                  </td>


                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
