import './App.css';
import React from 'react';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Carousel from './Components/Carousel';
import ImageCard from './Components/ImageCard';
import HeadingText from './Components/HeadingText';

function App() {
  return (
    <div>
      <Header />

      <HeadingText heading="Featured" /> 

      <section className="container-fluid  ">
        
        <div className="row d-flex justify-content-center">

        
        <Cards  imageLink="/Images/Cards/Card1.jpg"
                cardHeading="Tekken 7 has reached another milestone"
                shortDescription="Tekken 7 has reached another milestone with over 7 MILLION sales worldwide!
                Thank You to all our fans for their continued support, now get ready for the next battle!"
             
        />

        <Cards  imageLink="/Images/Cards/Card2.jpg"
                cardHeading="MotoGP21 is now available."
                shortDescription="The time has come! Feel the thrills of the most celebrate bikes, the
                the emotions of the greatest champions, and face challenges like never before!"
        />

        </div>

      </section>

    </div>
  );
}
export default App;
