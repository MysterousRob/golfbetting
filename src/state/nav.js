import React from "react";
import { Link } from 'react-router-dom';
import './../assets/css/App-header.css';
import './../index.js'

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
// export const quickLink2 = () => {
//   return (
//     <>
//       {quickLinks.map((nav, i) => (
//         <Link key={i} to={nav.href}>
//           <p>
//             {nav.title}
//           </p>
//         </Link>
//       ))}
//     </>
//   );
// };