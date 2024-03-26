import React from 'react';
import './css/sites.css'
import Footer from '../different-pages/forhomepg/footer';
import Header from '../different-pages/app-Header';
import {useState} from 'react';
import StarRating from './stars';

// follow same styling as cricket betting with the coloring being the same as the main sites
const BoxComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  
//create a call back function 
  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Header />
      <div className="box">
      <img src="image_url_here" alt="Image" />

    
      <div className="text-section">
        {/* 10 pieces of text
        {[...Array(10)].map((_, index) => (
          <p key={index}>Text {index + 1}</p>
        ))} */}
      </div>

      <div className="star-rating">
        <StarRating />
      </div>

      {/* Expandable Menu
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <p>Your expandable menu content goes here *</p>
      </div>*/}

      {/* Button to toggle menu */}
      <button onClick={toggleMenu}>Toggle Menu</button>
      <Footer />
    </div> 
    </div>
  );
}


export default BoxComponent;

