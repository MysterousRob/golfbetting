import './App.css';
import './index.css';
import Button from './button';

//function NewPage


function App() {
const handleClick =() => {
  console.log('Button Clicked');
};
  return (
    <div className='in-body'>
      <header className='App-header'>
        <h1>Golf Betting</h1>
      </header>
      <div>
        <button>Betting Tips</button> 
        <button>Live Odds</button>
        <button>Bets of the Week</button>
      </div>
    </div>
  );
}

export default App;
