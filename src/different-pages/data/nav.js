import React from "react";
import { Link } from 'react-router-dom';
import '../css/App-header.css';

export let navOptions = [
   {
      href: "/",
      title: "Home",
    },
    {
      href: "/Week",
      title: "Bets of the Week",
    },
    {
      href: "/Tips",
      title: "Golf Betting Tips",
    },
    {
      href: "/Odds",
      title: "Live-Odds",
    },
     {
      href: "/Sites",
      title: "Golf Betting Sites",
    },
]

export const tournaments = [
  {
    href: "different-pages\tournaments\openchamp.js",
    title: "The Open",
  },
  {
    href: "different-pages\tournaments\themaster.js",
    title: "The Masters",
  },
  {
    href: "different-pages\tournaments\theopen.js",
    title: "The British Open",
  },
  {
    href: "different-pages/tournaments/uspga.js",
    title: "US PGA Championship",
  },
  {
    href: "different-pages\tournaments\tournaments.js",
    title: "Tournaments",
  },
]
//const footer = () -> {
export const company = [ 
{
  href: "src\different-pages\forhomepg\AboutUs.js",
  title: "About Us",
},
{
  href: "",
  title: "News",
},
{
  href: "",
  title: "",

},
]
const quickLinks = [
  {
    href: "src\different-pages\App-home.jsx",
    title: "Home",
  },
  {
    href: "src\different-pages\Betsoftheweek.js",
    title: "Bets of the Week",
  },
  {
    href: "src\different-pages\golfbettingtips.js",
    title: "Golf Betting Tips",
  },
  {
    href: "src\different-pages\livegolfodds.js",
    title: "Live-Odds",
  },
  {
    href: "src\different-pages\golfbettingsites.js",
    title: "Golf Betting Sites",
  },
];

// Nav component
const Nav = ({ navOptions }) => {
  return (
    <div className="nav">
      {navOptions.map((nav, i) => (
        <Link key={i} to={nav.href}>
          <p className="test">
            {nav.title}
          </p>
        </Link>
      ))}
    </div>
  );
};
export default Nav;


// quickLink2 component
export const quickLink2 = () => {
  return (
    <>
      {quickLinks.map((nav, i) => (
        <Link key={i} to={nav.href}>
          <p>
            {nav.title}
          </p>
        </Link>
      ))}
    </>
  );
};