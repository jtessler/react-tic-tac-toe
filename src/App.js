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

  return (
    <div className="App">
      <div>Current player: {currentPlayer}</div>

      <div>Spot 1: <button onClick={() => onSpotClicked(0)}>{grid[0]}</button></div>
      <div>Spot 2: <button onClick={() => onSpotClicked(1)}>{grid[1]}</button></div>
      <div>Spot 3: <button onClick={() => onSpotClicked(2)}>{grid[2]}</button></div>
      <div>Spot 4: <button onClick={() => onSpotClicked(3)}>{grid[3]}</button></div>
      <div>Spot 5: <button onClick={() => onSpotClicked(4)}>{grid[4]}</button></div>
      <div>Spot 6: <button onClick={() => onSpotClicked(5)}>{grid[5]}</button></div>
      <div>Spot 7: <button onClick={() => onSpotClicked(6)}>{grid[6]}</button></div>
      <div>Spot 8: <button onClick={() => onSpotClicked(7)}>{grid[7]}</button></div>
      <div>Spot 9: <button onClick={() => onSpotClicked(8)}>{grid[8]}</button></div>
    </div>
  );
}

export default App;
