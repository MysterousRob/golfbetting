import React from "react";
import "./css/sites.css";



export const siteData = [
    {
       nameSite: "betway", 
       info: {
        bonusData: "",
        bonusCode: "",
        boostedOdds: "",
        liveStreaming: "",
        inPlayBetting: "",
        termsCondidtions: "",
       },
       link: {
        claimLink: "",
        visitLink: "",
        reviewLink: "",
        },
    },
    {
       nameSite: "bwin", 
       info: {
        bonusData: "",
        bonusCode: "",
        boostedOdds: "",
        liveStreaming: "",
        inPlayBetting: "",
        termsCondidtions: "",
       },
       link: {
        claimLink: "",
        visitLink: "",
        reviewLink: "",
        },
    },
    {
       nameSite: "bet365", 
       info: {
        bonusData: "",
        bonusCode: "",
        boostedOdds: "",
        liveStreaming: "",
        inPlayBetting: "",
        termsCondidtions: "",
       },
       link: {
        claimLink: "",
        visitLink: "",
        reviewLink: "",
        },
    },
    {
       nameSite: "William Hill", 
       info: {
        bonusData: "no",
        bonusCode: "no",
        boostedOdds: "no",
        liveStreaming: "no",
        inPlayBetting: "no",
        termsCondidtions: "no",
       },
       link: {
        claimLink: "",
        visitLink: "",
        reviewLink: "",
        },
    },
    {
       nameSite: "888 sport", 
       info: {
        bonusData: "",
        bonusCode: "",
        boostedOdds: "",
        liveStreaming: "",
        inPlayBetting: "",
        termsCondidtions: "",
       },
       link: {
        claimLink: "",
        visitLink: "",
        reviewLink: "",
        },
    },
    {
       nameSite: "name goes here", 
       info: {
        bonusData: "",
        bonusCode: "",
        boostedOdds: "",
        liveStreaming: "",
        inPlayBetting: "",
        termsCondidtions: "",
       },
       link: {
        claimLink: "",
        visitLink: "",
        reviewLink: "",
        },
    },
]
    
 export const siteData2 = () => {
    return (
        <div className=''>
        { siteData.list.map((nav, i) => (
             <li key={i}>
               <h1 className='li-head'>
                 {nav.head}
               </h1>
               <p className="li-p1">
                   {nav.paragraph}
               </p>
             </li>
         ))
       }
       </div>
    )
}