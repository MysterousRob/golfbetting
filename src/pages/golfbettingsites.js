import React from 'react';
import './../assets/css/app.css'
import Footer from '../components/footer';
import Header from './../components/Header';
import {useState} from 'react';
import StarRating from './../components/stars';
import williamHill from './../assets/photos/williamHill.png';

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
       <div className='parent-box'>
        <div className='img-box'>

        </div>
        <div className='info-box'>
          <div>
            <h1>
              box 1
            </h1>
          </div>
          <div>
            <h1>
              box 2
            </h1>
          </div>
          <div>
            <h1>
              box 3
            </h1>
          </div>
          <div>
            <h1>
              box 4
            </h1>
          </div>
        </div>

        <div className='claim-box'>
          <div>
            <h1>
              box 1
            </h1>
          </div>
          <div>
            <h1>
              box 2
            </h1>
          </div>
          <div>
            <h1>
              box 3
            </h1>
          </div>
          <div>
            <h1>
              box 4
            </h1>
          </div>
        </div>
       </div>
      </div>
    <Footer />
    </div>
  );
}


export default BoxComponent;

