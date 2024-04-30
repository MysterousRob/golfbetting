import React, { useState } from 'react';
import './../../assets/css/GBS.css';
import './../../state/footerData';
import { Slider1, Slider2 } from './Differentsliders'
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
  const newDropdownPositions = dropdownPositions.map((position, i) => {
    if (i >= index) {
      return position + (prevState[index] ? 0 : 1) * (prevState[index] ? -50 : 50);
    }
    return position;
  });
  setDropdownPositions(newDropdownPositions);
   return (
    <div>
     <div className='slider'>
     {/* event form */}
        <div tabIndex={0} className="dropdown">
          <div role="button" className="btn" onClick={() => toggleDropdown(0)}>
              <p className='color'>Event Form</p>
              <Slider1
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
                  <p className='color'>Event Average
                    <Slider1
                        className="slider2"
                        value={sliderValue}
                        onChange={handleSliderChange}
                    />
                  </p>
              </li>
              <li className='slider-list'>
                  <p className='color'>Event top 10
                    <Slider1
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
                  </p>
              </li>
              <li className='slider-list'>
                  <p className='color'>Event Wins
                    <Slider1
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
                  </p>
              </li>
              <li className='slider-list'>
                  <p className='color'>Last Season
                    <Slider1
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
                  </p>
              </li>
            </ul>
        </div>
     {/* Current form */}
        <div tabIndex={1} className="dropdown">
          <div role="button" className="btn" onClick={() => toggleDropdown(1)}>
              <p className='color'>Current Form</p>
              <Slider1
                  value={sliderValue}
                  onChange={handleSliderChange}
              />
              {dropdownOpen[1] ? (
                  <FaArrowCircleUp onClick={() => toggleDropdown(1)} />
              ) : (
                  <FaArrowCircleDown onClick={() => toggleDropdown(1)} />
              )}
          </div>
          <ul className={`dropdown-content ${dropdownOpen[1] ? 'show' : ''}`}>
              <li className='slider-list'>
                  <p className='color'>OWGR</p>
                  <Slider1
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                  />
              </li>
              <li className='slider-list'>
                  <p className='color'>Last Tournament</p>
                    <Slider1
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
              </li>
              <li className='slider-list'>
                  <p className='color'>Last but 1 Tournament</p>
                    <Slider1
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
              </li>
              <li className='slider-list'>
                  <p className='color'>Last but 3 Tournament</p>
                    <Slider1
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
              </li>
              <li className='slider-list'>
                  <p className='color'>Last but 4 Tournament</p>
                    <Slider1
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
              </li>
            </ul>
        </div>
     {/* Scoring stats */}
        <div tabIndex={2} className="dropdown">
          <div role="button" className="btn" onClick={() => toggleDropdown(2)}>
              <p className='color'>Scoring Stats</p>
              <Slider1
                  value={sliderValue}
                  onChange={handleSliderChange}
              />
              {dropdownOpen[2] ? (
                  <FaArrowCircleUp onClick={() => toggleDropdown(2)} />
              ) : (
                  <FaArrowCircleDown onClick={() => toggleDropdown(2)} />
              )}
          </div>
          <ul className={`dropdown-content ${dropdownOpen[2] ? 'show' : ''}`}>
              <li className='slider-list'>
                  <p className='color'>Hole in One Average</p>
                  <Slider1
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                  />
              </li>
              <li className='slider-list'>
                  <p className='color'>Birdie Average</p>
                    <Slider1
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
              </li>
              <li className='slider-list'>
                  <p className='color'>Eagle Average</p>
                    <Slider1
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
              </li>
              <li className='slider-list'>
                  <p className='color'>Bogey Average</p>
                    <Slider1
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
              </li>
              <li className='slider-list'>
                  <p className='color'>Par 3 Performance</p>
                    <Slider1
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
              </li>
              <li className='slider-list'>
                  <p className='color'>Par 4 Performance</p>
                    <Slider1
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
              </li>
              <li className='slider-list'>
                  <p className='color'>Par 5 Performance</p>
                    <Slider1
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
              </li>
            </ul>
        </div>
     {/* Event Spacific */}
        <div tabIndex={3} className="dropdown">
          <div role="button" className="btn" onClick={() => toggleDropdown(3)}>
              <p className='color'>Event Spacific</p>
              <Slider1
                  value={sliderValue}
                  onChange={handleSliderChange}
              />
              {dropdownOpen[3] ? (
                  <FaArrowCircleUp onClick={() => toggleDropdown(3)} />
              ) : (
                  <FaArrowCircleDown onClick={() => toggleDropdown(3)} />
              )}
          </div>
          <ul className={`dropdown-content ${dropdownOpen[3] ? 'show' : ''}`}>
              <li className='slider-list'>
                  <p className='color'>Par 70</p>
                  <Slider1
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                  />
              </li>
              <li className='slider-list'>
                  <p className='color'>Short Course</p>
                    <Slider1
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
              </li>
              <li className='slider-list'>
                  <p className='color'>Bermuda Positive</p>
                    <Slider1
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
              </li>
              <li className='slider-list'>
                  <p className='color'>Soft Ground</p>
                    <Slider1
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
              </li>
              <li className='slider-list'>
                  <p className='color'>Fazio Design</p>
                    <Slider1
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
              </li>
              <li className='slider-list'>
                  <p className='color'>Costal Course</p>
                    <Slider1
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
              </li>
            </ul>
        </div>
     {/* Strokes Gained */}
        <div tabIndex={4} className="dropdown">
          <div role="button" className="btn" onClick={() => toggleDropdown(4)}>
              <p className='color'>Strokes Gained</p>
              <Slider1
                  value={sliderValue}
                  onChange={handleSliderChange}
              />
              {dropdownOpen[4] ? (
                  <FaArrowCircleUp onClick={() => toggleDropdown(4)} />
              ) : (
                  <FaArrowCircleDown onClick={() => toggleDropdown(4)} />
              )}
          </div>
          <ul className={`dropdown-content ${dropdownOpen[4] ? 'show' : ''}`}>
              <li className='slider-list'>
                  <p className='color'>SG off the Tee</p>
                  <Slider1
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                  />
              </li>
              <li className='slider-list'>
                  <p className='color'>SG Approach</p>
                    <Slider1
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
              </li>
              <li className='slider-list'>
                  <p className='color'>SG Tee to Green</p>
                    <Slider1
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
              </li>
              <li className='slider-list'>
                  <p className='color'>SG Arround the Green</p>
                    <Slider1
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
              </li>
              <li className='slider-list'>
                  <p className='color'>SG Putting</p>
                    <Slider1
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
              </li>
            </ul>
        </div>
     {/* Skill Stats */}
        <div tabIndex={5} className="dropdown">
          <div role="button" className="btn" onClick={() => toggleDropdown(5)}>
              <p className='color'>Skill Stats</p>
              <Slider2
                  value={sliderValue}
                  onChange={handleSliderChange}
              />
              {dropdownOpen[5] ? (
                  <FaArrowCircleUp onClick={() => toggleDropdown(5)} />
              ) : (
                  <FaArrowCircleDown onClick={() => toggleDropdown(5)} />
              )}
          </div>
          <ul className={`dropdown-content ${dropdownOpen[5] ? 'show' : ''}`}>
              <li className='slider-list'>
                  <p className='color'>Driving Distance</p>
                  <Slider2
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                  />
              </li>
              <li className='slider-list'>
                  <p className='color'>Proximity to Hole</p>
                    <Slider2
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
              </li>
              <li className='slider-list'>
                  <p className='color'>Going for Green</p>
                    <Slider2
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
              </li>
              <li className='slider-list'>
                  <p className='color'>Driving Accuracy</p>
                    <Slider2
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
              </li>
              <li className='slider-list'>
                  <p className='color'>GIR</p>
                    <Slider2
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
              </li>
              <li className='slider-list'>
                  <p className='color'>Scrambeling</p>
                    <Slider2
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
              </li>
              <li className='slider-list'>
                  <p className='color'>Sand Saves</p>
                    <Slider2
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
              </li>
              <li className='slider-list'>
                  <p className='color'>Putting Average</p>
                    <Slider2
                      className="slider2"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
              </li>
              <li className='slider-list'>
                  <p className='color'>Puts Per Round</p>
                    <Slider2
                      className="slider2"
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