import './App.css';
import React from 'react';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Carousel from './Components/Carousel';
function App() {
  return (
    <div>
      <Header />

     
      <Carousel />
      <section className="container-fluid  ">
        
        <div className="row d-flex justify-content-center">

          {/* This Is Card 1 */}
          <Cards />

            {/* This Is Card 1 */}
            <Cards />

          {/* This Is Card 1 */}
          <Cards />

        </div>

      </section>

    </div>
  );
}
export default App;
