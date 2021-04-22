import './HeadingText.css';
import React, {Component} from 'react';

class HeadingText extends Component{
    render(){
        return(

            <section className="Featured"> 
         <span className="mt-5 ml-3" id="HeadingText">{this.props.heading}</span>
         <p className="text-muted ml-3">Find all the latest news here</p>
      </section>
        );
    }
}

export default HeadingText;