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

  let onResetClicked = function() {
    setCurrentPlayer("X");
    setGrid([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
  };

  let gridElements = grid.map((spotValue, i) =>
    <button disabled={spotValue !== " "} onClick={() => onSpotClicked(i)}>
      {spotValue}
    </button>
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

  let isDraw = grid.every(spotValue => spotValue !== " ");

  let resetElement = <button onClick={() => onResetClicked()}>Reset</button>;

  if (isWinner("X")) {
    return (
      <div className="App">
        <h1>Player X wins!</h1>
        <div>{resetElement}</div>
      </div>
    );
  } else if (isWinner("O")) {
    return (
      <div className="App">
        <h1>Player O wins!</h1>
        <div>{resetElement}</div>
      </div>
    );
  } else if (isDraw) {
    return (
      <div className="App">
        <h1>Draw!</h1>
        <div>{resetElement}</div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div>Current player: {currentPlayer}</div>

        <div>{gridElements.slice(0, 3)}</div>
        <div>{gridElements.slice(3, 6)}</div>
        <div>{gridElements.slice(6, 9)}</div>

        <div>{resetElement}</div>
      </div>
    );
  }
}

export default App;
