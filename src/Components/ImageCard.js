import './ImageCard.css'
import React, { Component } from 'react';

class ImageCard extends Component {
    render() {
        return (

            <div class="view overlay">
            <img src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg" class="img-fluid " alt="smaple image"/>
            <div class="mask flex-center rgba-red-light">
              <p class="white-text">Light overlay</p>
            </div>
          </div>
        );
    }
}
export default ImageCard;