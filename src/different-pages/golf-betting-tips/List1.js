import React from "react"
import '../css/app.css';
import '../css/index.css';
import List2 from "./list2";

function List1(){
    return (
        <div className='list-1'>
            <ol className='ordered'>
                <li>
                    1. Understanding the types of bets.
                     <p className="p1">Golf offers various types of bets you can place, including:</p>
                     <List2 />
                </li>
                   
                <li>
                    2. Researching players and courses.
                    <p>Before placing your bets, it's essential to research the players competing in the tournament and understand the course they'll be playing on. Factors such as recent form, course history, playing style, and course conditions can all influence a player's performance.</p>
                </li>
                <li>
                    3. Checking the Odds.
                    <p> Odds for golf tournaments are typically listed in fractional format (e.g., 5/1, 10/1). The lower the first number, the higher the probability the sportsbook assigns to that player winning. However, remember that odds can change based on betting activity and player performance.</p>
                </li>
                <li>
                    4. Set a budget.
                    <p>Like any form of gambling, it's crucial to set a budget for your golf betting activities and stick to it. Only wager what you can afford to lose.</p>
                </li>
                <li>
                    5. Place your bets.
                    <p>Once you've done your research and are comfortable with your selections, place your bets with a reputable sportsbook or betting site. Many online sportsbooks offer golf betting markets with competitive odds.</p>
                </li>
                <li>
                    6. Follow the action.
                    <p>Once your bets are placed, enjoy watching the tournament unfold. Keep track of how your chosen players are performing and whether your bets are looking promising.</p>
                </li>
                <li>
                    7. Cash out / Ride it out
                    <p>Depending on the betting platform you're using, you may have the option to cash out your bets before the tournament concludes. This can be useful if your chosen player is leading but you're unsure if they'll maintain their position. Alternatively, you can choose to ride out your bets and see how they play out until the end of the tournament.</p>
                </li>
            </ol>
        </div>
    )
}
export default List1
