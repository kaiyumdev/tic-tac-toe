/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/*
   Game
    -> Board
        -> Square
    -> History
*/
import { useState } from "react";

function Square({ value }) {
  const handleClick = () => {
    console.log('click', value);
  }
  return (
    <button
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div>
        <Square ></Square>
        <Square ></Square>
        <Square ></Square>
      </div>
      <div>
        <Square ></Square>
        <Square ></Square>
        <Square ></Square>
      </div>
      <div>
        <Square ></Square>
        <Square ></Square>
        <Square ></Square>
      </div>
    </>
  );

}



