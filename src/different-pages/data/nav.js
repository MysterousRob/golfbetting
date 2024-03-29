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

function quickLinks () {
  
}
const Nav = () => {
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