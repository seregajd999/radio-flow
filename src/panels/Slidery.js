import React, { Component } from "react";
import Carousel from "react-material-ui-carousel";
import { Slide } from "@material-ui/core";

export default class Slidery extends Component {

  render() {
    return (

      <Carousel
        className="Example"
        autoPlay={true}
        timer={500}
        animation={Slide}
        indicators={true}
        timeout={2000}
        
      >
        <div class="slider_1">
           <h2>Текст</h2>
        </div>
        <div class="slider_1">
           <h2>Текст</h2>
        </div>
        <div class="slider_1">
           <h2>Текст</h2>
        </div>

      </Carousel>

    );
  }
}
