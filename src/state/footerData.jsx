import React from "react";
import { Link, NavLink } from 'react-router-dom';
import './../assets/css/footer.css';
import { navOptions } from "./nav";


//making nested array (FOLLOW STRUCTURE, DONT DOUBT IT, JUST DO IT)
export const foot = [
    {
        title: "Golf Predictions",
        links:  [
            {
                title: "News",
                href: "/News",
            },
            {
                title: "Live Standing",
                href: "/Scores",
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
                href: "/Info",
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
                href: "../",
            },
            {
                title: "Golf Betting Tips",
                href: "../Tips",
            },
            {
                title: "Live Golf Odds",
                href: "../Odds",
            },
            {
                title: "Golf Bets of the Week",
                href: "../Week",
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
        title: "Tournaments",
        links:  [
            {
                title: "The Masters",
                href: "../Masters",
            },
            {
                title: "The Open Championship",
                href: "../Open",
            },
            {
                title: "US PGA Championship",
                href: "../OpenChamp",
            },
            {
                title: "The US Open",
                href: "../PGA",
            },
            {
                title: "",
                href: "",
            },
        ],
    },
    {
        title: "Betting Offers",
        links:  [
            {
                title: "Betting Sites",
                href: "/Sites",
            },
            {
                title: "Betting Promotions",
                href: "",
            },
        ],
    },
    {
        title: "Contact Us",
        links:  [
            {
                title: "About Us",
                href: "/About",
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
                        <NavLink key={i} to={nav.href}>
                            <p className="">
                                {nav.title}
                            </p>
                        </NavLink>
             ))}
            </div>
        ))}
    </>
      );
}
//make this into routes for the footerside of the webpage