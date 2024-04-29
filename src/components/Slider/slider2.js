import React from 'react';
import './../assets/css/GBS.css';


function Slider2({ sliderData }) {

    return (
      <div className='slider-input'>
        <input 
        type="range" 
        min={0} 
        max="100" 
        className="range range-primary" />
      </div>
    );
  }
export default Slider2;