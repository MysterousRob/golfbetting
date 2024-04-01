import React, { useState } from 'react';
import './css/live-odds.css';
import '../Liveoods/api/live-odds-data';
import Slider2 from './slider components/slider2';
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";



function MultiVariableSlider() {
    const [sliderData, setSliderData] = useState({  });
    const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
    return (
      <div className='slider'>
      <div tabIndex={0} className="dropdown dropdown-bottom">
        <div role="button" className="btn m-1" onClick={toggleDropdown}>
          <p>Event Form</p>
          <Slider2 sliderData={sliderData}/>
          {dropdownOpen ? <FaArrowCircleUp onClick={toggleDropdown} /> : <FaArrowCircleDown onClick={toggleDropdown} />}
        </div>
        <ul className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 ${dropdownOpen ? 'show' : ''}`}>
          <li>
            Item 1
          </li>
        </ul>
      </div>
    </div>
    );
  }
  
export default MultiVariableSlider;