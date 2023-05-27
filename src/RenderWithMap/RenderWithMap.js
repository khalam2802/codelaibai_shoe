import React, { Component } from "react";
import { movieArr } from "./data";
import DemoPros from "../DemoPros/DemoPros";
import ItemMovie from "./ItemMovie";

export default class RenderWithMap extends Component {
  renderMovieList = () => {
    return movieArr.map((movie,maPhim) => {
      return (
      
          <ItemMovie data={movie} key={movie.maPhim}></ItemMovie>
      );
    });
  };
  render() {
    return <div className="row">{this.renderMovieList()}
    {/* <DemoPros></DemoPros> */}
    </div>
  }
}
