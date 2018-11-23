import React, { Component } from 'react';
import './App.css';

class App extends Component {
// @TODO: 
// Add 2 modes. Single player and multiplayer.
// Improve design

  constructor() {
    super();
    this.state = {
      winnerLine:'Let\'s play...!',
      winner: null,
      turn: 'X',
      gameLocked: false,
      gameEnded: false,
      board: Array(9).fill(''),
      totalMoves: 0
    };

  }

  clicked = (box) => {
    
    if(this.state.gameEnded || this.state.gameLocked) return;

    if(this.state.board[box.dataset.square] == '') {
      this.state.board[box.dataset.square] = this.state.turn;
      box.innerText = this.state.turn;
      
      this.state.turn = this.state.turn == 'X' ? 'O' : 'X';
      
      if(this.state.turn == 'X'){
        this.setState({winnerLine:'Your Turn...!'});
      }else{
        this.setState({winnerLine:'AI is playing...!'})
      }
      this.state.totalMoves++;
    }


    var result = this.checkWinner();

    if(result == 'X') {
      this.state.gameEnded = true;
      this.setState({
        winner: 'X',
        winnerLine: 'X wins the game!'
      });
    } else if(result == 'O') {
      this.state.gameEnded = true;
      this.setState({
        winner: 'O',
        winnerLine: 'O wins the game!'
      });
    } else if(result == 'draw') {
      this.state.gameEnded = true;
      this.setState({
        winner: 'draw',
        winnerLine: 'It\'s draw!'
      })
    }
    
    if(this.state.turn == 'O' && !this.state.gameEnded) {
      this.state.gameLocked = true;
      setTimeout(()=> {
        do {
          var random = Math.floor(Math.random()*9);
        } while(this.state.board[random] != '');
        this.state.gameLocked = false;
        this.clicked(document.querySelectorAll('.square')[random]);
      }, 300);
    }
  }

  checkWinner = () => {
    var moves = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8]];
    var board = this.state.board;
    for(let i=0;i<moves.length;i++) {
      if(board[moves[i][0]] == board[moves[i][1]] && board[moves[i][1]] == board[moves[i][2]])
          return board[moves[i][0]];
    }

    console.log(this.state.totalMoves);
    if(this.state.totalMoves == 9) {
      return 'draw';
    }
  }

  playAgain = () => {
    this.setState({
      winnerLine:'Let\'s play...!',
      winner: undefined,
      turn: 'X',
      gameLocked: false,
      gameEnded: false,
      board: Array(9).fill(''),
      totalMoves: 0
    });

    let boxes = document.querySelectorAll('.square');
    
    boxes.forEach((box) =>{
     box.innerText = '';
    })
  }

  render() {
    return (
      <div id="game">
          <div id="head">
              Tic-Tac-Toe
          </div>
          <div id="board" onClick={(e) => this.clicked(e.target)}>
              <div className="square" data-square="0"></div>
              <div className="square" data-square="1"></div>
              <div className="square" data-square="2"></div>
              <div className="square" data-square="3"></div>
              <div className="square" data-square="4"></div>
              <div className="square" data-square="5"></div>
              <div className="square" data-square="6"></div>
              <div className="square" data-square="7"></div>
              <div className="square" data-square="8"></div>
          </div>
          <div id="status">{this.state.winnerLine}</div>
          {this.state.gameEnded ? <button className="play-btn" onClick={ () => this.playAgain() }>Play Again</button> : ''}
      </div>      
    );
  }
}
export default App;