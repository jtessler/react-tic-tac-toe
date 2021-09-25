import React, { useState } from 'react';
import './App.css';

function App() {
  let [currentPlayer, setCurrentPlayer] = useState("X");
  let [grid, setGrid] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "]);

  return (
    <div className="App">
      <div>Current player: {currentPlayer}</div>

      <div>Spot 1: {grid[0]}</div>
      <div>Spot 2: {grid[1]}</div>
      <div>Spot 3: {grid[2]}</div>
      <div>Spot 4: {grid[3]}</div>
      <div>Spot 5: {grid[4]}</div>
      <div>Spot 6: {grid[5]}</div>
      <div>Spot 7: {grid[6]}</div>
      <div>Spot 8: {grid[7]}</div>
      <div>Spot 9: {grid[8]}</div>
    </div>
  );
}

export default App;
