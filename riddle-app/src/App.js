import React from 'react';
import Riddle from './Riddle';
import './App.css';

function App() {
  // Single riddle properties
  const question = "Ride ON!";
  const answer = 'oxleys by the numbers';
  const audioSrc = `${process.env.PUBLIC_URL}/audio/Numbers.m4a`;

  return (
    <div className="App">
      <Riddle question={question} correctAnswer={answer} audioSrc={audioSrc} />
    </div>
  );
}

export default App;
