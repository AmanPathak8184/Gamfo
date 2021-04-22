import './Carousel.css'
import React, { Component } from 'react';

class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleSlidesOnly" class=" carousel slide" data-bs-ride="carousel " id="Carousel1">
            <div class="carousel-inner ">
              <div class="carousel-item active ">
                <img src="Images/Carousel/1.jpg" className="d-block w-100 ImageRound" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src="Images/1.jpg" className="d-block w-100 rounded" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src="Images/Carousel/1.jpg" className="d-block w-100 rounded" alt="..."/>
              </div>
            </div>
          </div>
        );
    }
}
export default Carousel;