import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const MultiVariableSlider = ({ stats, onChange }) => {
  const [currentStats, setCurrentStats] = useState(stats);

  const handleSliderChange = (value, statIndex) => {
    const updatedStats = [...currentStats];
    updatedStats[statIndex] = value;
    setCurrentStats(updatedStats);
    onChange(updatedStats); // Call the onChange prop to update parent component's state
  };

  return (
    <div>
      {currentStats.map((stat, index) => (
        <div key={index}>
          <label>{`Stat ${index + 1}`}</label>
          <Slider
            min={0}
            max={100}
            value={stat}
            onChange={(value) => handleSliderChange(value, index)}
          />
        </div>
      ))}
    </div>
  );
};

export default MultiVariableSlider;
