import React, { Component } from 'react'

export default class DataBinding extends Component {
    // thuộc về class => đi kèm với "this"
    urlSrc="data:image/jpeg;base64,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"

    renderUserAge=()=>{
        return <h1>Age:27</h1>
    }
  render() {
    let username="linda"
    return (
      <div>
        <h2>DataBinding</h2>
        <h1 >Username: {username}</h1>
        <img src={this.urlSrc} alt="" />
        {this.renderUserAge()}
        
      </div>
    )
  }
}
