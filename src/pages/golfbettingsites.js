import React from 'react';
import './css/sites.css'
import Footer from '../different-pages/forhomepg/footer';
import Header from '../different-pages/app-Header';
import {useState} from 'react';
import StarRating from './stars';
import williamHill from '../../src/photos/williamHill.png';

// follow same styling as cricket betting with the coloring being the same as the main sites
const BoxComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  
//create a call back function 
  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='sites'>
      <Header />
      <div className='header'>
        <h1>
          Different Golf Betting Websites
        </h1>
        <div className="box">
          
        <div className='image_container'>
          <img src={williamHill} alt="William Hill" />
        </div>

        <div className='right-side'>
          <div className="text-section">
            {/* 10 pieces of text
            {[...Array(10)].map((_, index) => (
              <p key={index}>Text {index + 1}</p>
            ))} */}
          </div>
          <div className="star_rating">
            <StarRating />
          </div>
          <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
            {/* map goes here */}
          </div>
          
          <div className='button'>
            <button onClick={toggleMenu}>
              Toggle Menu
            </button>
          </div>
        </div>
        
            </div>
      </div>
    <Footer />
    </div>
  );
}


export default BoxComponent;

