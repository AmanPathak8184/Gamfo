import './TopWeekSection.css'
import React, { Component } from 'react';

class TopWeekSection extends Component {
    render() {
        return (
            <div className="container-fluid " id="TopGames">
                <div className="row justify-content-center">
                    <div className="HeadTopGames text-muted ">Top Games This Week</div>

                    <div className="container-fluid  Contents" id="">
                        <div className="row justify-content-between Test Block ">
                                 <div className=" col-3  ImageBox">
                                <img src="/Images/Cards/Card1.jpg" className=" ImageBoxImage" alt="..."  />
                                </div>
                                <div className="col-7 Test">
                                    <div className="row Test">
                                        Heading
                                    </div>
                                </div>
                                <div className="col-2 Test">
                                    Hello
                                </div>
                        </div>
                    </div>



                </div>
            </div>
        )
    }
}

export default TopWeekSection;