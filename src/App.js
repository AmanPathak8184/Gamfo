import './App.css';
import React from 'react';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import ImageCard from './Components/ImageCard';
import HeadingText from './Components/HeadingText';
import CardSection from './Components/CardsSection';
import TopWeekSection from './Components/TopWeekSection';

function App() {

  return (
    <div>
      <Header />

      <HeadingText heading="Featured-29" /> 

      <CardSection />

      <TopWeekSection />
    

    </div>
  );
}
export default App;
