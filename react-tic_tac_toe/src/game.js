import React, { Component } from 'react';
import Board from './board.js';

class Game extends Component {
  constructor(){
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    }
  }

  handleClick(i){
    const squares = this.state.squares.slice();

    if (this.validWinner(squares) || squares[i]) return;

    squares[i] = this.state.xIsNext ? "X" : "O";

    this.setState({
      squares,
      xIsNext: !this.state.xIsNext
    });
  }

  validWinner(board){
    const winPos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]

    for (let x = 0; x < winPos.length; x++){
      let left = board[winPos[x][0]],
          middle = board[winPos[x][1]],
          right = board[winPos[x][2]];

      if (left && left === middle && middle === right) return true;
    }
  }

  render(){
    let { squares, xIsNext } = this.state;
    let status;

    if (this.validWinner(squares)){
      let str = "Winner: ";

      status = xIsNext ? str += "O" : str += "X"
    }

    return (
      <div id="root">
        <Board squares={squares} onClick={(i) => this.handleClick(i)}/>
        { status ? status : "" }
      </div>
    );
  }
}

export default Game;
