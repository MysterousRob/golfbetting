import React from "react"
import './../assets/css/app.css';
import './../assets/css/index.css';
import { List2 } from "../data/Data";
import { List } from "../data/Data";


export const listData2 = [
    {
      head: "Outright Winner", 
      paragraph: "This is a bet on which player will win the tournament.", 
    },
    {
      head: "Each Way",
      paragraph: "An each-way bet consists of two separate bets: one for the player to win and one for the player to finish within a specified number of places usually the top 5 or top 10.",
    },  
    {
      head: "Head to Head",
      paragraph: "This bet involves choosing which of two players will have the better finish in the tournament.",
    },
    {
      head: "Prop Bets",
      paragraph: "These are bets on specific outcomes within the tournament, such as whether a player will make a hole-in-one or the nationality of the winner.",
    },
  ]
  
function List1 () {
    return (
        <div className='list-1'>
            <ol className='ordered'>
                <li>
                    1. Understanding the types of bets.
                     <p className="p1">Golf offers various types of bets you can place, including:</p>
                     <div className='l1-2'>
                        {listData2.map((nav, i) => (
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
                </li>
                   <List />
                
            </ol>
        </div>
    )
}
export default List1

