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
