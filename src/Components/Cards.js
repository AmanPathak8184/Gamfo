import './Cards.css';
import React, { Component } from 'react';

class Cards extends Component {
    render() {
        return (

            <div className="card" id="Cards">
                <img src="/Images/1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">Tekken 7 has reached another milestone</h3>
                    <p className="text-muted ">Tekken 7 has reached another milestone with over 7 MILLION sales worldwide!
                      Thank You to all our fans for their continued support, now get ready for the next battle!</p>
                </div>
            </div>
        );
    }
}

export default Cards;