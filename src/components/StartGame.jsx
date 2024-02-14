import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StartGame = () => {
  const navigate = useNavigate()  
  const [matches, setMatches] = useState(0);
  const [players, setPlayers] = useState(0);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const inputStyle = {
    width: '500px', 
    margin: '10px',
    padding: '15px',
    fontSize: '16px',
    borderRadius: '8px'
  };

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

  const handleStartGame = () => {
    console.log('navigate')
    navigate('/game', {state: {matches, players}})
  }

  return (
    <div style={containerStyle}>
      <h1>Stone Paper Scissor</h1>
      <input
        type="number"
        placeholder="Select number of Matches"
        onChange={(e) => setMatches(e.target.value)}
        style={inputStyle}
        min={3}
      />
      <input
        type="number"
        placeholder="Number of Players"
        onChange={(e) => setPlayers(e.target.value)}
        style={inputStyle}
        min={1}
        max={2}
      />
      <button style={buttonStyle} onClick={handleStartGame} >Start Game</button>
    </div>
  );
};

export default StartGame;
