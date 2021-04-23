import './Cards.css';
import React, { Component } from 'react';
import ReactReadMoreReadLess from "react-read-more-read-less";

class Cards extends Component {

    render() {
        return (


            <div className="row  card shadow CardHolder" id="Cards">

                <img src={this.props.imageLink} className="card-img-top " alt="..." id="CardsImage" />
                
                <div className="card-body ">
                    <span className="card-title">{this.props.cardHeading}</span>
                    <p className="text-muted ">{this.props.shortDescription}</p>

                    {/* Long Description */}
                    {/* <div class="collapse text-muted" id="LongDescription">
                            {this.props.longDescription}
                    </div> */}

                
                    <div className="container" >
                        <div className="row justify-content-end">
                            <button type="button" className="btn  CardButton"
                                data-bs-toggle="collapse" data-bs-target="#LongDescription" 
                                aria-expanded="false" aria-controls="collapseExample">
                                Read More
                             </button>
                        </div>
                    </div>


                </div>

            </div>


        );
    }
}

export default Cards;