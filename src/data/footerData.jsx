import React from "react";
import { Link } from 'react-router-dom';
import '../../../src/different-pages/forhomepg/footer-css/footer.css';

//making nested array (FOLLOW STRUCTURE, DONT DOUBT IT, JUST DO IT)
export const foot = [
    {
        title: "Golf_Predictions",
        links:  [
            {
                title: "News",
                href: "",
            },
            {
                title: "Live Scores",
                href: "",
            },
            {
                title: "Life-Time Scores",
                href: "",
            },
            {
                title: "GBS Predictor",
                href: "",
            },
            {
                title: "GBS Predictor Info",
                href: "",
            },
            {
                title: "",
                href: "",
            },
            {
                title: "",
                href: "",
            },
        ],
    },
    {
        title: "Quick links",
        links:  [
            {
                title: "Home",
                Href: "src/different-pages/App-home.jsx",
            },
            {
                title: "Golf Betting Tips",
                Href: "src/different-pages/golfbettingtips.js",
            },
            {
                title: "Live Golf Odds",
                Href: "src/different-pages/livegolfodds.js",
            },
            {
                title: "Golf Bets of the Week",
                Href: "src/different-pages/Betsoftheweek.js",
            },
            {
                title: "",
                Href: "",
            },
            {
                title: "",
                Href: "",
            },
        ],
    },
    {
        title: "Tournaments",
        links:  [
            {
                title: "The Masters",
                Href: "src/different-pages/tournaments/themaster.js",
            },
            {
                title: "The Open Championship",
                Href: "src/different-pages/tournaments/openchamp.js",
            },
            {
                title: "US PGA Championship",
                Href: "src/different-pages/tournaments/uspga.js",
            },
            {
                title: "The US Open",
                Href: "src/different-pages/tournaments/theopen.js",
            },
            {
                title: "",
                Href: "",
            },
        ],
    },
    {
        title: "Betting Offers",
        links:  [
            {
                title: "Betting Sites",
                Href: "src/different-pages/golfbettingsites.js",
            },
            {
                title: "Betting Promotions",
                Href: "",
            },
        ],
    },
    {
        title: "Contact Us",
        links:  [
            {
                title: "About Us",
                href: "src/different-pages/forhomepg/AboutUs.js",
            },
            {
                title: "Form",
                href: "",
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
                        <Link key={i} to={nav.href}>
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