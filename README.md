Tic Tac Toe in React
====================

**React project designed for [Code Nation][code-nation] students**

This is a single-client version of the [studio-multiplayer-game] taught in
previous school years. This time students are expected to create their own game
from scratch without the use of Firebase like before. All gameplay will be done
locally from a single machine.

This repository serves as an example project with a class-by-class walk through
described in subsequent sections. We'll build a simple version of your favorite
game of X's and O's, [Tic Tac Toe][tic-tac-toe].

[code-nation]:https://codenation.org
[studio-multiplayer-game]:https://github.com/jtessler/studio-multiplayer-game
[tic-tac-toe]:https://en.wikipedia.org/wiki/Tic-tac-toe

## Step 1: Design your game state

Think about how users play your game. For example: What do you do on your turn?
Is there a board with which you interact? If so, how many "things" are on this
board? How many options do you have? When does your turn end? When does the
game end? The answers for Tic Tac Toe are as follows:

- Tic Tac Toe switches between two players, each assigned either an X or an O
  marker
- On each turn, one player places their X or O marker on an unused spot
- These spots are arranged on a three-by-three grid for a total of nine spots
- Your turn ends when you place your X or O on an unused spot
- The game ends when all spots are used

Tic Tac Toe can therefore be reduced to the following **two state variables**:

```
let [currentPlayer, setCurrentPlayer] = useState("X");
let [grid, setGrid] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
```

- One variable to track the "current player", and
- Nine variables to track the value of each spot
  - A spot can either be `" "`, `"X"`, or `"O"`
  - We arrange these nine spots in a single array

Using the state we designed above, create a component that initializes it and
renders every state value. Warning: this won't look very pretty!

```
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
```

## Step 2: Add event handlers

Think about how players interact with your game. What is their action and what
is the effect? Think of it like a cooking recipe or a [flowchart]. An example
move in Tic Tac Toe could be described as follows:

- Player `"X"` clicks on an unused spot
- The spot's state changes from a blank `" "` to either `"X"` or `"O"`
- The spot becomes uneditable
- The current player changes to player `"O"`

Given this "spot" is an actionable thing, it makes sense to make each of these
a `<button>`:

```
function App() {
  let [currentPlayer, setCurrentPlayer] = useState("X");
  let [grid, setGrid] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "]);

  return (
    <div className="App">
      <div>Current player: {currentPlayer}</div>

      <div>Spot 1: <button>{grid[0]}</button></div>
      ...
    </div>
  );
}
```

Now we define a click handler that performs the actions we listed above:

```
let onSpotClicked = function(i) {
  grid[i] = currentPlayer;
  setGrid(grid);
  if (currentPlayer === "X") {
    setCurrentPlayer("O");
  } else {
    setCurrentPlayer("X");
  }
};
```

And update the rendered `<button>`s to call the click handler, for example:

```
<div>Spot 1: <button onClick={() => onSpotClicked(0)}>{grid[0]}</button></div>
```

Now try pressing some buttons and watch their labels change as well as the
"Current player" value!

[flowchart]:https://en.wikipedia.org/wiki/Flowchart

## Step 3: Build the user interface

Now that we have our state manipulation up and running, let's get creative and
make it look like a real game! For Tic Tac Toe, that means replacing our list
of spots with an actual three-by-three grid.

This is a good opportunity to replace our handwritten list with an array
[`map()`][array-map] call!

```
let gridElements = grid.map((spotValue, i) =>
   <button onClick={() => onSpotClicked(i)}>{spotValue}</button>
);
```

Then we can take advantage of the array [`slice()`][array-slice] method to
render three rows of three spots each:

```
<div>{gridElements.slice(0, 3)}</div>
<div>{gridElements.slice(3, 6)}</div>
<div>{gridElements.slice(6, 9)}</div>
```

Now we have something that actually looks like Tic Tac Toe! This is also a good
time to modify your CSS, import things like [Bootstrap], etc. Go wild!

[array-map]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[array-slice]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
[Bootstrap]:https://getbootstrap.com/

## Step 4: Add game logic

What computation (or algorithm) do you need to perform to determine when the
game is over? For example, you can win Tic Tac Toe in the following ways:

- Any row is all `"X"`s or `"0"`s
- Any column is all `"X"`s or `"0"`s
- Either diagonal is all `"X"`s or `"0"`s

We could write out the entire "win check" as a giant conditional!

```
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
```

Then we change what we render based on this algorithm:

```
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
```

Now we can actually play a full game of Tic Tac Toe!

## Step 5: Handle edge cases

Although we can now _basically_ play our game end-to-end, there are a lot of
ways to get stuck, break the rules, or "glitch" out. For Tic Tac Toe, these
include:

- A player can override a spot, e.g. change an `"X"` to an `"0"`
- There's no indication that the game ends in a draw, i.e., all spots are
  occupied without a winner
- There's no way to reset the game after it's started (or ended)

Your game will likely have similar issues, which we'll call "edge cases". This
section will show you how to go about fixing them for Tic Tac Toe:

### Edge case 1: Prevent editing a slot after it's assigned a value

An easy way to prevent the player from editing a spot is to use the `disabled`
attribute on the `<button>` element. We can set this to `true` if the button
value is anything but blank (`" "`). Notice the addition of the `spotValue !==
" "` conditional in the array `map()` call below:

```
let gridElements = grid.map((spotValue, i) =>
  <button disabled={spotValue !== " "} onClick={() => onSpotClicked(i)}>
    {spotValue}
  </button>
);
```

Now whenever a player assigns an `"X"` or an `"O"` to any spot, the button will
become uneditable because of the `disabled=true` attribute.

### Edge case 2: Determine if the game ended in a draw

We can use a similar algorithm as used for determining a game winner, but this
one is even simpler. A game ends in a draw if _every_ spot is not equal to
blank (`" "`). Here we'll take advantage of the array `every()` method to make
this a one-liner!

```
let isDraw = grid.every(spotValue => spotValue !== " ");
```

Then we add another else-if statement after checking for winners:

```
if (isWinner("X")) {
  return <div className="App">Player X wins!</div>;
} else if (isWinner("O")) {
  return <div className="App">Player O wins!</div>;
} else if (isDraw) {
  return <div className="App">Draw!</div>;
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
```

### Edge case 3: Add a reset button to restart the game at any point

TODO: Fix edge case 3
