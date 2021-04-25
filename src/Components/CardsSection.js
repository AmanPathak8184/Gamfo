import './CardSection.css'
import React, { Component } from 'react';
import CardData from '../JsonData/Cards.json';
import Cards from './Cards';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Importing Css
import 'swiper/swiper-bundle.css';
import { Card } from 'reactstrap';



class CardSection extends Component {
    render() {

         const slides = [];

        return (
            <div className="container-fluid" id="CardSection">
                <div className="row justify-content-between">

                    {/* Dynamically Render Cards */}
                    {CardData.map((CardDetails, index) => {
                         
                            slides.push(
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                                    <Cards
                                        imageLink={CardDetails.imageLink}
                                        cardHeading={CardDetails.cardHeader}
                                        shortDescription={CardDetails.shortDescription}
                                    />
                                </div>)
                        
                    })}

                        {/* Swiper */}
                <Swiper
                      spaceBetween={50}
                      slidesPerView={1}
                    //   navigation
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log('slide change')}  
                >
                    <SwiperSlide>{slides[0]}</SwiperSlide>
                    <SwiperSlide>{slides[1]}</SwiperSlide>
                    <SwiperSlide>{slides[2]}</SwiperSlide>
                    <SwiperSlide>{slides[3]}</SwiperSlide>

                </Swiper>
                
                </div>
            
            </div>
        )
    }
}

export default CardSection;