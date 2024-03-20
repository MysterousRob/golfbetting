import React from "react"
import '../css/app.css';
import '../css/index.css';
import { List2 } from "../data/Data";
import { List } from "../data/Data";

function List1 () {
    return (
        <div>
            <div className='list-1'>
                <ol className='ordered'>
                    <li>
                        1. Understanding the types of bets.
                         <p className="p1">Golf offers various types of bets you can place, including:</p>
                         <List2 />
                    </li>
                       <List />
            
                </ol>
        </div>
        </div>
    )
}
export default List1

