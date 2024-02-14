import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Game = () => {
    const location = useLocation()
  const [computersChoice, setComputersChoice] = useState('rock');
  const [userOneChoice, setUserOneChoice] = useState('rock');
  const [userOnePoints, setUserOnePoints] = useState(0);
  const [computersPoints, setComputersPoints] = useState(0);
  const [results, setResults] = useState('Let\'s see who wins');
  const [gameOver, setGameOver] = useState(false);

  const choices = ['rock', 'paper', 'scissors'];
  const {matches, players} = location?.state || {}
  console.log(matches, players)

  const handleClick = (choice) => {
    setUserOneChoice(choice);
    generateComputersChoice();
  };

  const reset = () => {
    setUserOneChoice('rock');
    setComputersChoice('rock');
    setUserOnePoints(0);
    setComputersPoints(0);
    setResults('Let\'s see who wins');
    setGameOver(false);
  };

  const generateComputersChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputersChoice(randomChoice.toLowerCase());
  };

useEffect(() => {
    const comboMoves = userOneChoice + computersChoice;
    console.log(comboMoves)
  
    if (userOnePoints <= 4 && computersPoints <= 4) {
      if (comboMoves === 'rockscissors' || comboMoves === 'paperrock' || comboMoves === 'scissorspaper') {
        setUserOnePoints((prevUserOnePoints) => {
          const updatedUserOnePoints = prevUserOnePoints + 1;
  
          if (updatedUserOnePoints === 5) {
            setGameOver(true);
            setResults('User Wins');
          }
  
          return updatedUserOnePoints;
        });
      }
      if (comboMoves === 'paperscissors' || comboMoves === 'scissorsrock' || comboMoves === 'rockpaper') {
        setComputersPoints((prevComputersPoints) => {
          const updatedComputersPoints = prevComputersPoints + 1;
    
          if (updatedComputersPoints === 5) {
            setGameOver(true);
            setResults('Computers Win');
          }
    
          return updatedComputersPoints;
        });
      }
      if (comboMoves === 'paperpaper' || comboMoves === 'scissorscissors' || comboMoves === 'rockrock') {
        setResults('Match Ties');
      }
    }
  }, [userOneChoice, computersChoice]);
  
  console.log(userOnePoints, computersPoints);

  const buttonStyle = {
    backgroundColor: '#4caf50', 
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '8px',
  };

  return (
    <div>
      <h1>Rock Paper Scissor</h1>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <h1>Computer's Points: {computersPoints}</h1>
        <h1>Users Points: {userOnePoints}</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div>
          <img alt='choice' style={{ width: '150px', height: '100px' }} src={`../images/${computersChoice}.jpeg`} />
        </div>
        <div>
          <img alt='choice' style={{ width: '150px', height: '100px' }} src={`../images/${userOneChoice}.jpeg`} />
        </div>
      </div>
      <div>
        {choices.map((choice, index) => (
          <button style={buttonStyle} key={index} onClick={() => handleClick(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <div>
        <h1>Final Results: {results}</h1>
      </div>
      <div>
        {gameOver && <button style={buttonStyle} onClick={reset}>Restart Game</button>}
      </div>
    </div>
  );
};

export default Game;
