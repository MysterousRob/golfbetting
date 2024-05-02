import React from 'react';
import './../../assets/css/GBS.css';


export function Slider1({sliderData}) {
  return(
    <>
      <div className='slider-input1'>
        <input 
        onChange={console.log}
        type="range" 
        min={0} 
        max="10" 
        className="range range-primary" />
      </div>
      </>
  )
}
export function Slider2({ sliderData }) {

    return (
      <>
      <div className='slider-input1'>
        <input 
        type="range" 
        min={0} 
        max="300" 
        className="range range-primary" />
      </div>
      </>
    );
  }
