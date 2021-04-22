import './Carousel.css'
import React, { Component } from 'react';

class Carousel extends Component {
  render() {
    return (
      <div id="Carousel1">
        <div id="carouselExampleSlidesOnly" class="carousel slide " data-bs-ride="carousel" >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="5000">
              <img src="Images/Carousel/1.jpg" class="d-block w-100 ImageRound" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <img src="Images/Carousel/2.jpg" class="d-block w-100 ImageRound" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <img src="Images/Carousel/3.jpg" class="d-block w-100 ImageRound" alt="..." />
            </div>
          </div>
        </div>
      </div>


    );
  }
}
export default Carousel;