import './Cards.css';
import React, { Component } from 'react';

class Cards extends Component {
    render() {
        return ( 

          
            <div className="row  card shadow" id="Cards">
                <img src="/Images/ImageCard/Card3.jpg" className="card-img-top " alt="..."  id="CardsImage"/>
                <div className="card-body ">
                    <h3 className="card-title">Tekken 7 has reached another milestone</h3>
                    <p className="text-muted ">Tekken 7 has reached another milestone with over 7 MILLION sales worldwide!
                      Thank You to all our fans for their continued support, now get ready for the next battle!</p>
                      <div className="container" >
                          <div className="row justify-content-end">
                      <button type="button" className="btn btn-outline-success" id="CardButton">Read More</button>
                      </div>
                      </div>
                </div>
            </div>

        );
    }
}

export default Cards; 