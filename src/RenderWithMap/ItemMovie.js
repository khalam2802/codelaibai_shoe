import React, { Component } from 'react'

export default class ItemMovie extends Component {
  render() {
    let movie=this.props.data
    return (
      
        <div className='col-3'>
        <div className="card text-left">
            {/* {movie.maPhim} */}
            <img className="card-img-top" src={movie.hinhAnh} alt />
            <div className="card-body">
              <h4 className="card-title">{movie.tenPhim}</h4>
              <p className="card-text">{movie.moTa}</p>
            </div>
          </div>
        </div>
      
    )
  }
}
