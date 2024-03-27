import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../Liveoods/api/live-odds-data';


// const MultiVariableSlider = ({ stats, onChange }) => {
//   const [currentStats, setCurrentStats] = useState(stats);
// console.log(stats);
//   const handleSliderChange = (value, statIndex) => {
//     const updatedStats = [...currentStats];
//     updatedStats[statIndex] = value;
//     setCurrentStats(updatedStats);
//     onChange(updatedStats); 
//   };
  
//   return (
//     <div>
//       {data.attributes.Player_list.data.map((stat, index) => (
//         <div key={index}>
//           <label>{`Stat ${index + 1}`}</label>
//           <Slider
//             min={0}
//             max={100}
//             value={stat}
//             onChange={(value) => handleSliderChange(value, index)}
//           />
//         </div>
//       ))}
//       {data.attributes.Imported_Variables.map((stat, index) => (
//         <div key={index}>
//           <label>{`Stat ${index + 1}`}</label>
//           <Slider
//             min={0}
//             max={100}
//             value={stat}
//             onChange={(value) => handleSliderChange(value, index)}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MultiVariableSlider;