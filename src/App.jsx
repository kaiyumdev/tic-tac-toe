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
  const handleClick = () => {
    //clone or duplicate square values
    const nextSquare = squares.slice();
    nextSquare[0] = "X";
    setSquares(nextSquare);
  }
  return (
    <>
      <div>
        <Square value={squares[0]} onSquareClick={handleClick}></Square>
        <Square value={squares[1]}></Square>
        <Square value={squares[2]}></Square>
      </div>
      <div>
        <Square value={squares[3]}></Square>
        <Square value={squares[4]}></Square>
        <Square value={squares[5]}></Square>
      </div>
      <div>
        <Square value={squares[6]}></Square>
        <Square value={squares[7]}></Square>
        <Square value={squares[8]}></Square>
      </div>
    </>
  );

}



