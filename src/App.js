import React, { useState } from 'react';
import './App.css';

function App() {
  let [currentPlayer, setCurrentPlayer] = useState("X");
  let [grid, setGrid] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "]);

  let onSpotClicked = function(i) {
    grid[i] = currentPlayer;
    setGrid(grid);
    if (currentPlayer === "X") {
      setCurrentPlayer("O");
    } else {
      setCurrentPlayer("X");
    }
  };

  let gridElements = grid.map((spotValue, i) =>
     <button onClick={() => onSpotClicked(i)}>{spotValue}</button>
  );

  return (
    <div className="App">
      <div>Current player: {currentPlayer}</div>

      <div>{gridElements.slice(0, 3)}</div>
      <div>{gridElements.slice(3, 6)}</div>
      <div>{gridElements.slice(6, 9)}</div>
    </div>
  );
}

export default App;
