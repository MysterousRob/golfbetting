import '../css/app.css';
import '../css/index.css';

function List2(){
    return(
        <ul>
            <li>
                Outright Winner
                <p className="p1">This is a bet on which player will win the tournament.</p>
            </li>
            <li>
                Each Way
                <p className="p1">An each-way bet consists of two separate bets: one for the player to win and one for the player to finish within a specified number of places usually the top 5 or top 10.</p>
            </li>
            <li>
                Head to Head
                <p className="p1">This bet involves choosing which of two players will have the better finish in the tournament.</p>
            </li>
            <li>
                Prop Bets
                <p className="p1">These are bets on specific outcomes within the tournament, such as whether a player will make a hole-in-one or the nationality of the winner.</p>
            </li>




        </ul>
    )
}
export default List2;