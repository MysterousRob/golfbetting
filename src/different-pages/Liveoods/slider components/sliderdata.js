import React from "react";
import "../css/live-odds.css"


const sliderData = [
    {
        form: "Event Form",
        name2: [
            {
                name: "Event Average",
            },
            {
                name: "Event Top 10",
            },
            {
                name: "Event Wins",
            },
            {
                name: "Last Year Tournament",
            },
        ]
    },
    {
        form: "Current Form",
        name2: [
            {
                name: "OWGR",
            },
            {
                name: "Last Tournament",
            },
            {
                name: "Last but 1 Tournament",
            },
            {
                name: "Last but 3 Tournament",
            },
            {
                name: "Last but 4 Tournament",
            },
        ]
    },
    {
        form: "scoring stats",
        name2: [
            {
                name: "Hole in One Average",
            },
            {
                name: "Birdie Average",
            },
            {
                name: "Eagle Average",
            },
            {
                name: "Bogey Average",
            },
            {
                name: "Par 3 Performance",
            },
            {
                name: "Par 4 Performance",
            },
            {
                name: "Par 5 Performance",
            },
        ]
    },
    {
        form: "Event Spacific",
        name2: [
            {
                name: "Par 70",
            },
            {
                name: "Short Course",
            },
            {
                name: "Bermuda Postive",
            },
            {
                name: "Soft Ground",
            },
            {
                name: "Fazio Design",
            },
            {
                name: "Costal Course",
            },
        ]
    },
    {
        form: "Strokes Gained",
        name2: [
            {
                name: "SG off the Tee",
            },
            {
                name: "SG Approach",
            },
            {
                name: "SG Tee to Green",
            },
            {
                name: "SG arround the Green",
            },
            {
                name: "SG Putting",
            },
        ]
    },
    {
        form: "Skill Stats",
        name2: [
            {
                name: "Driving Distance",
            },
            {
                name: "Proximity to Hole",
            },
            {
                name: "Going for Green",
            },
            {
                name: "Driving Acuracy",
            },
            {
                name: "GIR",
            },
            {
                name: "Scrambling",
            },
            {
                name: "Sand Saves",
            },
            {
                name: "Putting Average",
            },
            {
                name: "Puts per Round",
            },
        ]
    },
   
]

export const fullSlider = () => {
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
                <div tabIndex={0} className="dropdown dropdown-bottom">
                    <div role="button" className="btn m-1" onClick={toggleDropdown}>
                        [sliderdata.form.name2.map((nav, i) => (
                            
                        ))]
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
                    <ul className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 ${dropdownOpen ? 'show' : ''}`}>
                        <li>
                          Item 1
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}