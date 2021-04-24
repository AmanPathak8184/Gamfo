import './CardSection.css'
import React, { Component } from 'react';
import CardData from '../JsonData/Cards.json';
import Cards from './Cards';

class CardSection extends Component {
    render() {
        return (
            <div className="container-fluid" id="CardSection">
                <div className="row justify-content-between">

                    {/* Dynamically Render Cards */}
                    {CardData.map((CardDetails, index) => {
                        return (
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                        <Cards
                             imageLink={CardDetails.imageLink}
                            cardHeading={CardDetails.cardHeader}
                            shortDescription={CardDetails.shortDescription}
                        />
                        </div>)
                    })}
                </div>
                </div>
        )
    }
}

export default CardSection;