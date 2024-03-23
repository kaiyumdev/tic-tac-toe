## Tic-Tac-Toe App

This is a simple implementation of the classic Tic-Tac-Toe game in React. The app includes the following features:

- A game board with squares that players can click to place their mark (X or O)
- A status message that displays the current player's turn and the winner, if any
- A history of moves that allows players to go back and replay the game
- A reset button that restarts the game

## Installation

To install the app, clone the repository and run the following commands:

```
c2f7488a-96f4-49e6-9730-e0724f9ef78a

npm install
npm start

```

## Usage

To play the game, simply click on a square to place your mark. The game will automatically switch turns between players. If a player gets three in a row, the game will end and the winner will be displayed.

You can also use the history of moves to go back and replay the game. To do this, simply click on a move in the history list. The game will then jump to that move and continue playing from there.

To reset the game, simply click on the Reset button.

## Implementation Details

The app is implemented using React and the following libraries:

- [react-router-dom](https://reactrouter.com/) for routing
- [styled-components](https://styled-components.com/) for styling

The game logic is implemented in the `Game` component. The `Game` component maintains the state of the game, including the current player's turn, the squares that have been played, and the history of moves. The `Game` component also renders the game board and the status message.

The `Board` component is responsible for rendering the game board. The `Board` component receives the current squares as props and renders a square for each square in the board. The `Board` component also handles the click events for the squares.

The `Square` component is a simple component that renders a square on the game board. The `Square` component receives the value of the square as props and renders the appropriate mark (X or O) if the square has been played.

The `History` component is responsible for rendering the history of moves. The `History` component receives the history of moves as props and renders a list of moves. The `History` component also handles the click events for the moves in the list.

## License

This app is licensed under the MIT License.
