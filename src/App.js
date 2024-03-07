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
      <header className='to-head'>
        <h1>Golf Betting</h1>
      <div>
        <button ahref="#" onClick={handleClick}>Betting Tips</button> 
        <button ahref="#" onClick={handleClick}>Live Odds</button>
        <button ahref="#" onClick={handleClick}>Bets of the Week</button>
      </div>
      </header>
    </div>
  );
}

export default App;
