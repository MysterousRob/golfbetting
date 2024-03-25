import React from "react";
import { Link } from 'react-router-dom';
import '../../forhomepg/footer-css/footer.css';

//making nested array (FOLLOW STRUCTURE, DONT DOUBT IT, JUST DO IT)
export const foot = [
    {
        title: "Golf_Predictions",
        links:  [
            {
                title: "News",
                to: "",
            },
            {
                title: "Live Scores",
                to: "",
            },
            {
                title: "Life-Time Scores",
                to: "",
            },
            {
                title: "",
                to: "",
            },
        ],
    },
    {
        title: "Quick links",
        links:  [
            {
                title: "Home",
                to: "src/different-pages/App-home.jsx",
            },
            {
                title: "Golf Betting Tips",
                to: "src/different-pages/golfbettingtips.js",
            },
            {
                title: "Live Golf Odds",
                to: "src/different-pages/livegolfodds.js",
            },
            {
                title: "Golf Bets of the Week",
                to: "src/different-pages/Betsoftheweek.js",
            },
            {
                title: "",
                to: "",
            },
            {
                title: "",
                to: "",
            },
        ],
    },
    {
        title: "Tournaments",
        links:  [
            {
                title: "The Masters",
                to: "src/different-pages/tournaments/themaster.js",
            },
            {
                title: "The Open Championship",
                to: "src/different-pages/tournaments/openchamp.js",
            },
            {
                title: "US PGA Championship",
                to: "src/different-pages/tournaments/uspga.js",
            },
            {
                title: "The US Open",
                to: "src/different-pages/tournaments/theopen.js",
            },
            {
                title: "",
                to: "",
            },
        ],
    },
    {
        title: "Betting Offers",
        links:  [
            {
                title: "Betting Sites",
                to: "src/different-pages/golfbettingsites.js",
            },
            {
                title: "Betting Promotions",
                to: "",
            },
        ],
    },
    {
        title: "Contact Us",
        links:  [
            {
                title: "About Us",
                to: "src/different-pages/forhomepg/AboutUs.js",
            },
            {
                title: "Form",
                to: "",
            },
        ],
    },
]

export const Foot2 = () => {
    return (
    <>
        {foot.map((footItems, i) =>(
            <div key={i} className="nav-footer">
                <h2>{footItems.title}</h2>
                    {footItems.links.map((nav, i) => (
                        <Link key={i} to={nav.to}>
                            <p className="">
                                {nav.title}
                            </p>
                        </Link>
             ))}
            </div>
        ))}
    </>
      );
}
//make this into routes for the footerside of the webpage
