import './HeadingText.css';
import React, {Component} from 'react';

class HeadingText extends Component{
    render(){
        return(

           
            <div className="container-fluid Featured"> 
                 <span className="mt-5 " id="HeadingText">{this.props.heading}</span>
                <p className="text-muted ml-3">Find all the latest news here</p>
            </div>
        );
    }
}

export default HeadingText;