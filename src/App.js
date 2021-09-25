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

  let isWinner = function(x) {
    return grid[0] === x && grid[1] === x && grid[2] === x  // Row 1
        || grid[3] === x && grid[4] === x && grid[5] === x  // Row 2
        || grid[6] === x && grid[7] === x && grid[8] === x  // Row 3
        || grid[0] === x && grid[3] === x && grid[6] === x  // Column 1
        || grid[1] === x && grid[4] === x && grid[7] === x  // Column 2
        || grid[2] === x && grid[5] === x && grid[8] === x  // Column 3
        || grid[0] === x && grid[4] === x && grid[8] === x  // Diagonal 1
        || grid[2] === x && grid[4] === x && grid[6] === x; // Diagonal 2
  }

  if (isWinner("X")) {
    return <div className="App">Player X wins!</div>;
  } else if (isWinner("O")) {
    return <div className="App">Player O wins!</div>;
  } else {
    return (
      <div className="App">
        <div>Current player: {currentPlayer}</div>

        <div>{gridElements.slice(0, 3)}</div>
        <div>{gridElements.slice(3, 6)}</div>
        <div>{gridElements.slice(6, 9)}</div>
      </div>
    );
  }
}

export default App;
