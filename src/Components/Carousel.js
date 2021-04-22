import React, { Component } from 'react';

class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="Images/Carousel/1.jpg" class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src="Images/1.jpg" class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src="Images/Carousel/1.jpg" class="d-block w-100" alt="..."/>
              </div>
            </div>
          </div>
        );
    }
}
export default Carousel;