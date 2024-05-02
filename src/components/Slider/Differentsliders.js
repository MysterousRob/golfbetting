import React from 'react';
import './../../assets/css/GBS.css';



export function Slider1({parentTitle, childTitle, setSliderValues, max=10, value, parent}) {
  return(
    <>
      <div className='slider-input1'>
        <input 
        onChange={(event) => {
          setSliderValues(prev => {



            if(parent)
              {
              return prev.map(slider => {
                if(slider.title === parentTitle){
                  slider.value = event.target.value
                  slider.children.map(child => {
                    child.value = event.target.value
                  })
                }
                return slider
              })}






            return prev.map(slider => {
              if(slider.title === parentTitle){
                slider.children?.map(childSlider => {
                  if(childSlider.title === childTitle){
                    childSlider.value = event.target.value
                  }
                })
              }
              return slider
            }
          
          
          
          
          )
          })
        }
      }
        type="range" 
        min={0} 
        max={max} 
        value={value}
        className="range range-primary" />
      </div>
      </>
  )
}

