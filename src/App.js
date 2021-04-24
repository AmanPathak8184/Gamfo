import './App.css';
import React from 'react';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import ImageCard from './Components/ImageCard';
import HeadingText from './Components/HeadingText';
import CardSection from './Components/CardsSection';


function App() {

  return (
    <div>
      <Header />

      <HeadingText heading="Featured-28" /> 

      <CardSection />

    </div>
  );
}
export default App;
