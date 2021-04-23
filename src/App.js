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
                Thank You to all our fans for their continued support, now get
                 ready for the next battle!"
                longDescription="
                 To help celebrate, the developer has once again added to its character artwork, which you can find at the top of this article. It now includes the most recent DLC fighters, Kunimitsu and Lidia.
                 "
        />

<Cards  imageLink="/Images/Cards/Card1.jpg"
                cardHeading="Tekken 7 has reached another milestone"
                shortDescription="Tekken 7 has reached another milestone with over 7 MILLION sales worldwide!
                Thank You to all our fans for their continued support, now get
                 ready for the next battle!"
                longDescription="
                 To help celebrate, the developer has once again added to its character artwork, which you can find at the top of this article. It now includes the most recent DLC fighters, Kunimitsu and Lidia.
                 "
        />

        </div>

      </section>

    </div>
  );
}
export default App;
