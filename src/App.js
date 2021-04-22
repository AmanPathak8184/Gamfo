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

      <HeadingText heading="Featured Prop" /> 

      <section className="container-fluid  ">
        
        <div className="row d-flex justify-content-center">

        <ImageCard ImageCaption="Get Triple Rewards on Casino Work in GTA Online"
                   ImageLink="/Images/ImageCard/Card1.jpg" />

        </div>

      </section>

    </div>
  );
}
export default App;
