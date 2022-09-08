import './App.scss';
import React, { useState } from 'react';

function App() {

  const randomizer = (list) => {
    setMessage(list[Math.floor(Math.random()*list.length)]);
  };

  const welcome_messages = [
    // Positive Response
    "Press to roll",
    "Try me",
    "Feeling Lucky?",
    ];

  const [message, setMessage] = useState(welcome_messages[Math.floor(Math.random()*welcome_messages.length)]);

  const messages = [
    // Positive Response
    "Yes.",
    "Oo. (Yes)",
    "Bakit hindi mo subukan? (Why don't you try it?)",
    "Today's your best day, Go for it!",
    // Negative Response
    "No.",
    "Not for now, but do not worry maybe soon.",
    // Non-committing Response 
    "Maybe?",
    ];

  const handleClick = () => {
    randomizer(messages);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='triangle-container'>
          <svg height="600" width="600">
            <polygon points="250,50 0,375 500,375" class="triangle">
            </polygon>
          </svg>
        </div>
        <div className='text-container'>
            <a href="#" onClick={handleClick}>{message}</a>
        </div>
      </header>
    </div>
  );
}

export default App;
