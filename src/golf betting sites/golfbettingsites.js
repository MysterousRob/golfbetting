import React from 'react';
import './css/sites.css'
import Footer from './forhomepg/footer';
import Header from './app-Header';
import {useState} from 'react';
import StarRating from './stars';

// follow same styling as cricket betting with the coloring being the same as the main sites
const BoxComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Header />
      <div className="box">
      {/* Image */}
      <img src="image_url_here" alt="Image" />

      {/* Texts */}
      <div className="text-section">
        {/* 10 pieces of text */}
        {[...Array(10)].map((_, index) => (
          <p key={index}>Text {index + 1}</p>
        ))}
      </div>

      {/* Star Rating System */}
      <div className="star-rating">
        <StarRating />
      </div>

      {/* Expandable Menu */}
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        {/* Your expandable menu content goes here */}
      </div>

      {/* Button to toggle menu */}
      <button onClick={toggleMenu}>Toggle Menu</button>
      <Footer />
    </div> 
  );
}


export default BoxComponent;

