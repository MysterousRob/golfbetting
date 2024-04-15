import React from "react";
import Slider2 from "../components/slider2";
import './../assets/css/'

export const SliderData = [
    {
        MainName: "Event Form",
        OtherInfo: {
            SeccondName: "Event Average",
            SeccondName: "Event Top 10s",
            SeccondName: "Event Wins",
            //this is going to be the years past
            SeccondName: "Last Years Tournament",
        }
    },
    {
        MainName: "Current Form",
        OtherInfo: {
            SeccondName: "OWGR",
            //this will also dertremine the ammount of years past the tournament
            SeccondName: "Last Tournament",
            SeccondName: "Last But 1 Tournament",
            SeccondName: "Last but 3 Tournament",
            SeccondName: "Last but 4 Tournament",
        }
    },
    {
        MainName: "Scoring Stats",
        OtherInfo: {
            SeccondName: "Hole in One Average",
            SeccondName: "Birdie Average",
            SeccondName: "Eagle Average",
            SeccondName: "Bogey Average",
            SeccondName: "Par 3 Performance",
            SeccondName: "Par 4 Performance",
            SeccondName: "Par 5 Performance",
        }
    },
    {
        MainName: "Event Form",
        OtherInfo: {
            SeccondName: "Par 70",
            SeccondName: "Short Course",
            SeccondName: "Bermuda Positive",
            SeccondName: "Soft Ground",
            SeccondName: "Fazio Design",
            SeccondName: "Coastal Course",
        }
    },
    {
        MainName: "Strokes Gained",
        OtherInfo: {
            SeccondName: "SG Off the Tee",
            SeccondName: "SG Approach",
            SeccondName: "SG Tee to Green",
            SeccondName: "SG Arround the Green",
            SeccondName: "SG Putting",
        }
    },
    {
        MainName: "Skill Stats",
        OtherInfo: {
            SeccondName: "Driving Distance",
            SeccondName: "Proximity to Hole",
            SeccondName: "Going for Green",
            SeccondName: "Driving Accuracy",
            SeccondName: "Gir",
            SeccondName: "Scrambeling",
            SeccondName: "Sand Saves",
            SeccondName: "Putting Average",
            SeccondName: "Puts Per Round",
        }
    },
]

export const SliderData2 = () => {
    return (
        <div className="slider">
            { SliderData.map((nav, i) => (
             <ul key={i}>
                
             </ul>
         ))
       }
        </div>
    )
}