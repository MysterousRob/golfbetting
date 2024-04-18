import React from 'react';
import './../assets/css/app.css';
import Header from './../components/Header.js';
import Footer from '../components/footer.jsx';
//function NewPage

function Tips() {
  const tips = [
    {
      head: "Outright Winner", 
      paragraph: "This is a bet on which player will win the tournament.", 
      subTips: [
          {
            head: "2. Researching players and courses.",
            paragraph: "Before placing your bets, it's essential to research the players competing in the tournament and understand the course they'll be playing on. Factors such as recent form, course history, playing style, and course conditions can all influence a player's performance.",
          },
          {
            head: "3. Checking the Odds.",
            paragraph: "Odds for golf tournaments are typically listed in fractional format (e.g., 5/1, 10/1). The lower the first number, the higher the probability the sportsbook assigns to that player winning. However, remember that odds can change based on betting activity and player performance.",
          },
          {
            head: "4. Set a budget.",
            paragraph: "Like any form of gambling, it's crucial to set a budget for your golf betting activities and stick to it. Only wager what you can afford to lose.",
          },
          {
            head: "5. Place your bets.",
            paragraph: "Once you've done your research and are comfortable with your selections, place your bets with a reputable sportsbook or betting site. Many online sportsbooks offer golf betting markets with competitive odds.",
          },
          {
            head: " 6. Follow the action.",
            paragraph: "Once your bets are placed, enjoy watching the tournament unfold. Keep track of how your chosen players are performing and whether your bets are looking promising.",
          },
          {
            head: "7. Cash out / Ride it out",
            paragraph: "Depending on the betting platform you're using, you may have the option to cash out your bets before the tournament concludes. This can be useful if your chosen player is leading but you're unsure if they'll maintain their position. Alternatively, you can choose to ride out your bets and see how they play out until the end of the tournament.",
          },
      ]
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

  return (
    <div>
      <Header />
      <div className='tips'>
        <h1 className='golf-tips'>Some things to consider when betting.</h1>
        <p className='p1'>
        Betting on golf involves understanding various bet types such 
        as outright winners, each-way bets, and head-to-head matchups, 
        all requiring research on player form, course conditions, and 
        odds analysis. After setting a budget, wagers can be placed with 
        reputable sportsbooks, with options to follow the tournament's 
        progress and potentially cash out bets before its conclusion. 
        Enjoyment of golf betting is enhanced by responsible gambling 
        practices, emphasizing the importance of only wagering what one 
        can afford to lose.
        </p>
        <div className='li-1'>
        { tips.map((tip, i) => (
            <li key={i}>
              <h1 className='li-head'>
                {tip.head}
              </h1>
              <p className="li-p1">
                {tip.paragraph}
              </p>
              <ol className='li-2'>
                {tip.subTips?.map((subTip, i) => (
                  <li key={i}>
                    <h1>
                      {subTip.head}
                    </h1>
                    <p>
                      {subTip.paragraph}
                    </p>
                  </li>
                ))}
              </ol>
            </li>
        ))
      }
      </div>
      </div>
      <Footer />
    </div> 
  );
}


export default Tips;

