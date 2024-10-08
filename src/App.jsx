/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/*
   Game
    -> Board
        -> Square
    -> History
*/
import { useState } from "react";

function Square({ value, onSquareClick }) {
  const handleClick = () => {
  }
  return (
    <button
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const handleClick = (i) => {
    if (squares[i]) {
      return;
    }
    //clone or duplicate square values
    const nextSquare = squares.slice();
    if (xIsNext) {
      nextSquare[i] = 'X';
    } else {
      nextSquare[i] = 'O';
    }
    setSquares(nextSquare);
    setXIsNext(!xIsNext);
  }
  return (
    <>
      <div>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}></Square>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}></Square>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}></Square>
      </div>
      <div>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}></Square>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}></Square>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}></Square>
      </div>
      <div>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}></Square>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}></Square>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}></Square>
      </div>
    </>
  );

}



