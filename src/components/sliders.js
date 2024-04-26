import React, { useState } from 'react';
import './../assets/css/GBS.css';
import './../state/footerData';
import Slider2 from './../components/slider2';
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import { sliderData } from './sliderdata';


function MultiVariableSlider() {
    const [dropdownOpen, setDropdownOpen] = useState([false, false]);
    const [sliderValue, setSliderValue] = useState([0,100]);

    const toggleDropdown = (index) => {
      setDropdownOpen(prevState => {
          console.log('Previous state:', prevState);
          const newState = [...prevState];
          newState[index] = !newState[index];
          console.log('New state:', newState);
          return newState;
      });
  };
  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };
  console.log('Dropdown open state:', dropdownOpen);
   return (
    <div>
     <div className='slider'>
                {/* event form */}
                <div tabIndex={0} className="dropdown">
                    <div role="button" className="btn" onClick={() => toggleDropdown(0)}>
                        <p className='color'>Event Form</p>
                        <Slider2
                            value={sliderValue}
                            onChange={handleSliderChange}
                        />
                        {dropdownOpen[0] ? (
                            <FaArrowCircleUp onClick={() => toggleDropdown(0)} />
                        ) : (
                            <FaArrowCircleDown onClick={() => toggleDropdown(0)} />
                        )}
                    </div>
                    <ul className={`dropdown-content ${dropdownOpen[0] ? 'show' : ''}`}>
                        <li className='slider-list'>
                            <p className='color'>Event Average</p>
                            <Slider2
                                className="slider2"
                                value={sliderValue}
                                onChange={handleSliderChange}
                            />
                        </li>
            <li className='slider-list'>
                <p className='color'>Event top 10
                  <Slider2
                    className="slider2"
                    value={sliderValue}
                    onChange={handleSliderChange}
                  />
                </p>
            </li>
            <li className='slider-list'>
                <p className='color'>Event Wins
                  <Slider2
                    className="slider2"
                    value={sliderValue}
                    onChange={handleSliderChange}
                  />
                </p>
            </li>
            <li className='slider-list'>
                <p className='color'>Last Season
                  <Slider2
                    className="slider2"
                    value={sliderValue}
                    onChange={handleSliderChange}
                  />
                </p>
            </li>
          </ul>
        </div>
        {/* curent form */}
        {/* <div tabIndex={0} className="dropdown dropdown-bottom">
                    <div role="button" className="btn m-1" onClick={() => toggleDropdown(1)}>
                        <p className='color'>Event Form</p>
                        <Slider2
                            value={sliderValue}
                            onChange={handleSliderChange}
                        />
                        {dropdownOpen[1] ? (
                            <FaArrowCircleUp onClick={() => toggleDropdown(1)} />
                        ) : (
                            <FaArrowCircleDown onClick={() => toggleDropdown(1)} />
                        )}
                    </div>
                    <ul className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52 ${dropdownOpen[1] ? 'show' : ''}`}>
          <li className='slider-list'>
                <p className='color'>Event Average
                  <Slider2
                    className="slider2"
                    value={sliderValue}
                    onChange={handleSliderChange}
                  />
                </p>
            </li>
            <li className='slider-list'>
                <p className='color'>Event top 10
                  <Slider2
                    className="slider2"
                    value={sliderValue}
                    onChange={handleSliderChange}
                  />
                </p>
            </li>
            <li className='slider-list'>
                <p className='color'>Event Wins
                  <Slider2
                    className="slider2"
                    value={sliderValue}
                    onChange={handleSliderChange}
                  />
                </p>
            </li>
            <li className='slider-list'>
                <p className='color'>Last Season
                  <Slider2
                    className="slider2"
                    value={sliderValue}
                    onChange={handleSliderChange}
                  />
                </p>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
  
export default MultiVariableSlider;