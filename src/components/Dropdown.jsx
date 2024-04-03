import React from "react";
import "../../css/live-odds.css";


function eventForm() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [sliderValue, setSliderValue] = useState([0,100]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };



  
    return(
        <div className='slider'>
                <div tabIndex={0} className="dropdown dropdown-bottom">
                    <div role="button" className="btn m-1" onClick={toggleDropdown}>
                        <h4>Event Form</h4>
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
                    {dropdownOpen}
                    {/* <>
                    {dropdownOpen ? 
                    (<ul className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 ${dropdownOpen ? 'show' : ''}`}>
                            
                            <li>
                             Item 1
                             <Slider2
                                value={sliderValue} 
                                onChange={handleSliderChange} 
                            />
                            </li>
                    </ul>):(<div>  </div>)
                       }
                       </> */}
                </div>
            </div>
    )
}
export default eventForm;