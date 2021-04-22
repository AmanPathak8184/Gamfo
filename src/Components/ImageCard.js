import './ImageCard.css'
import React, { Component } from 'react';

class ImageCard extends Component {
    render() {
        return (

            <div class="" id="ImageCardDiv">
            <img src={this.props.ImageLink} class="img-fluid " alt=""/>
            <p id="ImageCardCaption">{this.props.ImageCaption}</p>
          </div>
        ); 
    }
}
export default ImageCard;