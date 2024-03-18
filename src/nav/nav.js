import React from "react";
import { Link } from 'react-router-dom';

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
      href: "/Sites",
      title: "Golf Betting Sites",
    },
    {
      href: "/Tips",
      title: "Golf Betting Tips",
    },
    {
      href: "/Odds",
      title: "Live-Odds",
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
  {
    href: "",
    title: "",
  },
  {
    href: "",
    title: "",
  },
  {
    href: "",
    title: "",
  },
]
const Nav = () => {
  return (
    navOptions.map((nav, i) => (
      <Link key={i} to={nav.href}>
        <p>
            {nav.title}
        </p>
      </Link>
  ))
  )
}
export default Nav;