import React from 'react';
import Square from './square.js';

function Board({ squares, onClick }){
  const squaresList = squares.map(function(value, index){
    return <Square key={index} value={value} onClick={() => onClick(index)}/>
  })

  return (
    <div className="board">
      <div className="row">
        { squaresList.slice(0, 3)}
      </div>
      <div className="row">
        { squaresList.slice(3, 6)}
      </div>
      <div className="row">
        { squaresList.slice(6, 9)}
      </div>
    </div>
  )
}

export default Board;
