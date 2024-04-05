import React, { useState } from 'react';
import './../assets/css/GBS.css';
import './../state/footerData';
import Slider2 from './../components/slider2';
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
    <div>
      <div className='slider'>
        {/* event form */}
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
            <li className='list'>
              Event Average
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
              Event top 10
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
              Event Wins
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
              Last Season
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
          </ul>
        </div>
        {/* current form */}
        <div tabIndex={0} className="dropdown dropdown-bottom">
          <div role="button" className="btn m-1" onClick={toggleDropdown}>
            <p>Current Form</p>
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
            <li className='list'>
              OWGR
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
              Last Tournament
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
            Last but 1 Tournament
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
            Last but 3 Tournaments
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
            Last but 4 Tournaments
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
          </ul>
        </div>
        {/* scoring stats */}
        <div tabIndex={0} className="dropdown dropdown-bottom">
          <div role="button" className="btn m-1" onClick={toggleDropdown}>
            <p>Scoring Stats</p>
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
            <li className='list'>
              Hole in One Average
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
              Birdie Average
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
              Bogey Average
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
              Par 3 Performance
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
            Par 4 Performance
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
            Par 5 Performance
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
          </ul>
        </div>
        {/* event spacific */}
        <div tabIndex={0} className="dropdown dropdown-bottom">
          <div role="button" className="btn m-1" onClick={toggleDropdown}>
            <p>Event Spacific</p>
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
            <li className='list'>
              Par 70
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
              Short Course
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
              Bermuda Positive
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
              Soft Ground 
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
              Fazio Design
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
              Costal Course
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
          </ul>
        </div>
        {/* Strokes gained */}
        <div tabIndex={0} className="dropdown dropdown-bottom">
          <div role="button" className="btn m-1" onClick={toggleDropdown}>
            <p>Strokes Gained</p>
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
            <li className='list'>
              SG off the Tee
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
              SG Approach
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
              SG Tee to Green
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
              SG Arround the Green
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
              SG Putting
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
          </ul>
        </div>
        {/* skill stats */}
        <div tabIndex={0} className="dropdown dropdown-bottom">
          <div role="button" className="btn m-1" onClick={toggleDropdown}>
            <p>Skill Stats</p>
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
            <li className='list'>
              Driving Distance
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
              Prosimity to the Hole
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
              Going for Green
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
              Driving Distance
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
              Gir
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
              Scrambeling
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
              Sand Saves
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
              Putting Average
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
            <li className='list'>
              Putts per Round
              <Slider2
              value={sliderValue}
              onChange={handleSliderChange}
            />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
  
export default MultiVariableSlider;