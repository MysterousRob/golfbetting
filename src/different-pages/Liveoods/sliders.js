import React, { useState } from 'react';
import './css/live-odds.css';
import '../data/footerData';
import Slider2 from './slider components/slider2';
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";



function MultiVariableSlider() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [sliderValue, setSliderValue] = useState([0,100]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };
   return (
    <div className='slider'>
      <div tabIndex={0} className="dropdown dropdown-bottom">
        <div role="button" className="btn m-1" onClick={toggleDropdown}>
          <p>Event Form</p>
          <Slider2
            value={sliderValue} 
            onChange={handleSliderChange} 
          />
          {dropdownOpen ? (
            <FaArrowCircleUp onClick={toggleDropdown} />
          ) : (
            <FaArrowCircleDown onClick={toggleDropdown} />
          )}
        </div>
        <ul className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52 ${dropdownOpen ? 'show' : ''}`}>
          <li>
            Item 1
          </li>
        </ul>
      </div>
    </div>
  );
}
  
export default MultiVariableSlider;