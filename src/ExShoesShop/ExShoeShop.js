import React, { Component } from 'react'
import { shoeArr } from './data'
import ListShoe from './ListShoe'
import DetailShoe from './DetailShoe'
import CartShoe from './CartShoe'

export default class ExShoeShop extends Component {
  state={
    shoeArr:shoeArr,
    detailShoe:shoeArr[0],
    cart:[],
  }
  handleViewDetail=(shoe)=>{
    this.setState({detailShoe:shoe})
  }
  handleAddToCart=(shoe)=>{
    let cloneCart=[...this.state.cart]
    cloneCart.push(shoe)
    this.setState({detailShoe:cloneCart})
  }
  render() {
    return (
      <div>
        <CartShoe cart={this.state.cart}></CartShoe>
        <ListShoe
        handleBuy={this.handleAddToCart}
        handleViewDetail={this.handleViewDetail} list={this.state.shoeArr}></ListShoe>
        <DetailShoe detail={this.state.detailShoe} ></DetailShoe>

      </div>
    )
  }
}
// 1:27:58
